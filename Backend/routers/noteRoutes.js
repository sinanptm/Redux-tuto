import express from 'express'
import { getNotes, editNote, deleteNote, addNote } from '../controllers/noteController.js'

const router = express.Router();

router.route('/notes').get(getNotes).post(addNote);
router.route('/notes/:id').put(editNote).delete(deleteNote);

export default router