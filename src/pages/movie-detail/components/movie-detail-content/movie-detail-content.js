import './movie-detail-content.scss';

function MovieDetailContent({ movieDetail }) {
  return (
    <div className="movie-detail-component" data-testid="movie-detail-component-container">
      <div className="poster">
        <img data-testid="movie-detail-component-poster" src={ movieDetail.Poster } />
      </div>

      <div className="detail-movie">
        <h1 className="movie-title" data-testid="movie-detail-component-title">{ movieDetail.Title }</h1>
        <p className="movie-description" data-testid="movie-detail-component-desc">{ movieDetail.Plot }</p>
        <span className="movie-release-date" data-testid="movie-detail-component-release">{ movieDetail.Released }</span>
      </div>
    </div>
  );
}

export default MovieDetailContent;