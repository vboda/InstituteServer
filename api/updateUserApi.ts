import { Request, Response, request } from 'express';
import {updateUserService} from '../services/updateUserService';

class UpdateUserApi {
    public invoke = async (req: Request, res: Response) => {
        // console.log(req.body);
        try {
            const response:any = await updateUserService.update(req.body);
            // console.log(response);
            res.status(response.statusCode || 200).send(response);
        } catch (error) {
            // console.log(error);
            res.status(error.statusCode || 500).send(error.error || error.stack);
        }
    }
}

export const updateUserApi: any = new UpdateUserApi();
