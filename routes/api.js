const router = require('express').Router()
// controllers
const ProjectIndexController = require('../controllers/ProjectIndexController')

// routes
router.route('/projectIndex')
    .get(ProjectIndexController.getAll)
    .post(ProjectIndexController.create)

router.route('/projectIndex/:id')
    .get(ProjectIndexController.getDetails)
    .put(ProjectIndexController.update)
    .delete(ProjectIndexController.delete)


module.exports = router
