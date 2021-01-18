import RegisterType from "../components/form/RegisterType";
import {useContext, useState} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect, useHistory} from "react-router-dom";

export const Register = () => {
    const {user, addUser} = useContext(UserContext)
    const [error, setError] = useState(null)
    const history = useHistory()
    const handleSubmit = data =>{
        const _error = addUser(data)
        setError(_error)
        if(!_error){
            history.push("/login")
        }
    }
    return(
        <div className="container">
            { user && <Redirect to="/profile" />}
            <div className="card">
                <div className="card-body">
                    <RegisterType onSubmit={handleSubmit} error={error} />
                </div>
            </div>
        </div>
    )
}
