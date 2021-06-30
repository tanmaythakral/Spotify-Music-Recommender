import React from 'react';



function authorize(){
    // axios('https://accounts.spotify.com/authorize', {
    //     method: 'redirect',
    //     // crossDomain: true,
    //     crossDomain : true,
    //     // crossorigin : true,
    // params: {
    // client_id: Credentials.Spotify[0].ClientId ,
    // redirect_uri: 'https://spotify-songs-recommender.herokuapp.com/search',
    // response_type: 'token',
    // scope: "playlist-modify-public playlist-modify-private user-top-read"
    // }})
    // .then(authorizeResponse =>{
    //     console.log(authorizeResponse.request.responseURL);
    //     window.location.replace(authorizeResponse.request.responseURL);
    // });
    window.location.replace("https://accounts.spotify.com/authorize?client_id=302e8a7bf7464b7c8c53b0ed7fe09005&redirect_uri=https:%2F%2Fspotify-songs-recommender.herokuapp.com%2Fsearch&response_type=token&scope=playlist-modify-public+playlist-modify-private+user-top-read");
};

export default function Home() {
    return(
        <div>
            <h1 class = "welcome-header">Hello</h1>
            <button onClick={authorize}>Click to authorize</button>
        </div>
    );
}