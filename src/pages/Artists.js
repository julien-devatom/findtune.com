import { Button,Switch } from "@material-ui/core";
import {useState} from "react";
import "./artists.css";

/**
 * This is the artist page, which shows you all the artists of findtunne
 * @returns {JSX.Element}
 * @constructor
 */
export default function Artists () {
    const artist1 = {
        id: 1,
        name: "Arias",
        surname: "Samantha",
        sexe: "m",
        age: 20,
        location: "Paris",

        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor hendrerit, scelerisque dui nec..... "
        ,
        instruments:[
            "Singer",
            "Bass Player",

        ],
        img_url: "https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/Ellipse-1.svg"
    }

    const artist2 = {
        id: 2,
        name: "Naima",
        surname: "Snider",
        sexe: "m",
        age: 25,
        location: "Paris",

        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor hendrerit, scelerisque dui nec..... "
        ,
        instruments:[
            "Guitarist",
            "Saxophonist",

        ],
        img_url: "https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/Ellipse-4.svg"
    }

    const artist3 = {
        id: 3,
        name: "Dave",
        surname: "Klein",
        sexe: "m",
        age: 32,
        location: "Madrid",

        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor hendrerit, scelerisque dui nec..... "
        ,
        instruments:[
            "Piccolo",
            "Saxophonist",

        ],
        img_url: "https://cassettefbisurveillancevan.s3.eu-west-3.amazonaws.com/Ellipse-3.svg"
    }

    const artist4 = {
        id: 4,
        name: "Maximilian",
        surname: "Barrow",
        sexe: "m",
        age: 45,
        location: "Antibes",

        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor hendrerit, scelerisque dui nec..... "
        ,
        instruments:[
            "Flutist",
            "Accordeonist",

        ],
        img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/user.svg"
    }

    return(
        <section className="container mt-4">
            <div className="row">
                <ArtistCard artist={artist1} isFollowed={false} />
                <ArtistCard artist={artist2} isFollowed={true} />
                <ArtistCard artist={artist3} isFollowed={true} />
                <ArtistCard artist={artist4} isFollowed={true} />
            </div>
        </section>
    )
}

function ArtistCard({artist, isFollowed})
{
   const [ follow, setFollow ]= useState(isFollowed)

    const unfollow = (e) => {
       if(follow){
           console.log("unfollow")
       }
       else{
           console.log("follow")
       }
       setFollow(!follow)
    }

    return(
        <div className="col-md-4 col-sm-6 p-2 ">
            <div className={follow ? "card card_artist card_artist_followed shadow" : "card card_artist shadow"} >
                <div className="card-body">
                    <Switch
                        checked={follow}
                        onChange={unfollow}
                        name="follow"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="row d-flex justify-content-center">
                                <img src={artist.img_url} className="img-fluid" alt={artist.name}/>
                            </div>
                            <div className="row d-flex justify-content-center pt-1">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{artist.instruments[0]}</li>
                                    <li className="list-group-item">{artist.instruments[1]}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="row d-flex justify-content-center">
                                <h2>{artist.name} {artist.surname}</h2>
                            </div>
                            <div className="row">
                                <span className="col-6">
                                    { artist.sexe === "m" ? <span className="fas fa-mars"></span> : <span className="fas fa-venus"></span> }, {artist.age} yo
                                </span>
                                <span className="col-6">
                                   <i className="fas fa-map-marker-alt"></i> {artist.location}
                                </span>
                            </div>
                            <p>
                                {artist.desc}
                            </p>
                            <div className="row d-flex justify-content-end pr-2 no-hover">
                                <Button variant="contained" color="primary" href={"/artist/"+artist.id}>
                                    See more
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
