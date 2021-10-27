import axios from 'axios'
import { DOMAIN } from '../utils/constants/settingSystem'

export default class baseService{
    get=(url)=>{
        // console.log(`${DOMAIN}${url}`)
        return axios.get(`${DOMAIN}${url}`)
    }
}