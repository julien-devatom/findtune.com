import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import {useContext} from "react";
import {UserContext} from "../../providers/userProvider";


export default function LoginType({onSubmit, error}) {
    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    const addUser = useContext(UserContext)
    return(
    <form onSubmit={handleSubmit(onSubmit)}>
        {error && <Alert severity="error">{error}</Alert>}
        <div className="row">
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className={errors.username ? "form-control is-invalid" : "form-control"} type="text" id="username" ref={register({required: 'Username is required'})} name="username"/>
                {errors.username && <span className="invalid-feedback">{errors.username.message}</span>}
            </div>
        </div>
        <div className="row">
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" ref={register({required: 'password is required'})} name="password"/>
            </div>
        </div>
        <Button disabled={isSubmitting} type="submit" variant="outlined" color="primary" className="w-100">{} Login</Button>
    </form>
    )
}
