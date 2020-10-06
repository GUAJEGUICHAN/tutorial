import React from 'react'// 컴포넌트 생성에 필요한 라이브러리
import PropTypes from 'prop-types';
import "./Movie.css"
function Movie({id, year, title, summary, poster,genres}){
  return<div className="movie">
    <img src={poster} alt={title} title={title}/>
    <div className="movie__data">
      <h3 className="movie__title">{title}</h3>
      <ul className="movie__genres">{genres.map((genres, index)=><li key= {index} className="genres__genres">{genres}</li>)}</ul>
      <h5 className="movie__year">{year}</h5>
      <p className="movie__summary">{summary.slice(0,180)}...</p>
      
    </div>
    
  </div>
}
Movie.propTypes= {
  id :PropTypes.number.isRequired,
  year:PropTypes.number.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  poster:PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired

   
}

export default Movie