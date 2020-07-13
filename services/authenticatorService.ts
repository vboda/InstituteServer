import { executeQuery } from '../database/dbClient';
import {QUERIES} from '../constants/constant';

class AuthenticatorService{
    validateCredentials = async (reqBody:any) => {
        try{
            const userInfo = await executeQuery(QUERIES.FETCH_USER_ON_EMAIL, [ reqBody.email ])
            if(userInfo.length > 0){
                return this.compareCredentials(userInfo[0], reqBody);
            }else{
                throw {
                    statusCode: 404,
                    error: `No User Exist with email ${reqBody.email}`
                }
            }
        }catch(error){
            throw error;
        }
    }

    private compareCredentials(dbInfo, req){
        if(dbInfo.password === req.password){
            return {
                statusCode: 200,
                body: dbInfo
            }
        }else {
            throw {
                statusCode: 400,
                error: 'InCorrect Password, Please Try Again'
            }
        }
    }
}

export const authenticateService = new AuthenticatorService();