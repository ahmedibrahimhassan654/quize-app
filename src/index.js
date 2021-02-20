import React,{Component} from "react"
import ReactDom from "react-dom"
import "./assets/style.css"
import quizService from './quizService'
import QuestionBox from './components/QuestionBox'
class QuizBee extends Component{
    state={
        questionBank:[],
        singleQuestion:{}

    }
    getQuestions=()=>{
        quizService().then(questionions=>{
            console.log('all questions',questionions);
            this.setState({
                questionBank:questionions
            })
            questionions.map(question=>{
                this.setState({
                    singleQuestion:question
                })
                console.log('single question',question);
            })
          
           
        })
    }
    componentDidMount(){
        this.getQuestions()
    }
    render(){
        return(
            <div className="container">
                <div className="title">
                    Quize App
                    
                </div>
                {this.state.questionBank.length>0&&
                    this.state.questionBank.map(({question,answers,correct,questionId,singleQuestion})=>
                    
                    (
                 <QuestionBox question={question} options={answers} key={questionId}/>
                    )
                    )}

            </div>
        )
    }
}

ReactDom.render(<QuizBee/>,document.getElementById('root'))