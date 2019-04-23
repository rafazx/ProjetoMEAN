const BillingCycle = require('./billingCycle')


//Array de metodos , utilizando o serviço de restful.   
BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

module.exports = BillingCycle
