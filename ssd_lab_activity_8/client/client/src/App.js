import './App.css';
import { useState,useEffect } from "react";
import Axios from "axios";
function App() {
  const [listofUsers, setListofUsers] = useState([]);
  const [roll, setRoll] = useState([""]);
  const [password, setPassword] = useState([""]);
  const [role, setRole] = useState([""]);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );
  useEffect(() => {
    Axios.get("http://localhost:3001/getUser").then((response) => {
      setListofUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      roll,
      password,
      role,
    }).then((response) => {
      setListofUsers([...listofUsers,
        {
          roll,
          password,
          role,
        },
      ]);
    });
  };
  return (
    <div className="App">
      <div className="userDisplay">        
          {listofUsers.map((user)=>{
            return (
              <div>
                <h1>RollNo: {user.roll}</h1>
                <h1>password: {user.password}</h1>
                <h1>Role: {user.role}</h1>
              </div>
            );
          })}
      </div>
      <div>
        <input type ="text" placeholder="RollNo" onChange={(event)=>{
          setRoll(event.target.value);
        }}></input>
        <input type ="text" placeholder="Password"onChange={(event)=>{
          setPassword(event.target.value);
        }}></input>
        <input type ="text" placeholder="Role" onChange={(event)=>{
          setRole(event.target.value);
        }}></input>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
