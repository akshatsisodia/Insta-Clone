import { Link } from "react-router-dom";
import "../style/form.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin , loading, user} = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    await handleLogin(username, password);

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
        <h1>Login</h1>
        <form onSubmit={(e)=>{
          handleSubmit(e);
        }}>
          <input onInput={(e)=>{setUsername(e.target.value)}} type="text" name="username" placeholder="Enter your username" />
          <input onInput={(e)=>{setPassword(e.target.value)}} type="password" name="password" placeholder="Enter your password" />
          <button className="button primary-btn">Submit</button>
        </form>
        <p>Don't have an account? <Link className="toggleAuthForm" to="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
