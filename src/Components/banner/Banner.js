import axios from '../../axious'
import "./Banner.css"
import {apikey,imgurl} from '../../constants/constatns'
import React, {useEffect, useState} from 'react'
function Banner() {
  const [Movies, setMovies] = useState()

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apikey}`).then((Response)=>{
     console.log(Response.data.results[5])
      setMovies(Response.data.results[Math.floor(Math.random() * Response.data.results.length - 1)])
    })
  }, [])
  
  return (
    <div  style={{backgroundImage:`url(${Movies ?imgurl+Movies.backdrop_path : ""}    )`} }className='banner'>
        <div className='content'>
            <h1 className='title'>{Movies ? Movies.original_title || Movies.name : ""} </h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='description'>{Movies ? Movies.overview: ""}</h1>
        </div>
   <div className='bottom'></div>
    </div>
  )
}

export default Banner       