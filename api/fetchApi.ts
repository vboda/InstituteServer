import { Request, Response, request } from 'express';
import {fetchService} from '../services/fetchService';

class FetchApi {
    public fetchCourses = async (req: Request, res: Response) => {
        // console.log(req.body);
        try {
            const response:any = await fetchService.courses();
            res.status(response.statusCode || 200).send(response);
        } catch (error) {
            res.status(error.statusCode || 500).send(error.error || error.stack);
        }
    }

    public fetchRoles = async (req: Request, res: Response) => {
        try{
            const response: any = await fetchService.roles();
            res.status(response.statusCode || 200).send(response);
        } catch(error) {
            res.status(error.statusCode || 500).send(error.error || error.stack);
        }
    }
}

export const fetchApi: any = new FetchApi();
