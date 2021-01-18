import LoginType from "../components/form/LoginType";
import {useContext, useState} from "react";
import {UserContext} from "../providers/userProvider";

export const Login = () => {

    const [error, setError] = useState(null)
    const {user, getUserFromCredentials} = useContext(UserContext)
    const onSubmit = data => {
        const _user = getUserFromCredentials(data.username, data.password)
        console.log(_user)
        console.log(user)
      setError("invalid credentials")
    }

    return(
        <section className="container mt-4 d-flex justify-content-center align-items-center">
            <div className="card">
                <div className="card-body">
                    <LoginType onSubmit={onSubmit} error={error}/>
                </div>
            </div>
        </section>
    )
}

