const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth.middleware');
const { checkTaskInput} = require('../middlewares/validation.middleare')
const { createTasks, fetchAllTask,  fetchSingleTaskById, editTask } = require('../controllers/task.controller');

router.post('/',  createTasks); 
router.get( '/', fetchAllTask);
router.get('/user/:id', fetchSingleTaskById);
router.put('/:id', verifyToken, checkTaskInput, editTask);


module.exports = router; 
