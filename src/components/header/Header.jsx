import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

 const Header = ({ setToggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <header className="header-case">
      <div className="logo-bar-case">
        <button
          className="bar-btn"
          onClick={() => setToggleSidebar((toggleSidebar) => !toggleSidebar)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <img
          className="media-flix-logo"
          src="https://play-lh.googleusercontent.com/BZlQ2AFMNgtN1Jz4KjuEBPEcEDCB3Tv8YzyNeSqK51jYIsf_NQyC38y4_yoBnaDHE2G_"
          alt="media-flix-logo"
        />
        <h2>MediaFlix</h2>
      </div>
      <div className="icon-case">
        <input
          type="text"
          className="search-input"
          placeholder="search by name"
        />
        <span>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="xl"
            className="search-icon"
          />
        </span>
      </div>
      <div className="right-nav">
        <h3>Explore</h3>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </header>
  );
};

export  {Header as default}
