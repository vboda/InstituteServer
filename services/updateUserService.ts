import { executeQuery } from '../database/dbClient';
import {QUERIES} from '../constants/constant';

class UpdateUserService{
    update = async (reqBody:any) => {
        try{
            const updateQuery = QUERIES.UPDATE_USER + ` ${Object.keys(reqBody.update)[0]} = '${Object.values(reqBody.update)[0]}' where user_id = ${reqBody.user_id}`;
            const userInfo = await executeQuery(updateQuery);
            return {statusCode: 200};
        }catch(error){
            throw error;
        }
    }

    // private compareCredentials(dbInfo, req){
    //     if(dbInfo.password === req.password){
    //         return {
    //             statusCode: 200,
    //             body: dbInfo
    //         }
    //     }else {
    //         throw {
    //             statusCode: 400,
    //             error: 'InCorrect Password, Please Try Again'
    //         }
    //     }
    // }
}

export const updateUserService = new UpdateUserService();