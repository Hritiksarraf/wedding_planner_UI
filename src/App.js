import "./App.css";
import Navbar from "./components/navbar.js";
import Endcomponent from "./components/endcomponent.js";
import Home from "./pages/home.js";
import * as React from "react";
import { createRoot } from "react-dom/client";
import About_us from "./pages/about_us.js";
import Gallery from "./pages/gallery.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  return (
  <>
    
      <Navbar />
        <Outlet/>
      <Endcomponent/>
    
  </>
  );
}


export default App;
