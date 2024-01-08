import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import noteService from "../services/noteService";


function Login({ user, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();  

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const credentials = {
      username,
      password
    }

    userService.login(credentials).then((res) => {     
      window.localStorage.setItem("loggedDashboardUser", JSON.stringify(res));
      setUser(res);
      noteService.setToken(res.token);
      navigate("/");
      setUsername("");
      setPassword("");
    });
  };

  return (
    <div className="login">
      <div className="login-box">
      <div className="login-logo ">
      </div>
      <h1 className=" center-codes text-4xl mb-4 font-bold">Center Code</h1>
      </div>
    
      <div className="welcome1">
      <div className="welcome  mb-4  font-bold">
        Welcome!
      </div><h5 className="great"> <b>Today will be great.</b> </h5>
      </div>
      
      <div>
        <form
          onSubmit={handleLogin}
          className=" border  my-4 py-8 px-6 flex flex-col gap-6 "
        >
          <div className=" "><PersonIcon/>
            Username{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className=" input flex flex-col border-solid border-2 border-slate-500 p-2"
            />
          </div>
          <div className=""><LockIcon/>
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className=" input flex flex-col border-solid border-2 border-slate-500 p-2"
            />
          </div>
          <button
            type="submit"
            className=" login-button bg-slate-500 p-2 mt-2 text-white font-bold"
          >
            Login{" "}
          </button>
        </form>
      </div>
      <p className=" have-account  my-4 py-4">
        Do not have an account?{" "}
        <Link to="/register" className="text-blue-500">
          Register here.
        </Link>
      </p>
    </div>
  );
}

export default Login;
