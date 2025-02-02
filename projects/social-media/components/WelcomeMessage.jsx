const WelcomeMessage = ({ onGetPostClick }) => {

    return (
        <>
            <center className="welcomeMessage">

                <h1>There Are No Post </h1>

                <button type="button"
                    onClick={onGetPostClick}
                    className="btn btn-primary"
                >Get Post From Server
                </button>
            </center>

        </>
    )
}

export default WelcomeMessage;