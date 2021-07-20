import './header.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../../redux/features/movieListParamsSetter';
import { useState } from 'react';

export function Header() {

  let searchInputParam = useSelector((state) => state.movieListParams.searchInput);
  const [searchInput, setSearchInput] = useState(searchInputParam);
  const dispatch = useDispatch();

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      dispatch(setSearch(e.target.value));
    }
  }

  return <div className="header-wrapper">
    <h1>Movie...</h1>

    <div className='search-container'>
      <label>Search</label>
      <input type="text" 
        value={ searchInput } 
        onChange={ (e) => setSearchInput(e.target.value) } 
        onKeyDown={ (e) => onKeyDown(e) } 
      />
    </div>
  </div>
}