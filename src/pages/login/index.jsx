import { useState } from 'react'
import Woman from '../../assets/sally.png'
import { Link } from 'react-router-dom'
import './style.css'
import { useSignInWithEmailAndPassword } from'react-firebase-hooks/auth';
import { auth } from '../../services/firebaseConfig';

// google aut
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const provider = new GoogleAuthProvider();

function Login() {
  // const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword (auth) ;

  function handleSignIn(e){
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }

  if(loading){
    return <p>loading..</p>
  }
  if(user){
    return console.log(user)
  }

  return (
    <div className="container">
      <div className="login-box">
        <header className="logo">Your Logo</header>
        <form>
          < div className="login-txt">
            <h1>Sign In</h1>
            <h2>If you don't have an account register</h2>
            <span>You can<Link to='/register'>Register here !</Link></span>
          </div>
          <div className="inputCont">
            <label htmlFor="email">Email</label>
            <i class='bx bx-envelope'></i><input type="text" name='email' id='email' placeholder='Enter your emaul address' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="inputCont">
            <label htmlFor="password">Senha</label>
            <i class='bx bx-lock' ></i><input type={isHovered ? "text" : "password"} name='password' id='password' placeholder='Enter your Password' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onChange={e => setPassword(e.target.value)}/>
          </div>

          <span className='terms'>By creating an account, you agree to our Terms of Service.</span>
          <button className='button' onClick={handleSignIn}>Login</button>

          <div className="icons-login">
            <span>or continue with</span>
            <div className="btn">
              <button><i class='bx bxl-google'></i></button>
              <button><i class='bx bxl-facebook-circle' ></i></button>
              <button><i class='bx bxl-apple' ></i></button>
            </div>
          </div>
        </form>
      </div>

      <div className="design">
        <a href="/home">Continuar como convidado</a>  
        <img src={Woman} alt="Design"/>
        <h1>Sign in to name</h1>     
        <h2>Lorem Ipsum in simply</h2>   
      </div>
    </div>
  )
}

export default Login
