import { Link } from "react-router-dom";
import "../style/form.scss";
import Register from "./Register";

const Login = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <input type="text" name="username" placeholder="Enter your username" />
          <input type="password" name="password" placeholder="Enter your password" />
          <button>Submit</button>
        </form>
        <p>Don't have an account? <Link className="toggleAuthForm" to="/register">Register</Link></p>
      </div>
    </main>
  );
};

export default Login;
