import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCoutner] = useState(0);

  function handleIncrement() {
    setCoutner(counter + 1);
  }
  function handleDecrement() {
    if (counter > 0) {
      setCoutner(counter - 1);
    } else {
      alert("Counter can't be negative");
    }
  }

  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        fontSize: "2rem",
      }}
    >
      <Button onClick={handleIncrement}>+</Button>
      <span>{counter}</span>
      <Button onClick={handleDecrement}>-</Button>

      <Login />
    </div>
  );
}

export default App;

function Button(props) {
  return (
    <button
      style={{
        border: "1px solid black",
        boxShadow: "3px 5px",
        borderRadius: "5px",
        marginLeft: "1rem",
        marginRight: "1rem",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

function Login() {
  const [account, setAccount] = useState({ username: "", password: "" });
  function handleUsernameChange(event) {
    setAccount({ ...account, username: event.target.value });
  }
  function handlePasswordChange(event) {
    setAccount({ ...account, password: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(account);
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
}
