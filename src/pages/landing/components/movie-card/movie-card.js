import './movie-card.scss';
import { useDispatch } from 'react-redux';
import { setPopUpPosterConf } from '../../../../shared/redux/features/popUpPosterConfSetter';

function MovieCard({ movie }) {

  const dispatch = useDispatch();

  const onClickPoster = (posterLink) => {
    dispatch(setPopUpPosterConf({ isShow: true, imgLink: posterLink }));
  }

  return (
    <div className="movie-card" data-testid="movie-card" key={ movie.imdbID }>
      <div className="poster">
        <img alt='card-poster-img'
          src={ movie.Poster } 
          data-testid="movie-card-poster" 
          onClick={ () => { onClickPoster(movie.Poster) } }
        />
      </div>
      <span className="movie-title" data-testid="movie-card-title">{ movie.Title }</span>
      <span className="release-date" data-testid="movie-card-year">{ movie.Year }</span>
    </div>
  );
}

export default MovieCard;
