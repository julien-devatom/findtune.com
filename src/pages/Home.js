import Header from "../components/Header";
import React from 'react';
import { Player } from 'video-react';
import "video-react/dist/video-react.css"; // import css

/**
 * cards.map(card => <CardPost type={card.type} data={card.data})
 */

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const Home = () => {
    return(<>
            <Header />
            <div className="container">
                <div className="row">
                    <CardPostVideo />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPostVideo />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                    <CardPost />
                </div>
            </div>
        </>
    )
}

function CardPost ({type}) {

    return(
        <div className="col-md-4 col-sm-6 p-2 mb-3 ">
            <div className="card card_home_post" data-aos="fade-up">
                <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque a lacus eget interdum. Vivamus posuere est ac faucibus condimentum. Donec efficitur tellus id ante porta lobortis. In iaculis tellus ut convallis auctor. Nunc lobortis purus at erat congue, ac venenatis leo consectetur
                </div>
                <div className="card-footer">
                </div>
            </div>
        </div>
    )
}

function CardPostVideo(){
    return(
        <div className="col-md-4 col-sm-6 p-2 mb-3 ">
        <div className="card card_home_post" data-aos="fade-up">
            <div className="card-body">
                Video
                <Player playsInline poster="/assets/poster.png" src="https://cdn.videvo.net/videvo_files/video/free/2013-12/small_watermarked/CROWD_JUMPS_LIGHTS_PULSE_preview.webm"/>
            </div>
            <div className="card-footer">
            </div>
        </div>
    </div>
    )
}
