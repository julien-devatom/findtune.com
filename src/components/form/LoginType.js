import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";


export default function LoginType() {
    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    const onSubmit = data => {
    console.log(data)
    }

    console.log(errors)
    return(
    <form onSubmit={handleSubmit(onSubmit)}>
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
