import Card from "../components/Card"
import Movies from "../data/movies"


const MoviesPage = () => {
  return (
    <>
    <h1 style={{textAlign:"center"}}> MoviesPage</h1>
    <div className="container"> 
    {Movies.map((item, i) => {

      return  <Card 
        key={i}
        title={item.title}
        release={item.release}
        director={item.director}
        image={item.image}
        />
    })}
    </div>
    </>
  )
}

export default MoviesPage