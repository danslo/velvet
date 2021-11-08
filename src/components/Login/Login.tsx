import React, {FormEvent, useContext, useState} from "react";
import {AuthContext} from "../../state/context";
import {login} from "../../state/actions";

const Login: React.FC = () => {
  const { state, dispatch } = useContext(AuthContext);

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username && password) {
        login(dispatch, {username, password});
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h2>{state.token}</h2>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Login;
