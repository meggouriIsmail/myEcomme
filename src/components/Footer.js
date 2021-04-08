import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="foo-about">
                <h2>NEWSLETTER</h2>
                <input type="text" placeholder="email@example.com" className="f-text-input" />
                <input type="button" value="SUBSCRIB" className="f-btn-contact" />
            </div>
            <div className="foo-cat">
                <Link to="/shop">
                    <h2>CATEGORIES</h2>
                </Link>
                <ul className="f-categorie">
                    <li>
                        Men
                    </li>
                    <li>
                        Women
                    </li>
                    <li>
                        Electronics
                    </li>
                    <li>
                        Jewelery
                    </li>
                </ul>
            </div>
            <div className="foo-help">
                <h2>GET IN TOUCH</h2>
                <p>
                    Any questions? Let us know in store at 8th floor, 379 Hassan II St, Rabt, MA 10018 or call us on (+212)6 95874215
                </p>
                <ul className="social">
                    <li>
                        <a href="https://ma.linkedin.com/in/ismail-meggouri-7437a71b4" target="_blank" rel="noreferrer">
                            <img src="/assets/icons/linkedin_64px.png" alt="linkedin" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ismail_meggouri/?hl=en" target="_blank" rel="noreferrer">
                            <img src="/assets/icons/instagram_64px.png" alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/el.meggo" target="_blank" rel="noreferrer">
                            <img src="/assets/icons/facebook_64px.png" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/meggouriIsmail" target="_blank" rel="noreferrer">
                            <img src="/assets/icons/github_64px.png" alt="github" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;