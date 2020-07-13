import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as uniqid from 'uniqid';
import * as cors from 'cors';
import {applyRoutes} from './routes/applyRoutes';
import { query} from './institute';
import { authenticateApi } from './api/authenticateApi';
import { updateUserApi} from './api/updateUserApi';
const app: express.Application = express();
// const router: express.Router = express.Router();

// const options:cors.CorsOptions = {
//   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
//   credentials: true,
//   methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
//   origin: 'http://localhost:4200',
//   preflightContinue: false
// };

app.use(cors());

// app.options('*', cors(options));
// // mount json form parser
// console.log('In to the applicstion');
app.use(bodyParser.json());

// // mount query string parser
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());

// Adding trans_id
// app.all('*',  (request: express.Request, response: express.Response, next: express.NextFunction) => {
//     request.body.trans_id = !!request.body.trans_id ? request.body.trans_id : uniqid();
//     next();
// });

// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.append('Access-Control-Allow-Origin' , '*');
//     res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//     res.append('Access-Control-Allow-Credentials', 'true' );
//     next();
//   });

// app.use('/', applyRoutes(router));
app.get('/users',async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  const res =  await query();
  // console.log(res);
  response.status(200).send(res);
} )

app.post('/authenticate', authenticateApi.invoke);
app.post('/updateUser', updateUserApi.invoke);
const port = 5463
app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))



export {app};