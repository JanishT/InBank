// src/components/Sidebar.js
import React, { useState } from "react";

import {
  FaTachometerAlt,
  FaIdCard,
  FaThList,
  FaBullhorn,
  FaCogs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isAccountManagementOpen, setAccountManagementOpen] = useState(false);
  const [isTransactionOpen, setTransactionOpen] = useState(false);

  const toggleAccountManagement = () => {
    setAccountManagementOpen(!isAccountManagementOpen);
  };
  const toggleTransaction = () => {
    setTransactionOpen(!isTransactionOpen);
  };
  return (
    <div className="sidebar">
      <nav className="mt-4">
        <ul
          className="nav nav-pills nav-sidebar flex-column text-sm nav-compact nav-flat nav-child-indent nav-collapse-hide-child"
          role="menu"
          data-accordion="false"
        >
          <li className="nav-item dropdown">
            <a href="./" className="nav-link nav-home">
              <FaTachometerAlt className="nav-icon" />
              <p>Dashboard</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#"
              className="nav-link tree-item nav-accounts nav-transactions nav-manage_account"
              onClick={toggleAccountManagement}
            >
              <FaIdCard className="nav-icon" />
              <p>
                Account Management
                <i
                  className={`right fas fa-angle-left ${
                    isAccountManagementOpen ? "rotate" : ""
                  }`}
                ></i>
              </p>
            </a>
            {isAccountManagementOpen && (
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="./?page=accounts/manage_account"
                    className="nav-link nav-manage_account"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>New Account</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="./?page=accounts" className="nav-link nav-index">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Manage Account</p>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link
              to="/transaction"
              className="nav-link tree-item nav-transaction nav-deposit nav-withdraw nav-transfer"
              onClick={toggleTransaction}
            >
              <FaThList className="nav-icon" />
              <p>
                Transaction
                <i
                  className={`right fas fa-angle-left ${
                    isTransactionOpen ? "rotate" : ""
                  }`}
                ></i>
              </p>
            </Link>
            {isTransactionOpen && (
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a
                    href="./?page=transaction/withdraw"
                    className="nav-link nav-withdraw"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Withdraw</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="./?page=transaction/transfer"
                    className="nav-link nav-transfer"
                  >
                    <i className="far fa-circle nav-icon"></i>
                    <p>Transfer</p>
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item dropdown">
            <a href="./announcements" className="nav-link nav-announcements">
              <FaBullhorn className="nav-icon" />
              <p>Announcements</p>
            </a>
          </li>
          <li className="nav-header">Maintenance</li>
          <li className="nav-item dropdown">
            <a href="./system_info" className="nav-link nav-system_info">
              <FaCogs className="nav-icon" />
              <p>Settings</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
