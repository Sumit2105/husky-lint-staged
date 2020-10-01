import React, {useState} from "react";

const LoginForm = (props) => {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const onSubmit = () => {
    console.log("userName", userName);
    console.log("password", password);
  };

  return (
    <div>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default LoginForm;
