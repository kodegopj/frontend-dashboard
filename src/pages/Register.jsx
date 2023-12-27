import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import userService from "../services/userService";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';


function Register({ user }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate])


  const handleRegistration = (e) => {
    e.preventDefault();

    const credentials = {
      name, 
      username, 
      password,
    };

    userService.register(credentials).then((_) => {
      navigate("/login");
      setName("");
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
          onSubmit={handleRegistration}
          className=" border  my-1 py-4 px-6 flex flex-col gap-6 "
        >
          <div className=""><PersonIcon/>
            Name{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input flex flex-col border-solid border-2 border-slate-500 p-2"
            />
          </div>
          <div className=""><PersonIcon/>
            Username{" "}
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input flex flex-colborder-solid border-2 border-slate-500 p-2"
            />
          </div>
          <div className=""><LockIcon/>
            Password{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input flex flex-col border-solid border-2 border-slate-500 p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-500 p-2 mt-2 text-white font-bold"
          >
            Register
          </button>
        </form>
      </div>
      <p className="have-account my-4 py-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-500">
          Login here.
        </Link>
      </p>
    </div>
  );
}

export default Register;
