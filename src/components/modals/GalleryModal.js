import {getImagesGaleryUrl} from "../../dataManager";
import {useForm} from "react-hook-form";
import {useState} from "react";


export default function GalleryModal({url, setUrl, hidden}) {
    const [hide, setHide] = useState(true)
    const urls = getImagesGaleryUrl()
    const {register, handleSubmit} = useForm();
    function onSubmit(data){
        setUrl(urls[parseInt(data.image)])
        setHide(true)
    }
    return(
        <div className="modal fade" id="galleryModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={hide}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Choose an image</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {urls.map((url, key) => <div className="col-md-4 col-xl-3 col-sm-6 p-2">
                                <div className="row d-flex justify-content-center">
                                    <img src={url} className="img-fluid img-galery"  />
                                </div>
                                <div className="row d-flex justify-content-center pt-2">
                                    <input type="radio" name="image" value={key} ref={register}/>
                                </div>

                            </div> )}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit"  className="btn btn-primary"  >Select</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
