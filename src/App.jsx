import './App.css'
import { useState } from 'react'
// import setStatus from '../Components/SetStatus';
// import Success from '../Components/Success';
// import Form from '../Components/Form';
function App() 
{
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[nameErrorHandling, setNameErrorMessage] = useState(null);
  const[emailErrorHandling, setEmailErrorMessage] = useState(null);

const validateName = (name) =>{
  if(name.trim() === ""){ 
    return 'Name is required!';
  }
  return null;
}

const validateEmail = (email) =>{
  {
    const emailPattern = /^[\w-.\]+@([\w-]+\.)+\.[\w-]{2,4}$/;
    if(!emailPattern.test(email)){
      return 'Invalid format';
    }
  }
 return null;
}

function handleNameChange(e){
  setName(e.target.value);
  const error = validateName(e.target.value);
  setNameErrorMessage(error);
}

function handleEmailChange(e){
  setEmail(e.target.value);
  const error = validateEmail(e.target.value);
  setEmailErrorMessage(error);
  // alert(`You have submitted${email}`);
}


function handleSubmit(e){
  e.preventDefault();
  const nameError = handleNameChange(name);
  const emailError = handleEmailChange(email);
  setNameErrorMessage(nameError);
  setEmailErrorMessage(emailError);
  alert(`You have submitted:${name}`);
  }
   return (
     <>
      <div className="formContainer">
          <form onClick={handleSubmit}>
              <div className="cformTop">
                <div className='name'>
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name" 
                    value={name} 
                    onChange={handleNameChange} 
                  required/>
                </div>
                <div className='email'>
                  <label htmlFor="email">Email:</label>
                  <input 
                    type="text" 
                    placeholder="Enter Your email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    minLength={10} 
                    required/>
                  </div>
              </div>
              <div className="cfromBottom">
                  <button type="submit">Submit</button>
              </div>
            </form>
        </div>
    </>
  )
}
export default App
