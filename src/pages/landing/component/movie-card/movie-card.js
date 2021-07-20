import './movie-card.scss';

function MovieCard({ movie }) {
  return (
    <a className="movie-card" key={ movie.imdbID } data-testid="movie-card">
      <div className="poster">
        <img src={ movie.Poster } data-testid="movie-card-poster"/>
      </div>
      <span className="movie-title" data-testid="movie-card-title">{ movie.Title }</span>
      <span className="release-date" data-testid="movie-card-year">{ movie.Year }</span>
    </a>
  );
}

export default MovieCard;
