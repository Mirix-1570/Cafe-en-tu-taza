import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'//
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div className="layout-container flex h-full grow flex-col">
      <Home />
      </div>
    </>
  );
}

export default App;
