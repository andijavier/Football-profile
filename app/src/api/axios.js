import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.football-data.org/v2/'
})
