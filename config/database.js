const mongoose = require('mongoose')
const db = 'mongodb://localhost/db_finance'
const url = { useNewUrlParser: true }
module.exports = mongoose.connect(db, url)

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é Menor que o limite mínimo de '{MIN}' ."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é Maior que o limite máximo de '{MAX}' "
mongoose.Error.messages.String.enum = " '{VALUE}' não é valido para o atributo '{PATH}' "