// const handleRegister = (req, res, db, bcrypt) => {
//     const { email, firstname, lastname, city, state, country, pincode, mobile, password } = req.body;
//     if (!email || !firstname || !password) {
//       return res.status(400).json('incorrect form submission');
//     }
//     const hash = bcrypt.hashSync(password);
//       db.transaction(trx => {
//         trx.insert({
//           hash: hash,
//           email: email
//         })
//         .into('buyerlogin')
//         .returning('email')
//         .then(loginEmail => {
//           return trx('buyer')
//             .returning('*')
//             .insert({
//               email: loginEmail[0].email,
//               firstname: firstname,
//               lastname: lastname,
//               city: city,
//               state: state,
//               country: country,
//               pincode:pincode,
//               mobile: mobile,
//             })
//             .then(user => {
//               res.json(user[0]);
//             })
//         })
//         .then(trx.commit)
//         .catch(trx.rollback)
//       })
//       .catch(err => res.status(400).json('unable to register'))
//   }
  
//   module.exports = {
//     handleRegister: handleRegister
//   };

  
const handleRegister = (req, res, db, bcrypt) => {
  const { email, firstname, lastname, password, city, state, country, pincode, mobile } = req.body;
  if (!email || !firstname || !password || !city || !state || !country || !pincode || !mobile) {
    return res.status(400).json('incorrect form submission');
  }
  const hash = bcrypt.hashSync(password);

  db.transaction(trx => {
    trx.insert({
      hash: hash,
      email: email
    })
      .into('buyerlogin')
      .returning('email')
      .then(loginEmail => {
        console.log('loginEmail : ', loginEmail[0].email);
        console.log('firstname : ', firstname);
        console.log('lastname : ', lastname);
        console.log('city : ', city);
        console.log('state : ', state);
        console.log('country : ', country);
        console.log('pincode : ', pincode);
        console.log('mobile : ', mobile);
        console.log('password : ', password);
        console.log('completed');

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
            mobile : mobile,
          })
          .then(user => {
            res.json(user[0]);
          })
      })
      .then(trx.commit)
      .catch(trx.rollback)
  })
    .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
  handleRegister: handleRegister
};
