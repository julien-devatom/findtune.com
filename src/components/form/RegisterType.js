import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export default function RegisterType ({onSubmit}) {
    const error = null
    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && <Alert severity="error">{error}</Alert>}
            <div className="row">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input className={errors.username ? "form-control is-invalid" : "form-control"} type="text" id="username" ref={register} name="username"/>
                    {errors.username && <span className="invalid-feedback">{errors.username.message}</span>}
                </div>
            </div>
            <div className="row">
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="form-control" type="password" id="password" ref={register} name="password"/>
                </div>
            </div>
            <Button disabled={isSubmitting} type="submit" variant="outlined" color="primary" className="w-100">{} Login</Button>
        </form>
    )
}
