"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
let log = [];
function accessLogger(req, res, next) {
    let visit = {
        timestamp: new Date(),
        ip: req.connection.remoteAddress
    };
    log.push(visit);
    console.log('a new request');
    next();
}
app.use(accessLogger);
app.get('/logs', (req, res) => {
    res.json(log);
});
// serving image from harddrive using static middleware
// http://localhost:3000/static/tails.jpeg
// http://localhost:3000/static/heads.jpeg
app.use('/static', express_1.default.static('public'));
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
