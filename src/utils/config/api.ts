import axios from 'axios';

/**
 * Gets the API data from the server.
 * @param {string} url - the url to get the data from.
 */

export const getApi = (url: any) => axios.get(url);