import React ,{useState,useEffect} from 'react'
import { Link ,useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import QuizBee from "./QuizBee";
import axios from 'axios'

const createOrUpdateUser=async(name)=>{
    return await axios.post(
        `${process.env.REACT_APP_API}/`,{name}
        )
}

const CreateUser=()=> {

    const [name,setName]=useState('')

    let history = useHistory();

    const dispatch=useDispatch()

    // useEffect(() => {
        
    //     NewUser ()
    //  }, [])
	// const NewUser= async(name)=>{
    //     console.log(name);
    //     // if(name){
    //     //     console.log(name);
    //     //     dispatch({
    //     //         type:'CTRATE_USER',
    //     //         payload:{
    //     //            user: name
    //     //         }
    //     //     })
    //     // }
    // }
    
 


    const handleSubmit= async(event)=>{
        event.preventDefault();
        // console.log('Success:', value);
        alert('A name was submitted: ' + name);
    try {
        //create this user in database
        createOrUpdateUser(name)
        .then(res=>{
            ///push in redux 
            console.log(res);
        })
        

        history.push('/startexam')
    } catch (error) {
        console.log(error);
    }
    
        
    }
    
    const handleChange=(event)=>{
        setName(
        event.target.value
    )
    console.log(name);
    }

    return (
     
         <div className='container '>
             {
                 <form className="position-absolute top-50 start-50 translate-middle"
                 onSubmit={handleSubmit}
                  >
                 <div className="mb-3">
                 <label for="exampleInputName" className="form-label">Your name please</label>
                 <input type="text" 
                 className="form-control" 
                 id="exampleInputName" 
                 placeholder="your name"
                 value={name}
                 onChange={handleChange}
                 />
                 
                 </div>
         
             
             <button type="submit" className="btn btn-primary" 
             // onClick={}
             >Submit</button>
             </form>
             }
    
</div>
      

    )
}

export default CreateUser
