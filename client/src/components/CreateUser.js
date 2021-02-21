import React ,{useState} from 'react'
import { Link ,useHistory} from 'react-router-dom';
import QuizBee from "./QuizBee";
const CreateUser=()=> {

    const [user,setuser]=useState('')

    let history = useHistory();

	
    
 


    const handleSubmit= async(event)=>{
        event.preventDefault();
        // console.log('Success:', value);
        alert('A name was submitted: ' + user);
    try {
        //create this user in database


        history.push('/startexam')
    } catch (error) {
        console.log(error);
    }
       
        
    }
    
    const handleChange=(event)=>{
    setuser(
        event.target.value
    )
    console.log(user);
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
                 value={user}
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
