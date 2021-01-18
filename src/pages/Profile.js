import {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect} from "react-router-dom";
import {Button} from "@material-ui/core";
import PostModal from "../components/modals/PostModal";

export default function Profile (){
    const {user} = useContext(UserContext)

    return(

        <div>
            { user==null ? <Redirect to="/login" /> :
                <ProfilePage user={user} />
            }
        </div>
    )
}


function ProfilePage ({user}){
    return(
    <div className="container">
        <div className="row d-flex justify-content-start">
            <h1 className="mr-auto">Welcome {user.username}</h1>
            <Button  variant="contained" color="secondary" data-toggle="modal" data-target="#postModal"><i className="fa fa-plus mr-2" ></i> Add a post </Button>
        </div>
        <PostModal />
    </div>
    )
}
