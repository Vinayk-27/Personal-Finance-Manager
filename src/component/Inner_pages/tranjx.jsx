import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Tranjx({ addTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  var[grow,setgrow]=useState(0);
  const navigate = useNavigate();
  grow=grow+amount;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title || !amount || !status) {
      alert("Please fill all fields");
      return;
    }

    // Create new transaction object
    const newTransaction = {
      title,
      amount,
      status,
      grow
    };

    addTransaction(newTransaction); // Pass transaction to App.jsx
    navigate('/home'); // Redirect to Home
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100" id="container">
        <div className="card mb-3 text-start" style={{ height: "auto", width: "50%", margin: "20px", marginTop: "100px" }}>
          <form onSubmit={handleSubmit}>
            <legend className='text-center'><h1>Transaction</h1></legend>

            <div className="mb-3">
              <label htmlFor="title" className="form-label"><h4>Title</h4></label>
              <input type="text" id="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="mb-3">
              <label htmlFor="amount" className="form-label"><h4>Amount</h4></label>
              <input type="number" id="amount" className="form-control" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="status" value="Credited" onChange={() => setStatus('Credited')} />
                  <label className="form-check-label">Credited</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="status" value="Debited" onChange={() => setStatus('Debited')} />
                  <label className="form-check-label">Debited</label>
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Tranjx;
