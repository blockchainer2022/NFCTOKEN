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
              <button>
                <p className="mobile">Verify</p>
                <p className="desktop">Verify Authenticity</p>
              </button>
            </Link>
          </div>
          <div className="connect-button-wrapper">
            <button id="changeMe" onClick={() => loadWeb3()}>
              <p className="mobile">
                {account
                  ? account.slice(0, 4) +
                    "..." +
                    account.slice(account.length - 3)
                  : "Connect"}
              </p>
              <p className="desktop">
                {account
                  ? account.slice(0, 8) +
                    "..." +
                    account.slice(account.length - 5)
                  : `Connect Account`}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
