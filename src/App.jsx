import './App.css'
import { useState } from 'react'
import buttonStyles from '../Styles/Button.module.css';
import inputStyles from '../Styles/Input.module.css';
import containerStyles from '../Styles/Container.module.css';
function App() 
{
  const[name, setName] = useState("");
  const[nameErrorMessage, setNameErrorMessage] = useState(null);
  const[email, setEmail] = useState("");
  const[emailErrorMessage, setEmailErrorMessage] = useState(null);

const validateName = (name) =>{
  if(name.trim() === ""){ 
    return 'Name is required!';
  }
  console.log(name)
  return 'Name added';
}

const validateEmail = (email) =>{
  {
    const emailPattern = /^[\w-.\]+@[\w-.\]+\.[\w-]{2,4}$/i;
    if(!emailPattern.test(email)){
      console.log(email);
      return 'Invalid format';
    }
    console.log(`${email} email2`)
  }
 return'Email added';
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
      <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
              <div className={styles.cformTop}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    placeholder="Enter your name" 
                    name="name" 
                    value={name} 
                    onChange={handleNameChange} 
                  required/>
                  {setNameErrorMessage &&<span>{setNameErrorMessage}</span>}
                </div>
                <div >
                  <label htmlFor="email">Email:</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    placeholder="Enter Your email" 
                    value={email} 
                    onChange={handleEmailChange} 
                    minLength={10} 
                    required/>
                    {setEmailErrorMessage &&<span>{setEmailErrorMessage}</span>}
                  </div>
              </div>
              <div className={cfromBottom}>
                  <button type='submit' className={styles.button}>Submit</button>
                  <button className={styles.button}>Btn 2</button>
                  <button className={styles.button}>Btn 3</button>
                  <button className={styles.button}>Btn 4</button>
                  <button className={styles.button}>Btn 5</button>
              </div>
            </form>
        </div>
    </>
  )
}
export default App
