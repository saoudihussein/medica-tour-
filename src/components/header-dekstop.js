import * as React from "react";
import "./header-dekstop.css";
import logo from "../images/logo.webp";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from "gatsby";




const HeaderDesktopComponent = () => {
    const [header, setHeader] = React.useState(window.scrollY > 300 ? true : false);



    React.useEffect(() => {
        document.addEventListener('scroll', () =>
            window.scrollY > 300 ? setHeader(true) : setHeader(false)
        );
    }, [])

    return (
        <div className="desktop">


            {
                !header ||
                <div className="container-fluid header">
                    <div class="container pt-4 pb-4 ">
                        <div className="row">
                            <div className="col-10 menu-bar">
                                <ul>
                                    <li>
                                        <Link to="/" className="text-uppercase link-desk">
                                            ACCUEIL
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Interventions
                                        </Link>


                                        <div class="dropdown-menu">
                                            <ul>
                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Bariatrique</Link>
                                                    <div class="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Sleeve gastrique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Anneau gastrique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">By-pass gastrique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Ballon gastrique</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Procedure
                                        </Link>

                                        <div class="dropdown-menu">
                                            <ul>
                                                <li>
                                                    <Link href="#">Procedure</Link>
                                                    <div class="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link href="#">Pricing</Link></li>
                                                            <li><Link href="#">Pricing</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Devis&nbsp;gratuits
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Tarifs
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            A&nbsp;propos
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Contact
                                        </Link>
                                    </li>

                                </ul>

                            </div>

                            <div className="col">
                                <div className="row float-end">
                                    <div className="col-1">
                                        <a href="https://www.facebook.com/Medicatour.fr" className="link-desk" target="_blank"> <FaFacebookF /></a>
                                    </div>

                                    <div className="col-1">
                                        <a href="https://www.linkedin.com/company/medica-tour-fr/" className="link-desk" target="_blank"><FaLinkedinIn /></a>
                                    </div>

                                    <div className="col-1">
                                        <a href="https://www.instagram.com/medicatour.fr/?hl=fr" className="link-desk" target="_blank"> <FaInstagram /></a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            }

            <div class="container">
                <div class="row d-flex">
                    <div class="col-2 pt-5">
                        <Link to="/">
                            <img src={logo} className="img-fluid  logo" alt="medica-tour" />
                        </Link>
                    </div>
                    <div class="col pt-5">
                        <div className="row flex-style">
                            <div className="col-2">
                                <FaClock size={30} />
                            </div>

                            <div className="col-9">
                                <div className="row">
                                    Lundi - Samedi 08:00 - 21:00
                                </div>

                                <div className="row">
                                    Dimanche - Fermé
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col pt-5">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <a href="tel:+216 22 543 410" className="link-desk">
                                        <span>
                                            <FaPhoneAlt /> +216 22 543 410
                                        </span>
                                    </a>
                                </div>

                                <div className="row">
                                    <a href="mailto:Contact@medica-tour.fr" className="link-desk">
                                        <span>
                                            <FaRegEnvelope /> Contact@medica-tour.fr
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col pt-5">
                        <div className="row flex-style">
                            <div className="col-2">
                                <FaMapMarkerAlt size={30} />
                            </div>

                            <div className="col">
                                <div className="row">
                                    145, RES MAYA "B" - H NOUIRA,
                                </div>

                                <div className="row">
                                    BORJ LOUZIR 2073
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <hr class="border-2 border-top mt-5" />


            <div class="container">
                <div className="row">
                    <div className="col-10 menu-bar">
                        <ul>
                            <li>
                                <Link to="/" className="text-uppercase link-desk">
                                    ACCUEIL
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Interventions
                                </Link>


                                <div class="dropdown-menu">
                                    <ul>
                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Bariatrique</Link>
                                            <div class="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Sleeve gastrique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Anneau gastrique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">By-pass gastrique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Ballon gastrique</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Procedure
                                </Link>

                                <div class="dropdown-menu">
                                    <ul>
                                        <li>
                                            <Link href="#">Procedure</Link>
                                            <div class="dropdown-menu-1">
                                                <ul>
                                                    <li><Link href="#">Pricing</Link></li>
                                                    <li><Link href="#">Pricing</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Devis&nbsp;gratuits
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Tarifs
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    A&nbsp;propos
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className="col">
                        <div className="row float-end">
                            <div className="col-1">
                                <a href="https://www.facebook.com/Medicatour.fr" className="link-desk" target="_blank"> <FaFacebookF /></a>
                            </div>

                            <div className="col-1">
                                <a href="https://www.linkedin.com/company/medica-tour-fr/" className="link-desk" target="_blank"><FaLinkedinIn /></a>
                            </div>

                            <div className="col-1">
                                <a href="https://www.instagram.com/medicatour.fr/?hl=fr" className="link-desk" target="_blank"> <FaInstagram /></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default HeaderDesktopComponent
