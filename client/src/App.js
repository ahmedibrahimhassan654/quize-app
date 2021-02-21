import React ,{useState} from 'react'
import { Switch,Route } from "react-router-dom";
import CreateUser from './components/CreateUser';
import QuizBee from "./components/QuizBee";
const App=()=> {
    return (
        <Switch>
            <Route exact path='/'  component={CreateUser}/>

            <Route exact path='/startexam'  component={QuizBee}/>
      
        </Switch>
    )
}

export default App
