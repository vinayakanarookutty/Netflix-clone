import './Rowpost.css'
import axios from '../../axious'
import {apikey,imgurl} from '../../constants/constatns'
import React, {useEffect, useState} from 'react'
import Youtube from 'react-youtube'
function Rowpost(props) {
  const [movies,setMovies]= useState([])
  const [urlid,setid]= useState("")
  useEffect(() => {
    axios.get(props.url).then((Response)=>{
      console.log(Response.data)
      setMovies(Response.data.results)
    })
  
    return () => {
      
    }
  }, [])
  const opts = {
    height: '590',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlechange=(id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${apikey}&language=en-US`).then(Response=>{
      console.log(Response.data)
      if(Response.data.results.length!==0)
      {
      setid(Response.data.results[0])
      }
      else{
        console.log("Trailer Not avilable")
      }
    })

  }
  
  return (
    <div className='rows'>
    <h2>{props.title}</h2>
    <div className='posters'>
      {movies.map((obj)=>
        <img onClick={()=>handlechange(obj.id)} className={props.isSmall ? 'smallposter' :'poster'} alt="series" src={`${imgurl+obj.backdrop_path}`}></img>
    
      )}
    
   </div>
   { urlid && <Youtube opts={opts} videoId={urlid.key}/>} 
    </div>
    
  )
}

export default Rowpost  