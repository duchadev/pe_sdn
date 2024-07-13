const Question = require('../model/question');

exports.getAllQuestions = async (req, res) => {
    const questions = await Question.find();
    res.json(questions);
};

exports.createQuestion = async (req, res) => {
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
};

exports.getQuestionById = async (req, res) => {
    const question = await Question.findById(req.params.questionId);
    res.json(question);
};

exports.updateQuestion = async (req, res) => {
    const question = await Question.findByIdAndUpdate(req.params.questionId, req.body, { new: true });
    res.json(question);
};

exports.deleteQuestion = async (req, res) => {
    await Question.findByIdAndDelete(req.params.questionId);
    res.status(204).end();
};
