import React from 'react';
import axios from 'axios'
import { useState , useEffect} from 'react';

const Credentials = {
    "Spotify" : [
        {
            "ClientId" : '302e8a7bf7464b7c8c53b0ed7fe09005'
        }
    ]
}

const genreslist =  [
      "Alt Rock",
      "Bluegrass",
      "Blues",
      "Classical",
      "Country",
      "Dance",
      "Electro",
      "Hard Rock",
      "Heavy Metal",
      "Hip Hop",
      "House",
      "Indie",
      "Jrock",
      "Kpop",
      "Pop"
    ]

export default function BodyComponent() {
    
    const [token , setToken ] = useState('')
    const [genres , setGenres] = useState([])
    const [playlist , setPlaylist] = useState('')
    const [uri , setUri]  = useState('')
    const [name , setName] = useState('')
    const [songs , setSong] = useState([{}])
    const [clicked , setClicked] = useState(false)
    const [response , setresponse] = useState('')
    const [limit , setLimit] = useState(10)
    const [genreselector , setGenreselect] = useState('kpop')
    const [toptrack , setToptrack] = useState('')
    const [topArtist, setTopArtist] = useState('')
    const [dance, setDance] = useState(.5)
    
    useEffect(() => {
        var url = window.location;
        try {
        var access_token = new URL(url).hash.split('&').filter(function(el) { if(el.match('access_token') !== null) return true; })[0].split('=')[1];
        setToken(access_token)
        } catch (e) {
            console.log("Error")
        }
        axios('https://api.spotify.com/v1/me/top/tracks', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        })
        .then(response => {

            var track = []

            for (let i = 0 ; i < 20 ; i++ ){
                let x = response.data.items[i].id
                track.push(x)
            }

            const random = Math.floor(Math.random() * track.length);

            setToptrack(track[random])
        });

        axios('https://api.spotify.com/v1/me/top/artists', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        })
        .then(response => {
            var artists = []

            for (let i = 0 ; i < 20 ; i++ ){
                let x = response.data.items[i].id
                artists.push(x)
            }

            const random = Math.floor(Math.random() * artists.length);
            setTopArtist(artists[random])
        });
    },[])

    function handleGenreChange(event) {
        setGenreselect(event.target.value)
    }

    function handleDanceChange(event) {
        setDance(event.target.value)
    }
    function createcomponent() {
        return(
            <div>
                {
                    songs.map((song) => (
                        <div className="album row">
                        <img className = "albumimage col-6" src = {song.imageurl} alt = {song.songname}></img>
                        <h1 className = "albumnheading col-6">{song.songname}</h1>
                        </div>
                        
                    ))
                }
            </div>
        );
    }

    function handleLimitChange(event) {
        setLimit(event.target.value)
    }

    async function recommendations() {
        axios('https://api.spotify.com/v1/me',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization'  : 'Bearer ' + token
            },
            })
            .then(response =>{
                setName(response.data.display_name)
                setresponse(response.data.id)
            });
        var uri = []
        var songs = []
        await axios('https://api.spotify.com/v1/recommendations' , {
            method: 'GET',
            params: {
                limit: limit,
                seed_artists : topArtist , 
                seed_genres :  genreselector,
                seed_tracks : toptrack ,
                target_danceability : dance
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization'  : 'Bearer ' + token
            },
        })
        .then(recommendationsResponse => {
            for (let i = 0; i<limit;  i++) {
                let x = recommendationsResponse.data.tracks[i].uri
                uri.push(x)
                let y = {'songname' :  recommendationsResponse.data.tracks[i].name, 'imageurl' : recommendationsResponse.data.tracks[i].album.images[1].url}
                songs.push(y)
            }
            setUri(uri)
            setSong(songs)
            setClicked(true)
            alert("Checkout your recommendations! Hit button again for another set or scroll down to add them on spotify")
            ;}).catch(err => {
                console.log(err)
                // if (err.response) {
                //     if (err.response.status === 400) {
                //         recommendations()
                //     }
                //   }
            })
        
    };

    function makeplaylist() {
        
            
            axios('https://api.spotify.com/v1/users/'+ response +'/playlists' , {
                method: 'POST',
                data: {
                    'name' : 'My Playlist',
                    'description' : 'Created by KingShadow285',
                    'public' : false
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization'  : 'Bearer ' + token
                },
            })
            .then(playlistresponse => {
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
                   alert("Songs have been added!") 
                }).catch(err => {
                    console.log(err)
                })
            });
    }

    return (
        <>
            <div>
            <div class="mb-3">
            <h2>Choose your Genre!</h2>
            <select class="genre-select form-select form-select-lg mb-3" onChange={handleGenreChange} aria-label=".form-select-lg example">
            {
                genreslist.map((genre , i) => (<option value={i}>{genre}</option>))
            }
            </select>
            <h2>How many recommendations do you need?</h2>
            <input value = {limit} type="number" onChange = {handleLimitChange} min="1" max = "100" class="form-control" id="exampleInputPassword1" />
            <h2>How much do you feel like Dancing?</h2>
            <input type="range" onChange = {handleDanceChange} class="form-range" min="0" max="1" step = ".001" id="customRange2"></input>
            </div>
            <button id = "get-recom"onClick={recommendations} >Get Recommended</button>
            {clicked ? <h1 class = "welcome-header">Ok! <span id = "name">{name}</span> let's get started</h1> : null}
            {clicked ? createcomponent() : null}
            {clicked ? <button onClick={makeplaylist} id = "addtoplaylist">Add to Spotify</button> : null}
            </div>
        </>
    );
    
}