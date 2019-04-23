const BillingCycle = require('./billingCycle')
const _ = require('lodash')

//Array de metodos , utilizando o serviço de restful.   
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.after('post', sendErrorOrNext).after('put', sendErrorOrNext)

function sendErrorOrNext(req, res, next) {
    const bundle = res.locals.bundle
    if (bundle.errors) {
        var errors = parseErros(bundle.errors)
        res.status(500).json({ errors })
    }
    else {
        next()
    }
}

function parseErros(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

//Metodo para paginação.
BillingCycle.route('count', (req, res, next) => {
    BillingCycle.countDocuments(function (error, value) {
        if (error) { res.status(500).json({ erros: [error] }) }
        else {
            res.json({ value })
        }
    })
})
module.exports = BillingCycle
