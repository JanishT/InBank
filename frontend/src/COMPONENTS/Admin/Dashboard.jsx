
import React from 'react';
import Sidebar from './Sidebar.js';
import "./Admin.css"

// import Navadmin from './Navadmin.jsx';
import Transaction from './Transaction.jsx';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="main-content">
               {/* <Navadmin/> */}
                <div className="content_transaction">
                    
                   
                    <Transaction/>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
