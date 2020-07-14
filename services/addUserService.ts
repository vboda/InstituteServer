import { executeQuery } from '../database/dbClient';
import {QUERIES} from '../constants/constant';

class AddUserService{
    insert = async (reqBody:any) => {
        try{
            const query = this.generateInsertQuery(reqBody);
            const userInfo = await executeQuery(query);
            return userInfo;
        }catch(error){
            throw error;
        }
    }

    private generateInsertQuery(reqBody){
        let query = QUERIES.INSERT_USER;
        let index = 0;
        Object.keys(reqBody).forEach(key => {
            index++;
            if(key === 'user_id'){
                query += ` ${key} = ${reqBody[key]}, `
            }else if(index === Object.keys(reqBody).length){
                query += ` ${key} = '${reqBody[key]}'`
            }else {
                query += ` ${key} = '${reqBody[key]}', `
            }
        
        })
       return query;
    }
}

export const addUserService = new AddUserService();