const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var password = '123123abc'

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash)
//   })
// })

var hashedPassword = '$2a$10$BIr/f3rbCir0stU8o0GjROqogfbf31taMVlqKYSTrsEBwgkXrrdA2'

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res)
})

// var data = {
//   id: 10
// }
//
// var token = jwt.sign(data, '123123123')
// console.log(token)
//
// var decoded = jwt.verify(token, '123123123')
// console.log('decoded', decoded)