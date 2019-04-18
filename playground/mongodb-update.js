const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server')
  }

  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5cb896424ef1896ca5209a72')
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5cb84e98679d05761702bb51')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  })

  // client.close();
})