import Styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer
            className={Styles.footer}
        >
            <h3 className={Styles.footerTitle}>Footer</h3>
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            <div
                className={Styles.footerList}
            >
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.footerListItem}
                >
                    Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.footerListItem}
                >
                    Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={Styles.footerListItem}
                >
                    Instagram
                </a>
            </div>
        </footer>
    );
};

export default Footer;
