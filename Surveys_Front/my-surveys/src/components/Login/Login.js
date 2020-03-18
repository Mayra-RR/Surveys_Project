import * as React from "react";
import { GlobalContext } from "./GlobalContextProvider";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { username, password } = React.useContext(GlobalContext);
  const [userInput, setUser] = React.useState("");
  const [passwordInput, setPassword] = React.useState("");

  const validLog = useHistory();

return <>
    <div className="loginBody">
      <div>
        <TextField label="username" onChange={userIn => setUser(userIn.target.value)} />
      </div>
      <div>
        <TextField
          label="password"
          type="password"
          onChange={passwordIn => setPassword(passwordIn.target.value)}
        />
      </div>
      
      <div>
        <button
          onClick={() => {
            if (username === userInput && password === passwordInput) {
              /* console.log("Successfull login"); */
              validLog.push('/SurveyMenu');
            } else {
              console.log("Unsuccessfull login");
            }
          }}
        >
          Log in
        </button>
      </div>
    </div>
    </>
  
};

export default Login;
