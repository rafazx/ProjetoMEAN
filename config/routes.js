const express = require('express')

module.exports = function (server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da Api
    const billingCyclesService = require('../api/billingCycle/billingCycleService')
    billingCyclesService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billingSummary')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}