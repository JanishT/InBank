import "./App.css";
import "./media.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./COMPONENTS/Login/Login";
import Register from "./COMPONENTS/register/Register";
import Navbar from "./COMPONENTS/Navbar";
import Mainpart from "./COMPONENTS/Mainpart.jsx";
import Withdraw from "./COMPONENTS/Withdraw.jsx";
import CheckBal from "./COMPONENTS/CheckBal.jsx";
import Deposit from "./COMPONENTS/Deposit.jsx";
import Dashboard from "./COMPONENTS/Admin/Dashboard.jsx";
import Transaction from "./COMPONENTS/Admin/Transaction.jsx";
import About from "./COMPONENTS/About.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbar" element={<Navbar />}>
            <Route path="/navbar/mainpart" element={<Mainpart />} />
            <Route path="/navbar/withdraw" element={<Withdraw />} />
            <Route path="/navbar/checkbalance" element={<CheckBal />} />
            <Route path="/navbar/deposit" element={<Deposit />} />
            <Route path="/navbar/Aboutus" element={<About/>}/>
          </Route>
          <Route path="/adminpanel" element={<Dashboard />} />
          <Route path="/transaction" element={<Transaction/>}/>
        </Routes>
        
      </BrowserRouter>
      </>
  );
}

export default App;
