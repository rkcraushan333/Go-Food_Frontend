import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from "./components/ContextReducer";
const Home = lazy(() => import("./screens/Home"));
const Login = lazy(() => import("./screens/Login"));
const Signup = lazy(() => import("./screens/Singup"));
const MyOrder = lazy(() => import("./screens/MyOrder"));

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route exact path="/myOrder" element={<MyOrder />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

/*
import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Singup from "./screens/Singup";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./screens/MyOrder";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Singup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;

*/