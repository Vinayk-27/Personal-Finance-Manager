import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './login';

function Signup() {
  return (
   <div>
      <div className="d-flex justify-content-center align-items-center vh-100"  id="container">
  
      <div className="card p-4" style={{ width: "350px" }} id="x">

   
        <h2 id="he">Sign-up</h2>
        <form className=" text-start">
             <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="Enter First Name" required />
          </div>
           <div className="mb-3">
            <label className="form-label">Last name</label>
            <input type="text" className="form-control" placeholder="last name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter password" required />
          </div>
          <button className="btn btn-primary w-100" id="y" onClick={Login}>Signup</button>
          <div className="text-center mt-3">
            
            <a href="./" className="text-decoration-none" id="z">login</a><br/>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
