import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ account, loadWeb3 }) => {
  return (
    <div className="header-wrapper">
      <div className="header-inner-wrapper">
        <div className="yellow-dots-wrapper">
          <div className="dot" />
          <div className="dot ml10" />
          <div className="dot ml10" />
        </div>
        <div className="button-group">
          <div className="connect-button-wrapper">
            <Link to="/view-certificate">
              <button>Verify Authenticity</button>
            </Link>
          </div>
          <div className="connect-button-wrapper">
            <button onClick={() => loadWeb3()}>
              {account
                ? account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)
                : "CONNECT WALLET"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
