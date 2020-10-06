import React from 'react'// 컴포넌트 생성에 필요한 라이브러리
import Axios from 'axios'
import Movie from './Moive'
import './MovieApp.css'

class MovieApp extends React.Component{
    state={
      isLoading: true,
      movies: []
    }
    getMovies=async ()=>{
      const {data: {data:{movies}}} = await Axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
      this.setState({movies,isLoading:false})
      //this.setState({movies:movies})
    }
    componentDidMount(){
      this.getMovies();
    }
    render(){
      const {isLoading, movies} = this.state;
      return<section className="container">
        {isLoading ? (
        <div className="loader">
          <span className="loader__text">
            Loading...
          </span>
        </div> 
        ): (
          <div className="movies">
          {movies.map(movie=>{
          return <Movie 
                    key ={movie.id} 
                    id={movie.id} 
                    year={movie.year} 
                    title={movie.title} 
                    summary={movie.summary} 
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
        })}
        </div>
        )}
      </section>
    }
  }

  export default MovieApp