import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {getUsers} from "../../dataManager";
import Select from "react-select"
import {useState} from "react";
import GalleryModal from "../modals/GalleryModal";

export default function BandType ({onSubmit, error}) {
    const users = getUsers()

    const options = users.map(user => {
        return {
            value: user.id,
            label: user.username
        }
    })
    const [hiddenGallery, setHiddenGalery] = useState(true)
    const [imgUrl, setImgUrl] = useState(null)
    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && <Alert severity="error">{error}</Alert>}

            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="firstname">Band Name</label>
                            <input className={errors.firstname ? "form-control is-invalid w-100" : "form-control w-100"} type="text" id="firstname" ref={register({required: 'First name is required'})} name="firstname"/>
                            {errors.firstname && <span className="invalid-feedback">{errors.firstname.message}</span>}
                        </div>
                        <div className="col-md-12 my-2">
                            <label htmlFor="artists">Select your artists</label>
                            <Select options={options} name="artists"
                                    id="artists"
                                    className="basic-multi-select"
                                    classNamePrefix="Select the artists"
                                    isMulti
                                    ref={register}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    {imgUrl ? <><div className="row ">
                            <div className="col-md-12 d-flex justify-content-center">
                                <img src={imgUrl} className="img-fluid" />
                            </div>
                            <div className="col-md-12 d-flex justify-content-center">
                                <a className="nav-link text-primary" data-toggle="modal" data-target="#galleryModal" >Change the image</a>
                            </div>
                        </div>
                        </>
                        :
                        <div className="row d-flex justify-content-center align-items-center">
                            <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#galleryModal" >Select a band image for your own !</button>
                        </div>
                    }
                </div>


                <div className="form-group col-12">
                    <label htmlFor="desc">Description of your band</label>
                    <textarea className={errors.desc ? "form-control is-invalid w-100" : "form-control w-100"} type="text" id="desc" ref={register({required: 'Username is required'})} name="desc"></textarea>
                    {errors.desc && <span className="invalid-feedback">{errors.desc.message}</span>}
                </div>
            </div>
            <Button disabled={isSubmitting} type="submit" variant="outlined" color="primary" className="w-100">Create your band {isSubmitting &&
            <div className="spinner-border" role="status">
            </div>
            }
            </Button>
        </form>
    <GalleryModal url={imgUrl} setUrl={setImgUrl} hidden={hiddenGallery} setHidden={setHiddenGalery}/>

    </>
)
}
