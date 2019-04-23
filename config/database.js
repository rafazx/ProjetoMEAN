const mongoose = require('mongoose')
const db = 'mongodb://localhost/db_finance'
const url = {useNewUrlParser:true}
module.exports = mongoose.connect(db,url)