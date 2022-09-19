import './App.css';
import {useEffect,useState} from 'react';
import Card from './Component/Card'
import Filter from './Component/Filter'
import {motion} from 'framer-motion'
function App() {

  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)


  useEffect(() => {
    fetchPopular();
  },[])


  const fetchPopular = async ()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a05c82f862d3ec5eb7a8367b39d48f4d&language=en-US&page=1');
      const movies = await data.json();
      setPopular(movies.results);
      setFiltered(movies.results);

  }

 

  return (
    <div className="App">
      <h1 className="header">Info Movie</h1>

      <Filter popular={popular} setFiltered={setFiltered} setActiveGenre={setActiveGenre} activeGenre={activeGenre}/>
      <motion.div  layout className="movies">
            {
              filtered.map(movie=>{
                return <Card key={movie.id} movie={movie}/>
              })
            }
      </motion.div>
    </div>
  );
}

export default App;
