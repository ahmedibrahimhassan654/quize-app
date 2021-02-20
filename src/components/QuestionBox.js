import React ,{useState} from 'react'

 const QuestionBox = ({question,options,nextquestion,questionId}) => {
   const [answer,setAnswer]=useState(options)
    return (
  
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            {question}
          </div>
      
        {answer.map((text,index)=>(
            <button key={index} className="answerBtn" onClick={()=>{
                setAnswer([text])
            }}>
                        {text}
            </button>
        ))}
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
     
    )
}
export default QuestionBox