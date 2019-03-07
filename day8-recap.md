# Day 8 recap

## What is ExpressJS?

- library for creating a web server












## How do you define to what URL express will respond to?

const app = express();

app.get('/about-page', (req, res) => {
  res.send('<h1>This is about page</h1>');
})
app.post('/about-page', (req, res) => {
  res.send('<h1>This is about page</h1>');
})
app.delete('/about-page', (req, res) => {
  res.send();
})








## What is a structure of URL?

http://www.ibm.com:3000/category/doors?sort=asc&category=brown#row-2

protocol http://
hostname www.ibm.com
port 80
path about-page/whatever
query parameters sort=asc&category=doors
anchor row-2








## What are query parameters? What are url (=path) parameters? How do you define them in Express?

?sort=asc&color=brown

{
  sort: 'asc',
  color: 'brown'
}

http://www.ibm.com:3000/category/tv?sort=asc&category=brown#row-2

path: category/

app.get('/category/:category', (req, res) => {
  console.log(req.params.category);
})











## What is middleware?

import fs from 'fs';  // const fs = require('fs');

function staticMiddleware(folder) {
  return (req, res, next) => {
    let filename = req.path.replace('/static','');
    fs.readFile(folder + '/' + filename, 'utf8', (err, data) => {
      if (err) {
        res.status(404).send();
        next();
      }
      else {
        res.send(data);
        next();
      }
    });
  }
}

app.use('/static', staticMiddleware('public'));
app.get('/static/*, (req. res) => {
  res.send(`<h1>404</h1>`);
});










## Which middleware do you know?

static middleware











## What is Angular?

- framework - forms, animations, http request, recommended project structure...
- SPA (single page application)












## Can you explain component tree?

- components contain other components -> forms a tree
+ reuse of components
+ split your app into smaller pieces











## How do you print out a variable from TS?

class Component {
  age = 55;
}

----------------

{{ age }}









## How do you do something on click?

{{ content }}
<div (click)="sayHello()">
  clickable div
</div>

--------------------

class Component {
  content = '';
  sayHello() {
    this.content = 'hello';
  }
}








## What is *ngIf?

<div *ngIf="counter > 10">
  Hello
</div>

class Component {
  counter = 0;
}








## What is a purpose of module in Angular?

- glues all components / services... together












## How do you create a component?

ng generate component myName
ng g c myName