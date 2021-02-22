
const Quiz=require('./../models/quiz')


exports.getAllQuestions=(req,res)=>{
    res.json({
        data:'all qestion'
    })
}

exports.creatNewQuestion=async(req,res)=>{
    const quiz = await Quiz.create(req.body);

    res.status(201).json({
      success: true,
      data: quiz
    });
}