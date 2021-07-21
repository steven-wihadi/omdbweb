import { createGetRequest } from "../../shared/services/rest-api.adapter";

export const MovieDetailService = {
  useCase: {
    getMovieDetail
  }
};

function getMovieDetail(movieId) {
  const path = `&i=${movieId}`;
  return createGetRequest(path);
}