const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./buyer/register');
const signin = require('./buyer/signin');
const profile = require('./buyer/profile');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'himanshu',
    password : '',
    database : 'helper'
  }
});

// db.select('*').from('buyer').then(data => {
//   console.log(data);
// })

db.on('error', (error) => {
  console.error('Database connection error:', error);
});
db.raw('SELECT 1').then(() => {
  console.log('Database connected successfully');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});

const app = express();
app.use(cors())
app.use(express.json());

app.get('/buyer', (req, res)=> { res.send(db.buyer) })

app.post('/buyer/signin', (req, res) => {
  db.select('email', 'hash').from('buyerlogin')
    .where('email', '=', req.body.email)
    .then(data => {
      const isValid = bcrypt.compareSync(req.body.password, data[0].hash);
      if(isValid) {
        db.select('*').from('buyer')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/buyer/register', (req, res) => {
  const { email, firstname, password, lastname, city, state, country, pincode, mobile } = req.body;
  const hash = bcrypt.hashSync(password);
  db.transaction(trx => {
    trx.insert({
      hash: hash,
      email: email
    })
      .into('buyerlogin')
      .returning('email')
      .then(loginEmail => {
        return trx('buyer')
          .returning('*')
          .insert({
            email: loginEmail[0].email,
            firstname: firstname,
            lastname: lastname,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
            mobile: mobile
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
    .catch(err => res.status(400).json(err))
})

app.get('/buyer/profile/:id', (req, res) => {
  const { id } = req.params;
  db.select('*').from('buyer').where({ id })
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
})







app.get('/seller', (req, res) => { res.send(db.seller) })

app.post('/seller/signin', (req, res) => {
  db.select('email', 'hash1', 'hash2').from('sellerlogin')
    .where('email', '=', req.body.email)
    .then(data => {
      const isValid1 = bcrypt.compareSync(req.body.password, data[0].hash1);
      const isValid2 = bcrypt.compareSync(req.body.business, data[0].hash2);
      if (isValid1 && isValid2) {
        db.select('*').from('seller')
          .where('email', '=', req.body.email)
          .then(user => {
            res.json(user[0])
          })
          .catch(err => res.status(400).json('unable to get user'))
      }
    })
    .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/seller/register', (req, res) => {
  const { email, firstname, password, lastname, city, state, country, pincode, mobile, business } = req.body;
  const hash1 = bcrypt.hashSync(password);
  const hash2 = bcrypt.hashSync(business);
  db.transaction(trx => {
    trx.insert({
      email: email,
      hash1: hash1,
      hash2: hash2
    })
      .into('sellerlogin')
      .returning('email')
      .then(loginEmail => {
        return trx('seller')
          .returning('*')
          .insert({
            email: loginEmail[0].email,
            firstname: firstname,
            lastname: lastname,
            city: city,
            state: state,
            country: country,
            pincode: pincode,
            mobile: mobile
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
    .catch(err => res.status(400).json(err))
})

app.get('/seller/profile/:id', (req, res) => { 
  const { id } = req.params;
  db.select('*').from('seller').where({ id })
    .then(user => {
      if (user.length) {
        res.json(user[0])
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error getting user'))
})

const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`app is running on port ${PORT}`);
})

