const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const questionController = require('../controller/questionController');

router.get('/', questionController.getAllQuestions);
router.post('/', auth, questionController.createQuestion);
router.get('/:questionId', questionController.getQuestionById);
router.put('/:questionId', auth, questionController.updateQuestion);
router.delete('/:questionId', auth, questionController.deleteQuestion);

module.exports = router;
