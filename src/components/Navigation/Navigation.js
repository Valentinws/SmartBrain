
const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (!isSignedIn) {
        return (
            <nav style={{ display: "flex", justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('signin')}
                    className="f3 link dim pointer black underline pa3"
                >
                    Sign In
                </p>
                <p
                    onClick={() => onRouteChange('register')}
                    className="f3 link dim pointer black underline pa3"
                >
                    Register
                </p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: "flex", justifyContent: 'flex-end' }}>
                <p
                    onClick={() => onRouteChange('signin')}
                    className="f3 link dim pointer black underline pa3"
                >
                    Sign Out
                </p>
            </nav>
        );
    }
}

export default Navigation;