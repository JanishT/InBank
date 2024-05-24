import React, { useState } from "react";
import Withdrawal from "./imgs/Na_Nov_15.jpg";


function Withdraw() {
  const [accountNo, setAccountNo] = useState('');
  const [currentBalance, setCurrentBalance] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with form data here
    console.log('Form submitted:', { accountNo, currentBalance, withdrawAmount });
  };
  return (
    <div className="fl_page_wi_">
      {" "}
      <div className="withdraw_ful">
       <div className="with_form">

        {" "}
        <h2><b>Payment Withdrawal Form</b></h2>
        <hr />
        <form className="form_only"onSubmit={handleSubmit}>
          {/* <div className="mb-3">
            <label for="forUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="forUsername"
              placeholder="Username"
            />
          </div> */}
           <div className="mb-3">
        <label htmlFor="accountNo"className="form-label">Account No.</label>
        <input
          type="text"
          className="form-control"
          id="accountNo"
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="currentBalance"className="form-label">Current Balance</label>
        <input
          type="text"
          className="form-control"
          id="currentBalance"
          value={currentBalance}
          onChange={(e) => setCurrentBalance(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="withdrawAmount"className="form-label">Withdraw Amount</label>
        <input
          type="text"
          className="form-control"
          id="withdrawAmount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Withdraw</button>
        </form>
        </div>
        <div><img width="600px" height="400px" src={Withdrawal} alt="" className="withdr_img"/></div> 
      </div>{" "}
     
    </div>
  );
}

export default Withdraw;
