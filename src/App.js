import { useState } from "react";
import "./App.css";
import DashBoard from "./components/dashboard";
import Login from "./components/login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = (status) => {
    setIsLoggedIn(status);
  };

  return (
    <div className="App">
      {isLoggedIn ? <DashBoard /> : <Login onLogin={onLogin} />}
    </div>
  );
}

export default App;
