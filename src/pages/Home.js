import Header from "../components/Header";

export const Home = () => {
    return(<>
            <Header />
            <div className="container">
                <div className="row">
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

function CardPost () {
    return(
        <div className="col-md-4 col-lg-3 col-sm-6 p-2 mb-3 ">
            <div className="card card_home_post" data-aos="fade-up">
                <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque a lacus eget interdum. Vivamus posuere est ac faucibus condimentum. Donec efficitur tellus id ante porta lobortis. In iaculis tellus ut convallis auctor. Nunc lobortis purus at erat congue, ac venenatis leo consectetur
                </div>
            </div>
        </div>
    )
}
