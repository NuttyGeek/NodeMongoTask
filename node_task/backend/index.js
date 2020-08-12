const express = require('express');
const app = express();
const port = 3000;
const cors =  require('cors');
const connectDB = require('./connection');
const Car = require('./Car');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
// connect to DB
connectDB();

app.get('/cars', async (req, res) => {
  const data = [{
    name:'Car1',
    mileage: '123',
    quarter: 'Q1',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car2',
    mileage: '123',
    quarter: 'Q2',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car3',
    mileage: '123',
    quarter: 'Q2',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car4',
    mileage: '123',
    quarter: 'Q3',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car5',
    mileage: '123',
    quarter: 'Q3',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car6',
    mileage: '123',
    quarter: 'Q3',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car7',
    mileage: '123',
    quarter: 'Q4',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car8',
    mileage: '123',
    quarter: 'Q4',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car9',
    mileage: '123',
    quarter: 'Q4',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car10',
    mileage: '123',
    quarter: 'Q4',
    hp: '123',
    image: 'https://picsum.photos/200'
  }, {
    name:'Car11',
    mileage: '123',
    quarter: 'Q4',
    hp: '123',
    image: 'https://picsum.photos/200'
  } ];
  const r = await Car.find();
  return res.json(r).status(200);
});

app.post('/add-car', async (req, res) => {
  try {
    const { name, image, mileage, hp, quarter } = req.body;
    let car = {};
    car.name = name;
    car.image = image;
    car.mileage = mileage;
    car.hp = hp;
    car.quarter = quarter;
    let carModel = new Car(car);
    await carModel.save();
    res.json(carModel).status(200);
  } catch(e) {
    return res.json({ message: 'Error'}).status(500);
  }
});

app.listen(port, () => {
  console.log(`Server Running on PORT: ${port}`);
});