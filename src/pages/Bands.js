import Header from "../components/Header";
import {AvatarGroup} from "@material-ui/lab";
import {Avatar, Button, Tabs} from "@material-ui/core";
import "./bands.css";

/**
 * This is the bands page, which list all the bands registered on the website
 * You can add your own through your profile page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Bands () {
        const band1={
            id:1,
            name: "Foggy Mountain Rockers",
            img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/band.svg",
            artists:{
                1: {
                    id:1,
                    name: "Julien",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                },
                2: {
                    id:2,
                        name: "Hugo",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                },
                3: {
                    id:3,
                    name: "Issa",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                }
            }
        }

        const band2={
            id:2,
            name: "Justice",
            img_url: "https://static.fnac-static.com/multimedia/Images/FR/NR/b5/98/9b/10197173/1540-1/tsp20180620174207/Woman-Worldwide-Coffret.jpg",
            artists:{
                1: {
                    id:1,
                    name: "Julien",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                },
                2: {
                    id:2,
                        name: "Hugo",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                },
                3: {
                    id:3,
                    name: "Issa",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                }
            }
        }


        const band3={
            id:3,
            name: "Daft Punk",
            img_url: "https://images-na.ssl-images-amazon.com/images/I/71s4lMxThwL._SL1300_.jpg",
            artists:{
                1: {
                    id:1,
                    name: "Julien",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                },
                2: {
                    id:2,
                        name: "Hugo",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                },
                3: {
                    id:3,
                    name: "Issa",
                    img_url: "https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/logo.png"
                }
            }
        }

    return(
        <section className="container mt-4">
            <BandCard band={band1} />
            <BandCard band={band2} />
            <BandCard band={band3} />
        </section>
    )
}

function BandCard ({band}){
    return (
        <article className="card card_band d-flex my-2" >
            <div className="card-body">
                <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="row d-flex justify-content-center">
                        <img src={band.img_url} className="img-fluid img-thumbnail rounded-circle" />
                    </div>
                    <div className="row d-flex justify-content-center mb-3 no-hover">
                        <Button variant="contained" color="primary" href={"/band/"+band.id}>
                            See more
                        </Button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1>{band.name}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id tortor hendrerit, scelerisque dui nec,
                        auctor ante. Donec ipsum dui, pharetra ut tortor id, mollis vulputate neque. Phasellus sit amet ultrices augue.
                        Morbi commodo ex vitae nisl ornare gravida. Nunc et lectus id nisl malesuada venenatis. Nulla efficitur metus at
                        lacus efficitur, sed lacinia arcu fringilla. Donec accumsan ornare ex nec malesuada. Curabitur ante urna,
                    </p>
                    <div className="card_band_artists" >
                        <AvatarGroup max={4}>
                            <Avatar alt="Julien" src="https://eu.ui-avatars.com/api/?background=2E45PD&color=fff&name=H+G" />
                            <Avatar alt="Julien" src="https://eu.ui-avatars.com/api/?background=049593&color=fff&name=H+G" />
                            <Avatar alt="Julien" src="https://eu.ui-avatars.com/api/?background=04AB2F&color=fff&name=H+G" />
                            <Avatar alt="Julien" src="https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff&name=H+G" />
                            <Avatar alt="Julien" src="https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff&name=H+G" />
                            <Avatar alt="Julien" src="https://eu.ui-avatars.com/api/?background=0D8ABC&color=fff&name=H+G" />
                        </AvatarGroup>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="row d-flex justify-content-center">
                        <img src="https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/deezer.svg" className="img-fluid"/>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <img src="https://julienthomasfeatures.s3.eu-west-3.amazonaws.com/spotify.svg"/>
                    </div>
                </div>
            </div>
        </div>
    </article>
    )

}
