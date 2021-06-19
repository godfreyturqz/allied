const router = require('express').Router()
// controllers
const ProjectIndexController = require('../controllers/ProjectIndexController')

// routes
router.route('/req-index')
    .get(ProjectIndexController.getAll)
    .post(ProjectIndexController.create)

router.route('/req-index/:id')
    .get(ProjectIndexController.getDetails)
    .put(ProjectIndexController.update)
    .delete(ProjectIndexController.delete)


module.exports = router
