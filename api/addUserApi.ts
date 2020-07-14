import { Request, Response, request } from 'express';
import {addUserService} from '../services/addUserService';

class AddUserApi {
    public insertUser = async (req: Request, res: Response) => {
        // console.log(req.body);
        try {
            const response:any = await addUserService.insert(req.body);
            console.log(response);
            res.status(response.statusCode || 200).send(response);
        } catch (error) {
            console.log(error);
            res.status(error.statusCode || 500).send(error.error || error.stack);
        }
    }
}

export const addUserApi: any = new AddUserApi();
