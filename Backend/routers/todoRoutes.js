import express from 'express';
import { getTodos, addTodo, editTodo, deleteTodo } from '../controllers/todoController.js';

const router = express.Router();

router.route('/todos').get(getTodos).post(addTodo);
router.route('/todos/:id').put(editTodo).delete(deleteTodo);

export default router;
