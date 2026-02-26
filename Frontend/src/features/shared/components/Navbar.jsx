import "./navbar.scss";
import { useNavigate } from "react-router-dom";


const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
        <h4>Create a Post</h4>
        <button onClick={()=>{navigate("/createpost")}} className="button primary-btn">Submit</button>
    </nav>
  )
}

export default Navbar