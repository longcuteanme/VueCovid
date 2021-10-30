import axios from 'axios'
import { DOMAIN } from '../utils/constants/settingSystem'

export default class baseService{
    get=(url)=>{
        return axios.get(`${DOMAIN}${url}`)
    }
}