import React from 'react';
import "./style.css";

function Login() {
  const block_cs={

  }
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100" id="container">
        <div className="card p-4" style={{ width: "350px",margintop: '-100px' }} id="x">
          <h2 id="he">Login</h2>
          <form>
            <div className="mb-3 text-start"> {/* Added text-start class */}
              <label className="form-label" id="xyz">Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" required />
            </div>
            <div className="mb-3 text-start"> {/* Added text-start class */}
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-primary w-100" id="y">Login</button>
            <div className="text-center mt-3">
              <a href="./signup" className="text-decoration-none" id="z">Sign-up</a><br />
              <a href="./forget" className="text-decoration-none" id="z">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
