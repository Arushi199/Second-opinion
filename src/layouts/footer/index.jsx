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
                                        Us
                                    </li>
                                    <li className="info-mail">
                                        <i className="icofont-email"></i>
                                        <a href="mailto://hello@yourdomain.com">
                                            secopp@yourdomain.com
                                        </a>
                                    </li>
                                    <li className="info-phone">
                                        <i className="icofont-ui-call"></i>
                                        <a href="tel://(0091)8547632521">
                                            (0091) 00000000000
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6 offset-md-1 col-lg-3 offset-lg-0 col-xl-3 d-lg-none d-xl-block">
                        <div className="widget-item d-inline-block">
                            <h4 className="widget-title line-bottom">pages</h4>
                            <div className="widget-tags">
                                <ul>
                                    <li>
                                        <Link to="/">HomePage</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ServicePage</Link>
                                    </li>
                                    <li>
                                        <Link to="/">blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/">about</Link>
                                    </li>
                                    <li>
                                        <Link to="/">ContactPage</Link>
                                    </li>
                                    <li>
                                        <Link to="/">privacy policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Mutilpurpose</Link>
                                    </li>
                                </ul>
                            </div>
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
                                    path="https://x.com/i/flow/login?redirect_after_login=%2Fsecopp_com"
                                    icon="icofont-twitter"
                                />
                                <SocialIcon
                                    path="https://myaccount.google.com/"
                                    icon="icofont-youtube"
                                />
                                <SocialIcon
                                    path="https://www.facebook.com/facebook/"
                                    icon="icofont-facebook"
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
                                    @ 2025{" "}
                                    <span className="text-uppercase">
                                        Secopp
                                    </span>
                                    . Made with{" "}
                                    <i className="icofont-heart-alt"></i>by{" "}
                                    <a
                                        target="_blank"
                                        href="https://corcusstudio.in/"
                                        rel="noreferrer"
                                    >
                                        corcus team
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
