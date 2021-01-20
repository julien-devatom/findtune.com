import Header from "../components/Header";
import React, {useContext, useEffect} from 'react';
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
 * cards.map(card => <CardPost type={card.type} data={card.data})
 */

export const Home = () => {
    const {user} = useContext(UserContext)
    const {posts, fetchPosts} = usePosts()
    useEffect(() => {
        fetchPosts()
    }, [])

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
                                    <PostType/>
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
                    : <Skeleton variant="pulse" width={"100%"} height={70} className="d-flex align-items-center justify-content-center">
                        <h3 className="text-primary">Loading</h3>
                            <Skeleton variant="pulse" width={"100%"} height={30} />
                            <Skeleton variant="pulse" width={"100%"} height={30} />
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
