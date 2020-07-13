// import {app} from './app';
// import * as https from 'https';
// import {Server} from 'https';
import {executeQuery} from './database/dbClient';


//     const port = 5463;
//     const startServer = () => {
//         const server = https.createServer(app);
//         server.listen(port);
//         server.on('error', this.onError(port));
//         server.on('listening', onListening(server));
//     };
    

//     export const onError = () => {
//         return (error: NodeJS.ErrnoException): void => {
//             if (error.syscall !== 'listen') throw error;
//             const bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
//             switch (error.code) {
//                 case 'EACCES':
//                     console.error(`${bind} requires elevated privileges`)
//                     process.exit(1);
//                     break;
//                 case 'EADDRINUSE':
//                     console.error(`${bind} is already in use`);
//                     process.exit(1);
//                     break;
//                 default:
//                     throw error;
//             }
//         }
//     };

//     export const onListening = (server: Server): () => void => {
//         return () => {
//             const addr = server.address();
//             const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
//             /*tslint:disable*/
//             console.log(`Server Listening on ${bind}`);
//         };
//     };

//     startServer();
  export const query = async () =>{
    try{
       const res =  await executeQuery(`select * from institute.User`);
    //    console.log(res[0]);
    return res;
    } catch(error){
        throw error;
    }
   }
//     query();
