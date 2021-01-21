import Header from "../components/Header";
import React, {useContext, useEffect, useState} from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css
import ReactAudioPlayer from 'react-audio-player';
import {usePosts} from "../hooks/usePosts";
import HomeTimeline from "../components/HomeTimeline";
import {Skeleton} from "@material-ui/lab";
import PostType from "../components/form/PostType";
import {UserContext} from "../providers/userProvider";
import {Link} from "react-router-dom";



/**
 * This is the home page function.
 * This page shows you the activity of users,
 * and provide you to create a post if you're connected.
 * @returns {JSX.Element}
 * @constructor
 */
export const Home = () => {
    const {user} = useContext(UserContext)
    const {posts, fetchPosts, addPost} = usePosts()
    useEffect(() => {
        fetchPosts()
    }, [])
    const [type, setType] = useState('message')
    const onSubmit = (e) => {
        e.preventDefault()
        const data = serializeForm(e.target)
        e.target.reset()
        addPost({
            id: Math.floor(Math.random()*9),
            createdBy: user.id || 1,
            createdAt: (new Date()).getDate(),
            ...data
        })
    }
    return(<>
            <Header />
            {
            <section className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8">
                        {user ?
                            <div className="card">
                                <div className="card-header bg-white">
                                    <h3 className="text-primary">Write a post</h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <textarea className="w-100 form-control" placeholder="Enter your message here" name="message" id="message" />

                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="type" id="message_"
                                                   value="message"  onChange={(e) => {e.target.checked && setType('message')}} checked={type==='message'} />
                                            <label className="form-check-label" htmlFor="message_">Message</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="type" id="video"
                                                   value="video" onChange={(e) => {e.target.checked && setType('video')}} checked={type==='video'} />
                                            <label className="form-check-label" htmlFor="video">Video</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="type" id="music"
                                                   value="music" onChange={(e) => {e.target.checked && setType('music')}} checked={type==='music'} />
                                            <label className="form-check-label" htmlFor="music">Music</label>
                                        </div>

                                        <div className={ type==="music" ? "form-group " : "form-group d-none"}>
                                            <input name="music_url" id="music_url" placeholder="Enter your music URL here..." className="form-control w-100" />
                                        </div>
                                        <div className={ type==="video" ? "form-group " : "form-group d-none"}>
                                            <input name="video_url" id="video_url" placeholder="Enter your video URL here..." className="form-control w-100" />
                                        </div>
                                        <div className="form-group d-flex align-content-end">
                                            <button className="btn btn-primary " type="submit" >Post</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className="card">
                                <div className="card-body d-flex justify-content-center">
                                    <Link to="/login"> Sign in to write a post </Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </section>
            }
            <section className="container">
                {
                    posts  ? <HomeTimeline posts={posts} />
                    : <Skeleton variant="text" width={"100%"} height={70} className="d-flex align-items-center justify-content-center">
                        <h3 className="text-primary">Loading</h3>
                        </Skeleton>
                }
            </section>
            <section className="container">
                <div className="row">
                </div>
            </section>
        </>
    )
}

function CardPost ({type}) {

    return(
        <div className="col-md-4 col-sm-6 p-2 mb-3 ">
            <div className="card card_home_post" data-aos="fade-up">
                <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque a lacus eget interdum. Vivamus posuere est ac faucibus condimentum. Donec efficitur tellus id ante porta lobortis. In iaculis tellus ut convallis auctor. Nunc lobortis purus at erat congue, ac venenatis leo consectetur
                </div>
                <div className="card-footer">
                </div>
            </div>
        </div>
    )
}

function CardPostVideo(){
    return(
        <div className="col-md-4 col-sm-6 p-2 mb-3 ">
        <div className="card card_home_post" data-aos="fade-up">
            <div className="card-body">
                <Player playsInline poster="/assets/poster.png" src="https://cdn.videvo.net/videvo_files/video/free/2013-12/small_watermarked/CROWD_JUMPS_LIGHTS_PULSE_preview.webm"/>
            </div>
            <div className="card-footer">
            </div>
        </div>
    </div>
    )
}


function CardPostMusic(){
    return(
        <div className="col-md-4 col-sm-6 p-2 mb-3 ">
        <div className="card card_home_post" data-aos="fade-up">
            <div className="card-body">
            <ReactAudioPlayer className="w-100" src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" controls/>
            </div>
            <div className="card-footer">
            </div>
        </div>
    </div>
    )
}


var serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return obj;
};
