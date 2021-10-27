import baseService from "./baseService";
import { SUMMARY } from '../utils/constants/settingSystem.js';

class summaryService extends baseService{
    getSummary(){
        return this.get(SUMMARY)
    }
}

export const SummaryService = new summaryService()