import LoginType from "../components/form/LoginType";
import {useContext, useState} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect, useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";

export const Login = () => {
    const history = useHistory()
    const [error, setError] = useState(null)
    const {user, getUserFromCredentials} = useContext(UserContext)
    const onSubmit = data => {
        const _user = getUserFromCredentials(data.username, data.password)
        console.log(_user)

      setError("invalid credentials")
    }

    return(
        <section className="container mt-4 d-flex justify-content-center align-items-center">
            { user && <Redirect to="/profile" />}
            <div className="card">
                <div className="card-header bg-white">
                    <h3 className="text-primary text-center"><b>Login</b></h3>
                </div>
                <div className="card-body">
                    <LoginType onSubmit={onSubmit} error={error}/>
                    <hr />
                    Not already registered ?
                        <Button onClick={() =>{history.push("/register")}} > Register now !</Button>

                </div>
            </div>
        </section>
    )
}

