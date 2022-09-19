import React,{useEffect} from 'react'

function Filter({popular,setActiveGenre,activeGenre,setFiltered}) {
    useEffect(() => {
        if(activeGenre===0){
            setFiltered(popular);
            return;
        }
        const filtered=popular.filter((movie)=>movie.genre_ids.includes(activeGenre));
        setFiltered(filtered);
    }, [activeGenre])
  return (
    <div className="filter-group mt-3">
        <button className={activeGenre===0? "btn-filter active": "btn-filter"} onClick={()=>setActiveGenre(0)}>All</button>
        <button className={activeGenre===35? "btn-filter active": "btn-filter"} onClick={()=>setActiveGenre(35)}>Commedy</button>
        <button className={activeGenre===28? "btn-filter active": "btn-filter"} onClick={()=>setActiveGenre(28)}>Action</button>
        <button className={activeGenre===16? "btn-filter active": "btn-filter"} onClick={()=>setActiveGenre(16)}>Animasi</button>

    </div>
  )
}

export default Filter