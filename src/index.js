import React,{Component} from "react"
import ReactDom from "react-dom"
import "./assets/style.css"
import quizService from './quizService'
import QuestionBox from './components/QuestionBox'
class QuizBee extends Component{
    state={
        questionBank:[],
        singleQuestion:{},
        score:0,
        response:0


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
    computeAnswer=(answer,correctAnser)=>{
        if(answer===correctAnser){
            this.setState({
                score:this.state.score+1
            })
        }
        this.setState({
            response:this.state.response<5?this.state.response+1:5
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
                this.state.response<5&&
                    this.state.questionBank.map(({question,answers,correct,questionId})=>
                    
                    (
                 <QuestionBox 
                 question={question} 
                 options={answers} 
                 key={questionId}
                 selected={answer=>this.computeAnswer(answer,correct)}
                 />
                    )
                    )}
                    {this.state.response===5?<h2>{this.state.score}</h2>:null}

            </div>
        )
    }
}

ReactDom.render(<QuizBee/>,document.getElementById('root'))