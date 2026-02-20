import { Link } from "react-router-dom";
import "../style/form.scss";
import Login from "./Login";

const Register = () => {
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <input type="email" name="email" placeholder="Enter your Email" />
          <input type="text" name="username" placeholder="Enter your username" />
          <input type="password" name="password" placeholder="Enter your password" />
          <button>Submit</button>
        </form>
        <p>Already have an account ? <Link className="toggleAuthForm" to="/login">Login</Link></p>
      </div>
    </main>
  );
};

export default Register;
