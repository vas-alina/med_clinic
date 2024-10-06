const Router = require('express')
const router = new Router()
const AppController = require('../controllers/appController')


router.get('/leads', AppController.getLeads);
router.get('/login', AppController.login)
router.post('/login', AppController.login)


module.exports = router