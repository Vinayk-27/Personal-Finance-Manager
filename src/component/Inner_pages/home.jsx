import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home({ transactions = [] }) {
  const [submitted, setSubmitted] = useState(false);
  const [income, setIncome] = useState("");

  // Calculate total credited amount
  const totalCreditedAmount = transactions
    .filter(transaction => transaction.status === "Credited")
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  // Calculate total debited amount
  const totalDebitedAmount = transactions
    .filter(transaction => transaction.status === "Debited")
    .reduce((sum, transaction) => sum + parseFloat(transaction.amount), 0);

  // Handle Income Submission
  const handleSubmit = () => {
    const inputValue = document.getElementById("incomeInput").value;
    setIncome(inputValue);
    setSubmitted(true);
    
  };


  return (
    <div>
      <div className="d-flex justify-content-center align-items-center h-100" id="container">
        <div className="card mb-3" style={{ width: "100%", margin: "20px", marginTop: "100px" }}>
          <h1 style={{ margin: "50px" }}>Financial Dashboard</h1>

          {/* Income and Expenses Section */}
          <div className="row">
            <div className="col-sm-6">
              <div className="card" style={{height:"175px"}}>
                <div className="card-body">
                  <h5 className="card-title">Total Net Worth</h5>
                  {!submitted ? (
                    <div>
                      <input type="number" id="incomeInput" placeholder="Enter your income" />
                      <button onClick={handleSubmit}>Submit</button>
                    </div>
                  ) : (
                    
                    <h1>RS. {income}</h1>
                    
                  )}
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card" style={{height:"175px"}}>
                <div className="card-body">
                  <h5 className="card-title">Money Spent</h5>
                  <h3 className="text-danger">RS. {totalDebitedAmount}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Credited & Debited Transactions */}
          <div className="row mt-4">
            {/* Credited Transactions */}
            <div className="col-sm-6">
              <div className="card border-success" style={{height:"175px"}}>
                <div className="card-body">
                  <h5 className="card-title text-success">Credited Transactions</h5>
                  <h3>Total: RS. {totalCreditedAmount}</h3>
               
                </div>
              </div>
            </div>

            {/* Debited Transactions */}
            <div className="col-sm-6">
              <div className="card border-danger" style={{height:"175px"}}>
                <div className="card-body">
                  <h5 className="card-title text-danger">Debited Transactions</h5>
                  <h3>Total: RS. {totalDebitedAmount}</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Transactions Table */}
      <div className="d-flex justify-content-center align-items-center h-100" id="container">
        <div className="card mb-3" style={{ width: "100%", margin: "20px", marginTop: "10px" }}>
          <h2 className="mt-4">Transactions</h2>
          {transactions && transactions.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="table-dark">
                  <tr>
                    <th>Ind</th>
                    <th>Title</th>
                    <th>Amount (RS)</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{transaction.title}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center">No transactions added yet.</p>
          )}

          {/* Add Transaction Button */}
          <div className="text-center mt-3">
            <Link to="/tranjx" className="btn btn-primary">Add Transaction</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
