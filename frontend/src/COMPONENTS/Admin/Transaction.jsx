import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Transaction() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
   
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/transactions');
        setTransactions(response.data);
        console.log("data",transactions)
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions(); 
  }, []);

  const useraccount = transactions.filter((item)=>item.usertype === 'user')

  return (
    <div>
      <h2>Transaction Table</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Account No.</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Transaction Type</th>
          </tr>
        </thead>
        <tbody>
        

          {useraccount.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td>
              <td>{transaction.accountNo}</td>
              <td>{transaction.name}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.transactionType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
