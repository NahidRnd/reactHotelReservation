import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("nahid@mail.com");
    const [password, setPassword] = useState("1234");
      
    const {user, login, isAuthenticated} = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email && password)   login(email, password);
    };

    
    useEffect(()=> {
        if(isAuthenticated) navigate("/Account", {replace: true});
    }, [isAuthenticated, navigate]);

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="login-input">
            <input type="email" name="email" id="email" />
        </div>
        <div className="login-input">
            <input type="password" name="password" id="password" />
        </div>
        <button className="btn">Login</button>
      </form>
    </div>
  );
}

export default Login