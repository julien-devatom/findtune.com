import React, {useContext} from "react";
import {UserContext} from "../providers/userProvider";
import {Redirect} from "react-router-dom";
import {Button} from "@material-ui/core";
import PostModal from "../components/modals/PostModal";
import PostType from "../components/form/PostType";
import BandType from "../components/form/BandType";

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
    function handleBandCreatorSubmit(data){
        console.log(data)
    }
    return(<>
        <div className="container">
        <div className="row d-flex justify-content-start">
            <h1 className="mr-auto">Welcome {user.username}</h1>
            <Button  variant="contained" color="secondary" data-toggle="modal" data-target="#postModal"><i className="fa fa-plus mr-2" ></i> Create a band ! </Button>
            <PostModal />
        </div>
        </div>
        <section className="container mt-4">
            <div className="card">
                <div className="card-header bg-white">
                    <h3 className="text-primary">Write a post</h3>
                </div>
                <div className="card-body">
                    <PostType/>
                </div>
            </div>
        </section>
        <section className="container mt-4">
            <div className="card">
                <div className="card-header bg-white">
                    <h3 className="text-primary">Create a band</h3>
                </div>
                <div className="card-body">
                    <BandType onSubmit={handleBandCreatorSubmit} />
                </div>
            </div>
        </section>
        </>
    )
}
