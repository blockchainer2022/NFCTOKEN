import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ account, loadWeb3 }) => {
  const [mobile, setMobile] = useState(true);
  window.addEventListener("resize", () => {
    const mobile = window.screen.width < 600;
    setMobile(mobile);
  });
  console.log(mobile);
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
              <button>{mobile ? "Verify" : "Verify Authenticity"}</button>
            </Link>
          </div>
          <div className="connect-button-wrapper">
            <button onClick={() => loadWeb3()}>
              {account
                ? account.slice(0, 8) +
                  "..." +
                  account.slice(account.length - 5)
                : `${mobile ? "Connect" : "Connect Mobile"}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
