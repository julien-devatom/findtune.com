import RegisterType from "../components/form/RegisterType";
import { useContext} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect} from "react-router-dom";

export const Register = () => {
    const {user, addUser} = useContext(UserContext)
    const handleSubmit = data =>{
        addUser(data)
        console.log(user)
    }
    return(
        <div className="container">
            { user && <Redirect to="/profile" />}
            <div className="card">
                <div className="card-body">
                    <RegisterType onSubmit={handleSubmit} error={null} />
                </div>
            </div>
        </div>
    )
}
