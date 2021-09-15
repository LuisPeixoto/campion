import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://10.0.10.213:3333',
})

export default Api
