import { Link } from "react-router-dom";
import Styles from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../state/auth/authSlice";
import { RootState } from "../../state/store";

const Navbar = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector((state: RootState) => state.auth.isAuthenticated); 
    const handleLogout = () => {
        dispatch(logout());
    }
    return (
        <nav
            className={Styles.navbar}
        >
            <ul
                className={Styles.navbarList}
            >
                <li>
                    <Link to="/" className={Styles.navBarItem}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={Styles.navBarItem}>
                        About
                    </Link>
                </li>
               { isLogin &&<li>
                    <Link to="/" onClick={handleLogout} className={Styles.navBarItem}>
                        Logout
                    </Link>
                </li>}
            </ul>
        </nav>
    );
};

export default Navbar;
