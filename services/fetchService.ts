import { executeQuery } from '../database/dbClient';
import {QUERIES} from '../constants/constant';

class FetchService{
    courses = async () => {
        try{
            const courses = await executeQuery(QUERIES.FETCH_COURSES);
            return courses;
        }catch(error){
            throw error;
        }
    }

    roles = async () => {
        try{
            const roles = await executeQuery(QUERIES.FETCh_ROLES);
            return roles;
        }catch(error){
            throw error;
        }
    }


}

export const fetchService = new FetchService();