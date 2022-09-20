import React from "react";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Layout from "./components/Loyout.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    console.log(process.env.Node_Env)
    console.log(process.env.SECRATE_NAME)
    // if(process.env.NODE_ENV === "produc"){

    // }
    // else if(){

    // }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
