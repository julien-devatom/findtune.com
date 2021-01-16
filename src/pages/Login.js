import LoginType from "../components/form/LoginType";

export const Login = () => {
    return(
        <section className="container mt-4 d-flex justify-content-center align-items-center">
            <div className="card">
                <div className="card-body">
                    <LoginType />
                </div>
            </div>
        </section>
    )
}

