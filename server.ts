import jsonServer from 'json-server';
import mockdata from './mockdata/index';

const server = jsonServer.create();
const router = jsonServer.router(mockdata);
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);

//@ts-ignore
const port = 8080;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});