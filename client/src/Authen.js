import {useEffect, useState} from 'react'
import axios from 'axios'

export default function Authen(code) {

    console.log('authen code', code);
    var code = code.loginCode;
    const [accessToken ,setAccessToken] = useState();
    const [refreshToken ,setRefreshToken] = useState();
    const [expireIn ,setExpiredIn] = useState();
    
    useEffect(() => {
        axios.post("http://192.168.99.106:3001/login", {
            code,
        }).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
            // window.location = '/';
        })
    },[code])
}

// const Authen = (code) => {

//     const [accessToken ,setAccessToken] = useState();
//     const [refreshToken ,setRefreshToken] = useState();
//     const [expireIn ,setExpiredIn] = useState();

//     useEffect(() => {
//         axios.post('http://localhost:3001/login', {
//             code
//         }).then(response => {
//             console.log(response.data);
//         }).catch(err => {
//             console.log(err);
//             // window.location = '/';
//         })
//     },[code])

//     return (
//         <>
//             <h2>Authen</h2>
//         </>
//     )
// }

// export default Authen