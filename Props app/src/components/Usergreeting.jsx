import PropTypes from 'prop-types'

function Usergreeting(props){
    const welcomePrompt = <h1 className="welcome-prompt">Welcome {props.username}</h1>
    const loginPrompt = <h2 className="login-prompt">You are not logged in</h2>
    return(
        props.isLoggedIn ? welcomePrompt : loginPrompt
    )
}

Usergreeting.proptypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

Usergreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}
export default Usergreeting;