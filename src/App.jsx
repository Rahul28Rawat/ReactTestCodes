import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import rahul from "./assets/Rahul.jpg";
import simran from "./assets/simran.jpg";
import pritish from "./assets/pritish.jpg";
import UserCards from "./components/usercards";

function App() {
  return (
    <div className="container">
      <UserCards Name="Rahul Rawat" image={rahul} />
      <UserCards Name="Simran Rawat" image={simran} />
      <UserCards Name="Pritish Srivastava" image={pritish} />
    </div>
  );
}

export default App;
