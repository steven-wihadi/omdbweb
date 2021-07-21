import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailService } from "./movie-detail.service";
import MovieDetailContent from "./components/movie-detail-content/movie-detail-content";

function MovieDetailPage() {

  const movieId = useParams().id;
  const [movieDetail, setMovieDetail] = useState(undefined);

  useEffect(() => {
    getMovieDetail();
  }, []);

  function getMovieDetail() {
    MovieDetailService.useCase.getMovieDetail(movieId).then((res) => {
      if (res.data.Response === 'True') {
        setMovieDetail(res.data);
      }
    });
  }

  return (
    <div className="movie-detail-container" data-testid="movie-detail-container">
      { movieDetail &&
        <MovieDetailContent movieDetail={ movieDetail } />
      }
    </div>
  );
}

export default MovieDetailPage;
