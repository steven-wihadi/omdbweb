import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LandingService } from './landing.service';
import './landing.scss';
import store from '../../shared/redux/store';
import MovieCard from './component/movie-card/movie-card';

let totalData = 0;
let isMaximum = false;

function LandingPage() {
  let searchInput = useSelector((state) => state.movieListParams.searchInput);
  const [movieList, setMovieList] = useState([]);
  let [page, setPage] = useState(1);

  useEffect(() => {
    fetchList();
    listenStoreChanges();
  }, []);

  const fetchList = (procedure) => {
    LandingService.useCase.getMovieList(searchInput, page).then((res) => {
      if (res.status === 200 && res.data.Response === 'True') {
        const data = res.data.Search;

        if (procedure === 'reset-list') { setMovieList([...data]); }
        else { setMovieList([...movieList, ...data]); }

        totalData += data.length;
        isMaximum = (totalData === Number(res.data.totalResults)) ? true : false;
      } else {
        setMovieList([]);
      }
    });
  }

  const listenStoreChanges = () => {
    store.subscribe((res) => {
      setPage(1);
      isMaximum = false;
      totalData = 0;
      searchInput = store.getState().movieListParams.searchInput;
      fetchList('reset-list');
    });
  }

  const onScroll = e => {
    if (e.target.scrollTop === e.target.scrollTopMax && !isMaximum) {
      setPage(page += 1);
      fetchList();
    }
  };

  return (
    <div className="landing-page-container" onScroll={onScroll} data-testid="landing-page-container">
      
      <div className="card-list-container">
        { movieList &&
          movieList.map((movie) => 
            <MovieCard movie={movie} />
          )
        }
      </div>
    </div>
  );
}

export default LandingPage;
