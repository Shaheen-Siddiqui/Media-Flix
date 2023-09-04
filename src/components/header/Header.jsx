import "./Header.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { authdb } from "../../store/redux-operation/auth/auth-action";
import { ActionCreator } from "../../utils/action-creator";
import { authConstants } from "../../store/redux-operation/auth/auth-constants";

const Header = ({ setToggleSidebar }) => {

  const { SIGN_OUT, USER_LOGIN } = authConstants;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLogIn } = useSelector((state) => state.auth);

  const signOutUser = () => {
    navigate("/login");
    signOut(authdb);
    dispatch(ActionCreator(SIGN_OUT));
  };


  useEffect(() => {
    onAuthStateChanged(authdb, (user) => {
      if (user) {
        dispatch(ActionCreator(USER_LOGIN, user));
      } else {
        dispatch(ActionCreator(SIGN_OUT));
      }
    });
  }, []);
  


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
        {!isLogIn ? (
          <button onClick={() => navigate("/login")}>Login</button>
        ) : (
          <button onClick={signOutUser}>Logout</button>
        )}
      </div>
    </header>
  );
};

export { Header as default };
