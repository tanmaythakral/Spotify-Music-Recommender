import React from 'react';
import axios from 'axios'
import Recommendations from './Recommendations';
import { useState , useEffect} from 'react';

const Credentials = {
    "Spotify" : [
        {
            "ClientId" : '302e8a7bf7464b7c8c53b0ed7fe09005'
        },
        {
            "ClientSecret" : '2570578cb2ee45faa171d6cc1e732b9a'
        }
    ]
}

var lim;


function createcomponent(data) {
    return(<Recommendations props={data}></Recommendations>);
}

export default function BodyComponent() {
    
    const [token , setToken ] = useState('')
    const [genre , setGenres] = useState('')
    const [playlist , setPlaylist] = useState('')
    const [uri , setUri]  = useState('')

    function authorize(){
        axios('https://accounts.spotify.com/authorize', {
            method: 'GET',
        params: {
        client_id: Credentials.Spotify[0].ClientId ,
        redirect_uri: 'http://localhost:3000/',
        response_type: 'token',
        scope: "playlist-modify-public playlist-modify-private"
        }})
        .then(authorizeResponse =>{
            console.log(authorizeResponse.request.responseURL);
            window.location.replace(authorizeResponse.request.responseURL);
        });
    };
    
    function recommendations() {
        var uri = []
        var access_token = new URL(window.location).hash.split('&').filter(function(el) { if(el.match('access_token') !== null) return true; })[0].split('=')[1];
        console.log(access_token)
        setToken(access_token)
        console.log(token)
        axios('https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA' , {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization'  : 'Bearer ' + token
            },
        })
        .then(genreResponse => {
            console.log(genreResponse)

            for (let i = 0; i<9;  i++) {
                let x = genreResponse.data.tracks[i].uri
                uri.push(x)
            }

            console.log(uri)
            setUri(uri)
            ;})
        
    };

    function makeplaylist() {
        axios('https://api.spotify.com/v1/me',{
                headers: {
                    'Authorization': 'Bearer ' + token
                },
            })
            .then(response =>{
                console.log(response.data.id)
            
            axios('https://api.spotify.com/v1/users/'+ response.data.id +'/playlists' , {
                method: 'POST',
                data: {
                    'name' : 'My Playlist',
                    'description' : 'Damn my playlist SHeeeeeeeeesh',
                    'public' : false
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization'  : 'Bearer ' + token
                },
            })
            .then(playlistresponse => {
                console.log(playlistresponse.data.id)
                setPlaylist(playlistresponse.data.id)
                axios('https://api.spotify.com/v1/playlists/'+ playlist + '/tracks' , {
                    method: 'Post',
                    data: {
                        'uris' : uri
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization'  : 'Bearer ' + token
                    },
                }).then(playlistsongs => {
                    console.log(playlistsongs.status)
                    
                })
            });})
    }

    console.log(genre);
    return (
        <>
            <div><button onClick={authorize} >Click To Authorize</button>
            <button onClick={recommendations} >Get Recommended</button>
            <button onClick={makeplaylist} >Add to Spotify</button></div>
            



        </>
    );
}