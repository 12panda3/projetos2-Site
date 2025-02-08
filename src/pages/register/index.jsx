import { useState } from 'react'
import Sally from '../../assets/Sally.png'
import { Link } from 'react-router-dom'
import './style.css'
import { auth } from '../../services/firebaseConfig';
import { useCreateUserWithEmailAndPassword } from'react-firebase-hooks/auth';

function Register() {
  // const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword (auth) ;

  function handleSignOut(e){
    e.preventDefault();
    createUserWithEmailAndPassword(email, password)
  }

  if (loading){
    return <p>Loading..</p>
  }

  return (
    <div className="container">
      <div className="login-box">
        <header className="logo">Your Logo</header>
        <form>
          < div className="login-txt">
            <h1>Sign Up</h1>
            <h2>If you already have an account register</h2>
            <span>You can <Link to="/">Login here !</Link></span>
          </div>
          <div className="inputCont">
            <label htmlFor="email">Email</label>
            <i class='bx bx-envelope'></i><input type="text" name='email' id='email' placeholder='Enter your emaul address' onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="inputCont">
            <label htmlFor="password">Senha</label>
            <i class='bx bx-lock' ></i><input type={isHovered ? "text" : "password"} name='password' id='password' placeholder='Enter your Password' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="inputCont">
            <label htmlFor="password">Confirmar Senha</label>
            <i class='bx bx-lock' ></i><input type={isHovered ? "text" : "password"} name='password' id='password' placeholder='Confirm your Password' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}/>
          </div>

          <span className='terms'>By creating an account, you agree to our Terms of Service.</span>
          <button className='button' onClick={handleSignOut}>Login</button>
        </form>
      </div>

      <div className="design">
        <a href="#">Continuar como convidado</a>  
        <img src={Sally} alt="Design"/>
        <h1>Sign in to name</h1>     
        <h2>Lorem Ipsum in simply</h2>   
      </div>
    </div>
  )
}

export default Register
