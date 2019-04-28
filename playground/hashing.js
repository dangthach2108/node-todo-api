const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')

var data = {
  id: 10
}

var token = jwt.sign(data, '123123123')
console.log(token)

var decoded = jwt.verify(token, '123123123')
console.log('decoded', decoded)