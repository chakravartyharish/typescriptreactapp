import React from "react"
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import MainApp from "./components/MainApp"
import Update from "./components/Update"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div
      className="position: fixed top: 0"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1445264718234-a623be589d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,
        // backgroundRepeat: "repeat-x repeat-y",
        width: "100vw",
        height: "100vh",
        backgroundAttachment: "scroll",
      }}
    >
      <Router>
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
              <a href="/" className="btn btn-outline-success me-2">
                Home
              </a>
              <div className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="btn btn-outline-success me-2">
                    Add
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/update"} className="btn btn-outline-success me-2">
                    Update
                  </Link>
                </li>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <h1
            style={{
              color: "Yellow",
              fontFamily: "serif",
              fontSize: "50px",
              fontStyle: "oblique",
            }}
          >
            Welcome!
          </h1>

          <Routes>
            <Route path="/" element={<MainApp />} />

            <Route path="/update" element={<Update />} />
          </Routes>
        </div>{" "}
        <Footer />
      </Router>
    </div>
  )
}

export default App
