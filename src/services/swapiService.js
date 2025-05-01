import axios from 'axios'

const API_BASE_URL = 'https://swapi.py4e.com/api/'

export const getPlanetsPage = (page = 1) => {
  return axios.get(`${API_BASE_URL}planets/?page=${page}`)
}