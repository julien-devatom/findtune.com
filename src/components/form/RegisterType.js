import {useForm} from "react-hook-form";
import {Button} from "@material-ui/core";
import {Alert, Autocomplete} from "@material-ui/lab";

export default function RegisterType ({onSubmit, error}) {
    const instruments = [
        {
            id: 1,
            label: "Guitar"
        },
        {
            id:2,
            label: "Piano"
        },
        {
            id:3,
            label: "Sing"
        }
    ]

    const {register, handleSubmit, formState, errors} = useForm();
    const {isSubmitting} = formState
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            {error && <Alert severity="error">{error}</Alert>}

            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="firstname">First name</label>
                    <input className={errors.firstname ? "form-control is-invalid w-100" : "form-control w-100"} type="text" id="firstname" ref={register({required: 'First name is required'})} name="firstname"/>
                    {errors.firstname && <span className="invalid-feedback">{errors.firstname.message}</span>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastname">Last name</label>
                    <input className={errors.lastname ? "form-control is-invalid w-100" : "form-control w-100"} type="text" id="lastname" ref={register({required: 'Last name is required'})} name="lastname"/>
                    {errors.lastname && <span className="invalid-feedback">{errors.lastname.message}</span>}
                </div>
                <div className="form-group col-12">
                    <label htmlFor="username">Username</label>
                    <input className={errors.username ? "form-control is-invalid w-100" : "form-control w-100"} type="text" id="username" ref={register({required: 'Username is required'})} name="username"/>
                    {errors.username && <span className="invalid-feedback">{errors.username.message}</span>}
                </div>
                <div className="form-group col-12">
                    <label htmlFor="password">Password</label>
                    <input className={errors.password ? "form-control is-invalid w-100" : "form-control w-100"}type="password" id="password" ref={register({required: 'A password is required'})} name="password"/>
                    {errors.password && <span className="invalid-feedback">{errors.password.message}</span>}
                </div>
                <div className="form-group col-12">
                    <label htmlFor="repeat_password"> Repeat Password</label>
                    <input className={errors.repeat_password ? "form-control is-invalid w-100" : "form-control w-100"} type="password" id="repeat_password" ref={register({required: 'Repeat your password'})} name="repeat_password"/>
                    {errors.repeat_password && <span className="invalid-feedback">{errors.repeat_password.message}</span>}
                </div>
            </div>
            <Button disabled={isSubmitting} type="submit" variant="outlined" color="primary" className="w-100">Register</Button>
        </form>

)
}
