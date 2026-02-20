import { Link } from "react-router-dom";
import "../style/form.scss";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {handleLogin, loading,user} = useAuth();

  if(loading){
    return <h1>Loading....</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await handleLogin(username,password).then((res)=>{
      console.log(res);
    })
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
          <button>Submit</button>
        </form>
        <p>Don't have an account? <Link className="toggleAuthForm" to="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
