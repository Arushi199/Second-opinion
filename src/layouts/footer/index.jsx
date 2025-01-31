import SocialIcon from "../../components/social-icon";
import { Link } from "react-router-dom";
import Newsletter from "../../components/newsletter";
import Logo from "../../components/logo";

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Logo
                                    classOption="footer-logo"
                                    image={`${process.env.PUBLIC_URL}/img/logo-dark.png`}
                                />
                                <p className="mb-0">
                                    SECOPP connects patients in India with a
                                    trusted network of top US medical
                                    professionals (cancer specialists &
                                    orthopaedic surgeons) for valuable second
                                    opinions.
                                </p>
                                <ul className="widget-contact-info">
                                    <li className="info-address">
                                        <i className="icofont-location-pin"></i>
                                        69 Halsey St, New York, Ny 10002, United
                                        States.
                                    </li>
                                    <li className="info-mail">
                                        <i className="icofont-email"></i>
                                        <a href="mailto://hello@yourdomain.com">
                                            hello@yourdomain.com
                                        </a>
                                    </li>
                                    <li className="info-phone">
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel://(0091)8547632521">
                                            (0091) 8547 632521
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
                        <div className="widget-item d-inline-block">
                            <h4 className="widget-title line-bottom">
                                Popular Tags
                            </h4>
                            <div className="widget-tags">
                                <ul>
                                    <li>
                                        <Link to="/">Amazing</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Envato</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Themes</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Clean</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Wordpress</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Creative</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Mutilpurpose</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Retina Ready</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Twitter</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Responsive</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">FAQ</h4>
                            <nav className="widget-posts">
                                <ul className="posts-item">
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            What is Telehealth?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            What are the benefits of seeking a
                                            second opinion?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            How are my appointments scheduled?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            How do I pick my doctor?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            How long does it take to get an
                                            appointment?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            <i className="icon icofont-rounded-double-right"></i>
                                            Can I connect with SecondOpinion if
                                            l am not in the United States?
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-0 col-xl-3">
                        <div className="widget-item">
                            <h4 className="widget-title line-bottom">
                                Newsletter
                            </h4>
                            <div className="widget-newsletter">
                                <p>
                                    Sign up for our mailing list to get latest
                                    updates and offers.
                                </p>
                                <Newsletter mailchimpUrl="//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef" />
                            </div>
                            <div className="widget-social-icons">
                                <SocialIcon
                                    path="https://twitter.com/"
                                    icon="icofont-twitter"
                                />
                                <SocialIcon
                                    path="https://myaccount.google.com/"
                                    icon="icofont-google-plus"
                                />
                                <SocialIcon
                                    path="https://www.pinterest.com/"
                                    icon="icofont-pinterest"
                                />
                                <SocialIcon
                                    path="https://rss.com/"
                                    icon="icofont-rss"
                                />
                                <SocialIcon
                                    path="https://www.facebook.com/"
                                    icon="icofont-facebook"
                                />
                                <SocialIcon
                                    path="https://dribbble.com/"
                                    icon="icofont-dribbble"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12">
                            <div className="widget-copyright">
                                <p>
                                    &copy; 2024{" "}
                                    <span className="text-uppercase">
                                        corcus
                                    </span>
                                    . Made with{" "}
                                    <i className="icofont-heart-alt"></i> by{" "}
                                    <a
                                        target="_blank"
                                        href="https://www.hasthemes.com"
                                        rel="noreferrer"
                                    >
                                        corcus theam
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
