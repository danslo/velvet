import {FormEvent, useState} from "react";
import {useGetStoreNameQuery} from "../../types";

const Login: React.FC<{setToken: (token: string) => void}> = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(username);
    console.log(password);
  };

  const { data } = useGetStoreNameQuery();

  return (
    <h1>{data?.storeConfig?.store_name}</h1>
  );

  /*
  return(
    <form onSubmit={handleSubmit}>
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
  )*/

}

export default Login;
