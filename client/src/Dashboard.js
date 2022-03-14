import Authen from "./Authen";

const Dashboard = (code) => {

    const accessToken  = Authen(code);
    console.log('accessToken', accessToken);
    return (
        <div>
            <h1>{code.loginCode}</h1>
        </div>
    )
}

export default Dashboard