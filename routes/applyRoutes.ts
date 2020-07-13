import {Router} from 'express';
import {  authenticateApi } from '../api/authenticateApi';


export const applyRoutes = (router: Router) => {
    // router.post('/authenticate', authenticateApi.invoke);
    return router;
};