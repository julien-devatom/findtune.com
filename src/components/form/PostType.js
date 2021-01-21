import {useState} from "react";
import {useForm} from "react-hook-form";

export default function PostType(onSubmit){
    const [type, setType] = useState('message')
    const {register, handleSubmit, formState, errors} = useForm();
    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <textarea className="w-100 form-control" placeholder="Enter your message here" name="message" id="message_" ref={register} />

        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="type" id="message"
                   value="message"  onChange={(e) => {e.target.checked && setType('message')}} checked={type==='message'} />
                <label className="form-check-label" htmlFor="message">Message</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="type" id="video"
                   value="video" onChange={(e) => {e.target.checked && setType('video')}} checked={type==='video'} />
                <label className="form-check-label" htmlFor="video">Video</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="type" id="music"
                   value="music" onChange={(e) => {e.target.checked && setType('music')}} checked={type==='music'} ref={register}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Music</label>
        </div>

        { type==="music" && <div className="form-group">
            <input name="music_url" id="music_url" placeholder="Enter your music URL here..." className="form-control w-100" ref={register}/>
        </div>
        }
        { type==="video" && <div className="form-group">
            <input name="video_url" id="video_url" placeholder="Enter your video URL here..." className="form-control w-100" ref={register}/>
        </div>
        }
        <div className="form-group d-flex align-content-end">
            <button className="btn btn-primary " type="submit" >Post</button>
        </div>
    </form>
}
