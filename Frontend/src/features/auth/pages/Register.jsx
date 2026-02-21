import { Link } from "react-router-dom";
import "../style/form.scss";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {handleRegister, loading, user} = useAuth();

  async function handleSubmit(e){
    e.preventDefault();

    await handleRegister(username, email, password);

    navigate("/");

  }

  if(loading){
    return <main>
      <h2>Loading....</h2>
    </main>
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form 
        onSubmit={(e)=>{handleSubmit(e)}}>
          <input 
          onChange={(e)=>{setEmail(e.target.value);}} 
          type="email" 
          name="email" 
          placeholder="Enter your Email" />
          <input 
          onChange={(e)=>{setUsername(e.target.value);}} 
          type="text" 
          name="username" 
          placeholder="Enter your username" />
          <input 
          onChange={(e)=>{setPassword(e.target.value);}} 
          type="password" 
          name="password" 
          placeholder="Enter your password" />
          <button className="button primary-btn">Submit</button>
        </form>
        <p>Already have an account ? <Link className="toggleAuthForm" to="/login">Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
