const mongoose = require('mongoose')
// const { mongoPath } = require('./config.json')

const mongoPath = 'mongodb+srv://CADHost:dFc6SzhaUzYSSvZH@cadhost-utils.kxo00.mongodb.net/cadhost?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(mongoPath, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}