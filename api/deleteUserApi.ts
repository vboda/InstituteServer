import { Request, Response, request } from 'express';
import { deleteUserService } from '../services/deleteUserService';

class DeleteUserApi {
    public deleteUser = async (req: Request, res: Response) => {
        // console.log(req.body);
        try {
            const response:any = await deleteUserService.delete(req.body);
            // console.log(response);
            res.status(response.statusCode || 200).send(response);
        } catch (error) {
            // console.log(error);
            res.status(error.statusCode || 500).send(error.error || error.stack);
        }
    }
}

export const deleteUserApi: any = new DeleteUserApi();
