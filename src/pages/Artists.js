import {Avatar, Button, Icon, ListItemIcon, ListItemText, Switch} from "@material-ui/core";
import {AvatarGroup} from "@material-ui/lab";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {useState} from "react";
import {Divider, List, ListItem} from "material-ui";
import {makeStyles} from "@material-ui/core/styles";


export default function Artists () {
    const artist = {
        id: 1,
        name: "Hugette",
        surname: "Danet",
        sexe: "m",
        age: 11,
        location: "Paris",

        desc:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor hendrerit, scelerisque dui nec..... "
        ,
        instruments:[
            "Singer",
            "Bass Player",

        ],
        img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/user.svg"
    }
    return(
        <section className="container mt-4">
            <div className="row">
                <ArtistCard artist={artist} isFollowed={false} />
                <ArtistCard artist={artist} isFollowed={true} />
                <ArtistCard artist={artist} isFollowed={true} />
                <ArtistCard artist={artist} isFollowed={true} />
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
        <div className="col-md-4 col-sm-6 p-2">
            <div className={follow ? "card card_artist card_artist_followed" : "card card_artist"}>
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
                                    <li className="list-group-item">Guitar</li>
                                    <li className="list-group-item">Singer</li>
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
                            <div className="row d-flex justify-content-end pr-2">
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
