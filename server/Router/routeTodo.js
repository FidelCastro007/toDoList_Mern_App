const express = require('express')
const router = express.Router()
const todoController = require('../controller/todoController')

router.route('/')
    .get(todoController.getALLTodos)
    .post(todoController.createTodo)
router.route('/:id')
    .get(todoController.getTodo)
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo)

module.exports = router