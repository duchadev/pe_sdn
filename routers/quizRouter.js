const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const quizController = require('../controller/quizController');

router.get('/', quizController.getAllQuizzes);
router.post('/', auth, quizController.createQuiz);
router.get('/:quizId', quizController.getQuizById);
router.put('/:quizId', auth, quizController.updateQuiz);
router.delete('/:quizId', auth, quizController.deleteQuiz);
router.get('/:quizId/populate', quizController.getQuizWithKeyword);

module.exports = router;
