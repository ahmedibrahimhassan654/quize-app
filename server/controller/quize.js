
const Quiz=require('./../models/quiz')


exports.getAllQuestions=async(req,res)=>{
    const allQuiz = await Quiz.find();

    res.status(201).json({
      success: true,
      data: allQuiz
    });
}

exports.creatNewQuestion=async(req,res)=>{
    let quiz = await Quiz.create(req.body);
    quiz.sort(() => 0.5 - Math.random()).slice(0, n)
  //  const sorted =(n = 5) =>
  //   Promise.resolve(quiz.sort(() => 0.5 - Math.random()).slice(0, n));
    res.status(201).json({
      success: true,
      data: quiz
    });
}