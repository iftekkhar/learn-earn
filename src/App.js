import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/Shop/Shop";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar></Topbar>
      <Shop></Shop>
    </>
  );
}

export default App;
