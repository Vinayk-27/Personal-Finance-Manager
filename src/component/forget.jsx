import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function Forgot() {
  return (
   <div>
      <div className="d-flex justify-content-center align-items-center vh-100 text-start"  id="container">
  
      <div className="card p-4" style={{ width: "350px" }} id="x">

   
        <h2 id="he">Recover Credential</h2>
        <form>
             <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="email" className="form-control" placeholder="Enter First Name" required />
          </div>
           <div className="mb-3">
            <label className="form-label">Last name</label>
            <input type="email" className="form-control" placeholder="last name" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" required />
          </div>
          <button type="submit" className="btn btn-primary w-100" id="y">Submit</button>
          <div className="text-center mt-3 " style={{display:'flex', gap: '10px',justifyContent:"center" }}>
            <a href="./" className="text-decoration-none" id="z">Login</a><br/>
            <h>|</h>
            <a href="./signup" className="text-decoration-none" id="z">Sign-up</a><br/>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Forgot
