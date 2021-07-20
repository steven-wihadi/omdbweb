import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { LandingService } from './landing.service';
import './landing.scss';
import store from '../../shared/redux/store';

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
    <div className="landing-page-container" onScroll={onScroll}>
      <div className="card-list-container">
        { movieList &&
          movieList.map((movie) => 
            <a className="movie-card" target='_blank' key={ movie.imdbID }>
              <div className="poster">
                <img src={ movie.Poster }/>
              </div>
              <span className="movie-title">{ movie.Title }</span>
              <span className="release-date">{ movie.Year }</span>
            </a>
          )
        }
      </div>
    </div>
  );
}

export default LandingPage;
