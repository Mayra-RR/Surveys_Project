import * as React from "react";
import {GlobalContextProvider, GlobalContext } from "./GlobalContextProvider";
import TextField from '@material-ui/core/TextField';
import './Login.css'
const Login = () => {
    
  const { username, password } = React.useContext(GlobalContext);

  const [userInput, setUser] = React.useState("");
  const [passwordInput, setPassword] = React.useState("");

  return (<div className='loginJS'>
  <GlobalContextProvider settings={{username: "Mayra" , password: "120190"}}>
   
      <div>
        <TextField label="username" onChange={e => setUser(e.target.value)} />
      </div>
      <div>
        <TextField
          label="password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
    {console.log(userInput)}
    {console.log(passwordInput)}

      <div>
        <button
          onClick={() => {
            if (username === userInput && password === passwordInput) {
              console.log("Successfull login");
            } else {
              console.log("Unsuccessfull login");
            }
          }}
        >
          Log in
        </button>{" "}
      </div>
     </GlobalContextProvider>
     </div>
  );
};

export default Login;
