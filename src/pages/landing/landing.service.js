import { createGetRequest } from '../../shared/services/rest-api.adapter';

export const LandingService = {
 useCase: {
   getMovieList
 }
}

function getMovieList(searchInput, page) {
  const searchPath = (searchInput) ? `&s=${searchInput}` : '';
  const pagePath = (page) ? `&page=${page}` : '&page=1';
  return createGetRequest(searchPath + pagePath);
}