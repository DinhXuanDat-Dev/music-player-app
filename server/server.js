// require(".env").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.post("/refresh", (req, res) => {
//   const refreshToken = req.body.refreshToken
//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: process.env.REDIRECT_URI,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken,
//   })

//   spotifyApi
//     .refreshAccessToken()
//     .then(data => {
//       res.json({
//         accessToken: data.body.accessToken,
//         expiresIn: data.body.expiresIn,
//       })
//     })
//     .catch(err => {
//       console.log(err)
//       res.sendStatus(400)
//     })
// })

app.post("/login", (req, res) => {
  const code = req.body.code
  console.log("code", code);
  const spotifyApi = new SpotifyWebApi({
    redirectUri: 'http://192.168.99.106:3001/',
    clientId: '68c62850c97b43bca77feda3f5a90806',
    clientSecret: '41a0337419424a07bf0009ffec38daf8',
  })

  console.log('spotifyApi', spotifyApi);

  spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch(err => {
      res.sendStatus(400)
      console.log(err);
    })
})

// app.get("/lyrics", async (req, res) => {
//   const lyrics =
//     (await lyricsFinder(req.query.artist, req.query.track)) || "No Lyrics Found"
//   res.json({ lyrics })
// })

app.listen(3001,'192.168.99.106')
