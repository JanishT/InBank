import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Deposited from "./imgs/57.jpg";

function Deposit() {
  const [accountNo, setAccountNo] = useState("");
  const [currentBalance, setCurrentBalance] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your deposit logic here
    console.log("Form submitted");
  };
  return (
    <div className="fl_page">
      <div className="withdraw_ful_">
        <div className="with_form">
          {" "}
          <h2>
            <b> Deposit Form</b>
          </h2>
          <hr />
          <form className="form_only" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="accountNo" className="form-label">
                Account No.
              </label>
              <input
                type="text"
                className="form-control"
                id="accountNo"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="currentBalance" className="form-label">
                Current Balance
              </label>
              <input
                type="text"
                className="form-control"
                id="currentBalance"
                value={currentBalance}
                onChange={(e) => setCurrentBalance(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="depositAmount" className="form-label">
                Deposit Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="depositAmount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
            </div>

            {/* <div class="mb-3">
         <label for="exampleInputEmail1" class="form-label">
           Email address
         </label>
         <input
           type="email"
           class="form-control"
           id="exampleInputEmail1"
           aria-describedby="emailHelp"
           placeholder="email address"
         />
       </div> */}

            <button type="submit" className="btn_withdraw ">
              Submit
            </button>
          </form>
        </div>
        <div className="img_on_depo">
          <img width="500px" height="500px" src={Deposited} alt=""className="deposit_i" />
        </div>
      </div>
    </div>
  );
}

export default Deposit;
