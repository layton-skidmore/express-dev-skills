var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var skillsCtrl = require('../controllers/todos');

// All actual paths begin with "/todos"

// GET /todos
router.get('/', skillsCtrl.index);

module.exports = router;
