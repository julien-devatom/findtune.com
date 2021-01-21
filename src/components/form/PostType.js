import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {usePosts} from "../../hooks/usePosts";
import {UserContext} from "../../providers/userProvider";

export default function PostType(){
    const {addPost } = usePosts()
    const {user} = useContext(UserContext)
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
    return <form onSubmit={onSubmit}>
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
}



var serializeForm = function (form) {
    var obj = {};
    var formData = new FormData(form);
    for (var key of formData.keys()) {
        obj[key] = formData.get(key);
    }
    return obj;
};
