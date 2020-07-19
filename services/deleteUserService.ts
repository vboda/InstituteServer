import { QUERIES } from '../constants/constant';
import { executeQuery } from '../database/dbClient';


class DeleteUserService{
    delete = async (req) => {
        try{
            const query = QUERIES.DELETE_USER + req.user_id;
            const deleteUser = await executeQuery(query);
            return deleteUser;
        }catch(error){
            throw error;
        }
    }
}
export const deleteUserService = new DeleteUserService()