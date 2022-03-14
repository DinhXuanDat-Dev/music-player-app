const CLIENT_ID = "68c62850c97b43bca77feda3f5a90806"
// const CLIENT_ID = "8b945ef10ea24755b83ac50cede405a0"

// const AUTH_URL= `https://accounts.spotify.com/authorize?client_id=${LOCAL_ID}&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const AUTH_URL= `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http://192.168.99.106:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`

const Login = () => {
    return (
        <div>
            <button className="btn btn-Login">
                <a href={AUTH_URL} >Login/</a>    
            </button>    
        </div>
    )
}

export default Login