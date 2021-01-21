import Header from "../components/Header";
import {Link} from "react-router-dom";
import {Icon} from "@material-ui/core";
import {Divider} from "material-ui";
import {useState} from "react";
import {Rating} from "@material-ui/lab";

/**
 * This is the page of the artist, which show you all this informations.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Artist () {
    const artist = {
        id: 1,
        name: "Name",
        surname: "Surname",
        sexe: "f",
        age: 21,
        location: "Paris",
        followers: 12345,
        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis imperdiet justo non imperdiet. Proin sed est quam. Etiam pretium faucibus libero, sit amet aliquam urna. Maecenas facilisis, metus non fringilla pretium, quam dolor finibus massa, ac fermentum neque sapien eget ex. Vivamus iaculis felis nunc, eget eleifend orci molestie eleifend. Sed nisl lectus, sodales sed tincidunt ut, placerat non neque. Vivamus egestas, ante sit amet porttitor sagittis, magna purus vehicula leo, nec volutpat nulla ipsum in urna."
        ,
        instruments:[
            "Singer",
            "Bass Player",

        ],
        stars: 4,
        img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/user.svg"

    }

    return(
        <div className="container mt-3">
               <div className="card card_artist_profile">
                   <div className="card-body">
                       <section id="artist_profile">
                       <div className="row">
                           <div className="col-md-4">
                                <div className="flex-row">
                                    <Link to="/artists">
                                        <i className="fa fa-backward"></i>
                                    </Link>
                                </div>
                               <div className="flex-row justify-content-center">
                                   <ul className="list-group list-group-flush">
                                       <li className="list-group-item text-center">Guitar</li>
                                       <li className="list-group-item text-center">Singer</li>
                                   </ul>
                               </div>
                           </div>
                           <div className="col-md-4">
                               <div className="row d-flex justify-content-center">
                                   <img src={artist.img_url} className="img-fluid" alt={artist.name}/>
                               </div>
                               <div className="row d-flex justify-content-center">
                                   <h2>{artist.name} {artist.surname}</h2>
                               </div>
                               <div className="row d-flex justify-content-center">
                                   <Rating name="size-medium" defaultValue={artist.stars} readOnly className="mr-2"/> 4/5
                               </div>
                           </div>
                           <div className="col-md-4">
                                <div className="row d-flex justify-content-center justify-content-md-start">
                                    {artist.followers} followers
                                </div>
                                <div className="row d-flex justify-content-center justify-content-md-start">
                                    <i className="fas fa-map-marker-alt mr-2"></i> {artist.location}
                                </div>
                                <div className="row d-flex justify-content-center justify-content-md-start">
                                    { artist.sexe === "m" ? <i className="fas fa-mars"></i> : <i className="fas fa-venus"></i> }, {artist.age} yo
                                </div>
                           </div>
                           <div className="row">
                               <div className="d-flex justify-content-center p-3">
                                   <p className="text-center">
                                       {artist.desc}
                                   </p>
                               </div>
                           </div>
                       </div>
                       </section>

                       <hr />
                       <section id="publications">
                           <div className="row">
                               <h2>Publications :</h2>
                           </div>
                           <div className="row">
                               <MessagePublication />
                            </div>
                       </section>
                   </div>
               </div>
        </div>
    )
}

function MessagePublication() {
        const publication = {
            id: 1,
            createdBy: 4,
            createdAt: Date.now(),
            message:
            "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis imperdiet justo non imperdiet. Proin sed est quam. Etiam pretium faucibus libero, sit amet aliquam urna. Maecenas facilisis, metus non fringilla pretium, quam dolor finibus massa, ac fermentum neque sapien eget ex. Vivamus iaculis felis nunc, eget eleifend orci molestie eleifend. Sed nisl lectus, sodales sed tincidunt ut, placerat non neque. Vivamus egestas, ante sit amet porttitor sagittis, magna purus vehicula leo, nec volutpat nulla ipsum in urna.",
            likes: 134,
            liked: true
        }
        const {liked, setLiked} = useState(publication.liked)

        return(
    <div className="col-md-4 col-sm-6">
        <div className="card card_artist_publication">
            <div className="card-body p-4">
                <p>
                    {publication.message}
                </p>
            </div>
            <div className="card-footer">
                <a className="fa fa-heart"></a> {publication.likes}
            </div>

        </div>
    </div>
        )
}
