import React from "react" 
import {NavLink} from "react-router-dom"


const Nav = () => {
  return (
    <>
     

        {/* header section nav  */}


        <nav className="navbar navbar-expand-lg nav-sticky ">
          <div className="container">
            <a className="navbar-brand navlogo" to="#">
              <img className="Img-logo-S" src="https://cdn-icons-png.flaticon.com/128/11807/11807395.png" alt="" />
              <span className="name-logo">HUBHAM</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto ">
                <li className="nav-item  underline-navvv">
                  <NavLink className="nav-link text-white " aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item underline-navvv">
                  <NavLink className="nav-link text-white" to="/Featuree">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item underline-navvv">
                  <NavLink className="nav-link text-white" to="/Services">
                  Services
                  </NavLink>
                </li>
                <li className="nav-item underline-navvv">
                  <NavLink className="nav-link text-white" to="/Contact">
                    Contact
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        {/* second section  */}
        {/* <div className="container"> */}

        

      {/* </div> */}
    </>
  )
}
export default Nav