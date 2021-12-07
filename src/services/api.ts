import axios from 'axios'
import { API_URL } from 'react-native-dotenv'

const Api = axios.create({
  baseURL: API_URL,
})

export default Api
