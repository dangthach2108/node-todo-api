const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

Todo.findOneAndRemove({_id: '5cb9c34a98776127d196b3dc'}).then((todo) => {

})

Todo.findByIdAndRemove('5cb9c34a98776127d196b3dc').then((todo) => {
  console.log(todo)
})