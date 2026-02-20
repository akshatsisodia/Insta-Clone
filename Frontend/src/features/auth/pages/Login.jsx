import { Link } from "react-router-dom";
import "../style/form.scss";
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={(e)=>{
          handleSubmit(e);
        }}>
          <input onChange={(e)=>{setUsername(e.target.value)}} type="text" name="username" placeholder="Enter your username" />
          <input onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder="Enter your password" />
          <button>Submit</button>
        </form>
        <p>Don't have an account? <Link className="toggleAuthForm" to="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
