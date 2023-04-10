import { HEADER_LOGO } from "../utils/constants";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={HEADER_LOGO} alt="" />
            </div>

            <div className='nav__bar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Email</li>
                    <li>Contact Us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
    )
}

export default Header; 