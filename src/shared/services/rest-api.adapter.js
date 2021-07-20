import { enviroment } from '../../enviroment';

const axios = require('axios').default;
const apiKey = 'faf7e5bb';

export function createGetRequest(path) {
  const apiLink = `${enviroment.apiUrl}/?apikey=${apiKey}${path}`;
  return axios.get(apiLink);
}

