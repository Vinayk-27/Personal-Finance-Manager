import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function Cnt() {
  return (
   <div>
      <div className="d-flex justify-content-center align-items-center vh-100"  id="container">
        <div className="card mb-3" style={{maxwidth: "540px",margin:"30px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/src/assets/Free-Contact-Us-Illustration-JPEG-1.webp" className="img-fluid rounded-start" alt="..." style={{height:"400px",boxshadow:" rgba(196, 193, 193, 0.509) 0px 22px 70px 4px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">Personal Finance Management System</h1>
        <h4 className="card-title" style={{color:'gray'}}></h4>
            <div class="card text-center">
  <div class="card-header">
  Contact Us
  </div>
  <div className="card-body">
    <h5 className="card-title">PFMSSupport@gmail.com</h5>
    <h5 className="card-title">Phone:880614785</h5>
    <p className="card-text">IT Park Pune West,Near Ambani House,Pune 431509 .</p>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  
  )
}

export default Cnt
