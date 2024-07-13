const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const quizRoutes = require('./routers/quizRouter');
const questionRoutes = require('./routers/questionRouter');
const userRouters = require('./routers/userRouter')
dotenv.config();

const app = express();

app.use(express.json());
app.use('/user', userRouters);
app.use('/quizzes', quizRoutes);
app.use('/questions', questionRoutes);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
