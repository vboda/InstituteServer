import { Request, Response, request } from 'express';
import {authenticateService} from '../services/authenticatorService';

class AuthenticateApi {
    public invoke = async (req: Request, res: Response) => {
        // console.log(req.body);
        try {
            const response:any = await authenticateService.validateCredentials(req.body);
            res.status(response.statusCode).send(response);
        } catch (error) {
            res.status(error.statusCode || 500).send(error.error || error.stack);
        }
    }







}

export const authenticateApi: any = new AuthenticateApi();
