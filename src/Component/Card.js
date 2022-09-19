import React from 'react'
import {motion} from 'framer-motion'

function Card({movie}) {
  console.log(movie)

  const dates=new Date(movie.release_date)
  const year=dates.getFullYear()
  return (
    <motion.div animate={{ opacity:1 }} initial={{ opacity:0 }} exit={{ opacity:0 }} layout className="card mb-5">
        <img className="w-full h-[45vh] mb-2 object-cover rounded-xl bg-gray-200 " src={"https://www.themoviedb.org/t/p/w500/"+movie.backdrop_path} alt="" title={movie.title}/>    
        <h2 className="font-bold text-center p-3 text-black h-12">{movie.title} <span className="text-purple-500"> - {year}</span> </h2>
        <p></p>
    </motion.div>
  )
}

export default Card