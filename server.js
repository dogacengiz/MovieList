const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const app = express();

//bodyparser Middleware

app.use(express.json());

//DB config
const db = config.get('mongoURI');

//Connect to Mongodb
 mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//use routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

if(process.env.NODE_ENV === 'production'){

  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });

}


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));