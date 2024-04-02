import { getApi } from "../config/api"
import { API_SERVER_URL } from "../constant"

/**
 * List of articles api
 * @returns get the all articles
 */
const getArticlesList = () => getApi(`${API_SERVER_URL}/assignment/articles`)

/**
 * Single article details
 * @param id id of particular article
 * @returns get article details based on id
 */
const getArticlesDetails = (id: number) => getApi(`${API_SERVER_URL}/assignment/articles/${id}`)

export {getArticlesList , getArticlesDetails}