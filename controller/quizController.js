const Quiz = require('../model/quiz');
const Question = require('../model/question');

exports.getAllQuizzes = async (req, res) => {
    const quizzes = await Quiz.find().populate('questions');
    res.json(quizzes);
};

exports.createQuiz = async (req, res) => {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
};

exports.getQuizById = async (req, res) => {
    const quiz = await Quiz.findById(req.params.quizId).populate('questions');
    res.json(quiz);
};

exports.updateQuiz = async (req, res) => {
    const quiz = await Quiz.findByIdAndUpdate(req.params.quizId, req.body, { new: true });
    res.json(quiz);
};

exports.deleteQuiz = async (req, res) => {
    await Quiz.findByIdAndDelete(req.params.quizId);
    res.status(204).end();
};

exports.getQuizWithKeyword = async (req, res) => {
    const keyword = "capital";
    const quiz = await Quiz.findById(req.params.quizId).populate({
        path: 'questions',
        match: { keywords: keyword }
    });
    res.json(quiz);
};
