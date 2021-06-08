const router = require('express').Router()
// controllers
const reqIndexController = require('../controllers/reqIndexController')

// routes
router.route('/req-index')
    .get(reqIndexController.getAll)
    .post(reqIndexController.create)

router.route('/req-index/:id')
    .get(reqIndexController.getDetails)
    .put(reqIndexController.update)
    .delete(reqIndexController.delete)


module.exports = router
