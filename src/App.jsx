import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import LogIn from "./Views/Home/LogIn";

function App() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<LogIn />} />
    </Routes>
  );
}

export default App;
