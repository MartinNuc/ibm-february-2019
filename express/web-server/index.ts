import express, { response, Request, Response, NextFunction } from 'express';

const app = express();

interface Visit {
  timestamp: Date;
  ip: string | undefined;
}

let log: Visit[] = [];

function accessLogger(req: Request, res: Response, next: NextFunction) {
  let visit: Visit = {
    timestamp: new Date(),
    ip: req.connection.remoteAddress
  };
  log.push(visit);
  next();
}

app.use(accessLogger);

app.get('/logs', (req, res) => {
  res.send(log);
});

// serving image from harddrive using static middleware
// http://localhost:3000/static/tails.jpeg
// http://localhost:3000/static/heads.jpeg
app.use('/static', express.static('public'));

// exercise for query / url parameters
app.get('/users/:userId/cars/:carId', (req, res) => {
  let userId = req.params.userId;
  let carId = req.params.carId;
  let color = req.query.color;
  res.send(`userId: ${userId}, carId: ${carId}, color: ${color}`);
});

// main page
app.get('/', (req, res) => {
  res.send('hello');
});

app.listen(3000, '0.0.0.0', () => console.log('listening...'));


