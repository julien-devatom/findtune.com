import {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect} from "react-router-dom";

export default function Profile (){
    const {user} = useContext(UserContext)

    return(

        <div>
            { user==null ? <Redirect to="/login" /> :
                <h1>Welcome {user.username}</h1>
            }
        </div>
    )
}

