const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./routes/userRouter');

// heroku uses process.env.PORT
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// config for mongodb db
const db = require('./config/keys').mongoURI;

// setup mongoose connection 
mongoose.
  connect(
    db, 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("MongoDB Atlas connected successfully!"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/api/user', User);

// root route
app.get('/', (req, res) => {
  res.send('Root endpoint!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})

app.use(require('./routes/testRouter'));
