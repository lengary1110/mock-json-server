import jsonServer from 'json-server';
import mockdata from './mockdata/index';

const server = jsonServer.create();
const router = jsonServer.router(mockdata);
const middlewares = jsonServer.defaults();
server.use(middlewares);

//@ts-ignore
router.render = (req, res) => {
  const url = req.originalUrl;
  if (url === "/api/v1/signup" && req.method === "GET") {
    res.sendStatus(200);
    // res.sendStatus(500);
    // res.sendStatus(409);
  }
  if (url === "/api/v1/signup" && req.method === "POST") {
    res.sendStatus(200);
  }
  if (url === "/api/v1/login" && req.method === "POST") {
    res.sendStatus(200);
    //TODO: add response mockdata.name
    // res.sendStatus(500);
    // res.sendStatus(404);
  }
  if (url === "/api/v1/login" && req.method === "GET") {
    res.sendStatus(200);
  }
}

//TODO: add next() mock router
server.post('/api/v1/company', (req, res) => {
  res.sendStatus(200);
})

server.get('/api/v1/company', (req, res) => {
  res.sendStatus(200);
  // firstlogin route
  // res.sendStatus(404);
})
server.get('/api/v1/resend', (req, res) => {
  res.sendStatus(200);
})

server.use(router);

const port = 8089;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});