import baseService from "./baseService";
import { CONTRY_DETAIL } from '../utils/constants/settingSystem.js';

class countryInfoService extends baseService{
    getCountryInfo(id){
        return this.get(`${CONTRY_DETAIL}${id}`)
    }
}

export const CountryInfoService = new countryInfoService()