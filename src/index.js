// console.log('Hello from Webpack');

// запускаємо node src/index.js

const express = require('express'); // імпорт в js прописують, як require
const app = express();
const port = 3000;      //- вказуємо на,  який порт все буде повішано пізніше

app.get('/', (req, res) => {   // - слухаємо запит на '/'
  res.send('<h1>Hello Andrey</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) 
})

