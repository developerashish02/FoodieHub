import { HEADER_LOGO } from "./utils/constants";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">

            <Link to={"/"}>
                <div className="logo">
                    <img src={HEADER_LOGO} alt="" />
                </div>
            </Link>

            <div className="nav__bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/card">Card</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
