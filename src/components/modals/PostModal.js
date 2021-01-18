import {useState} from "react";
import {useForm} from "react-hook-form";


export default function PostModal({_open}){
    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    const [open, setOpen] = useState(_open)
    const onSubmit = data => {
        console.log(data)
    }
    return(
        <div className="modal fade" id="postModal" tabIndex="-1" role="dialog"
             aria-hidden="false">
            <div className="modal-dialog" role="document">
                <form  onSubmit={handleSubmit(onSubmit)} >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add a post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" id="title" className="form-control w-100" ref={register}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea name="content" id="content" className="form-control w-100" ref={register} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="video_url">Add a video url</label>
                            <input name="video_url" id="video_url" className="form-control w-100" ref={register}/>
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary mr-auto" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-success" disabled={isSubmitting}>Add a post</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
