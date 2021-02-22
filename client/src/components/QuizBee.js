import React,{Component} from "react"
import axios from 'axios'
import "./../assets/style.css"
 import quizService from './../quizService'
import QuestionBox from './QuestionBox'
import Result from './Result'

const getAllQuestions=async()=>{
    return await axios.get(
        `${process.env.REACT_APP_API}/allq`,
        )
}


class QuizBee extends Component{

  

    state={
        questionBank:[],
        singleQuestion:{},
        score:0,
        response:0


    }

   
    getQuestions=()=>{
     

//with API END Point 
        // getAllQuestions().then(
        // //    console.log(questionions)
        //    ( questionions)=>{
        //     console.log('all questions',questionions.data.data);
        //     this.setState({
        //         questionBank:questionions.data.data
        //     })
         
        //     })
//with static data 
        quizService().then(
            //    console.log(questionions)
               ( questionions)=>{
                console.log('all questions',questionions);
                this.setState({
                    questionBank:questionions
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

    playAgain=()=>{
       
        
        this.props.history.push("/");
        
        this.getQuestions()
        this.setState({
            score:0,
            response:0
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
                    {this.state.response===5?
                    // <h2>{this.state.score}</h2>
                        (<Result 
                            score={this.state.score}
                            playAgain={this.playAgain}
                            />)
                    :null}


            </div>
        )
    }
}
export default QuizBee