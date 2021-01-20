import RegisterType from "../components/form/RegisterType";
import {useContext, useState} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect, useHistory} from "react-router-dom";
import {FlashContext} from "../providers/flashProvider";
export const Register = () => {
    const {user, addUser} = useContext(UserContext)
    const {push} = useContext(FlashContext)
    const [error, setError] = useState(null)
    const history = useHistory()
    const handleSubmit = data =>{
        if(data.password === data.repeat_password) {
            const _error = addUser(data)
            setError(_error)
            if (!_error) {
                push({
                    type: 'success',
                    message: 'You can now connect'
                })
                history.push("/login")
            }
        }else{
            setError('Passwords are not the same')
        }
    }
    return(
        <div className="container">
            { user && <Redirect to="/profile" />}
            <div className="card">
                <div className="card-header bg-white">
                    <h2 className="text-primary text-center">Register now ! </h2>
                </div>
                <div className="card-body">
                    <RegisterType onSubmit={handleSubmit} error={error} />

                    <div className="row">
                    </div>
                </div>
            </div>
        </div>
    )
}
