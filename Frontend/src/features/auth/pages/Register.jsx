import { Link } from "react-router-dom";
import "../style/form.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();

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
          <button>Submit</button>
        </form>
        <p>Already have an account ? <Link className="toggleAuthForm" to="/login">Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
