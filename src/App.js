import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { lazy, Suspense } from "react";
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
          <Routes>
            <Route exact path="/" element={<Suspense fallback='Loading...'> <Home /></Suspense>} />
            <Route exact path="/login" element={<Suspense fallback='Loading...'><Login /></Suspense>} />
            <Route exact path="/signup" element={<Suspense fallback='Loading...'><Signup /></Suspense>} />
            <Route exact path="/myOrder" element={<Suspense fallback='Loading...'><MyOrder /></Suspense>} />
          </Routes>
          {/* </Suspense> */}
        </div>
      </Router>
    </CartProvider >
  );
}

export default App;