import {createPool} from 'mysql';

const util = require('util');
const databaseConfig = require('../config/config');
const pool = createPool(databaseConfig.DB_INFORMATION);
pool.query = util.promisify(pool.query);
let retryAttempt: number = 0;


export const executeQuery = async (sqlQuery: string, data?: any): Promise<any> => {
    try {
        if(data){
            return pool.query(sqlQuery, data);
        }
        return pool.query(sqlQuery);
    } catch (error) {
        retryAttempt = retryAttempt + 1;
        if (!!error && error.code === 'ETIMEDOUT' && retryAttempt < 4) {
            return await executeQuery(sqlQuery);
        }
        throw error;
    }
};
