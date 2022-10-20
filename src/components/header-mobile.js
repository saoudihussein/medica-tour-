import * as React from "react";
import "./header-mobile.css";
import logo from "../images/logo.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "gatsby";



const HeaderMobileComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [interventions, setInterventions] = React.useState(false);
    const [procedures, setProcedures] = React.useState(false);

    return (

        <>
            <div className="container-fluid mobile">
                <GiHamburgerMenu size={50} onClick={() => setIsOpen(!isOpen)} />
                <span>
                    <Link to="/">
                        <img src={logo} className="img-fluid logo-mobile" alt="medica-tour" />
                    </Link>
                </span>
            </div>

            <div className="container mobile">


                <div className={isOpen ? "sidenavOpen" : "sidenav"}>
                    <div className="d-flex flex-row-reverse bd-highlight close-style pt-2" onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineClose size={50} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/">
                            <img src={logo} className="img-fluid pt-5 logo" alt="medica-tour" />
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                        <div className="row">
                            <div className="col">
                                <a href="https://www.facebook.com/Medicatour.fr" target="_blank"> <FaFacebookF /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.linkedin.com/company/medica-tour-fr/" target="_blank"><FaLinkedinIn /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.instagram.com/medicatour.fr/?hl=fr" target="_blank"> <FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center pt-4">
                        <div className="row">
                            <div className="col">
                                <Link className="link" to="">Accueil</Link>
                            </div>
                        </div>
                    </div>

                    <div className="intervetions">

                        <div className="d-flex justify-content-center pt-4">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Interventions</Link>
                                </div>
                                <div className="col" onClick={() => setInterventions(!interventions)} >
                                    {
                                        interventions ?
                                            <span className="angleIcon"><FaAngleUp /></span> :
                                            <span className="angleIcon"><FaAngleDown /></span>
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            !interventions ||
                            <>
                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to="">Bariatrique</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to="">Dentaires</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to=""><div className="d-flex justify-content-center pt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <Link className="subLink" to="">Esthetique</Link>
                                                    </div>
                                                </div>
                                            </div></Link>
                                        </div>
                                    </div>
                                </div>


                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to=""><div className="d-flex justify-content-center pt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <Link className="subLink" to="">Chirurgie corps</Link>
                                                    </div>
                                                </div>
                                            </div></Link>
                                        </div>
                                    </div>
                                </div>



                            </>

                        }

                    </div>

                    <div className="procedures">

                        <div className="d-flex justify-content-center pt-4">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Procedures</Link>
                                </div>
                                <div className="col" onClick={() => setProcedures(!procedures)} >
                                    {
                                        procedures ?
                                            <span className="angleIcon"><FaAngleUp /></span> :
                                            <span className="angleIcon"><FaAngleDown /></span>
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            !procedures ||
                            <>
                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to="">Hôtel</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to="">Clinique</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to=""><div className="d-flex justify-content-center pt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <Link className="subLink" to="">Séjour Médical</Link>
                                                    </div>
                                                </div>
                                            </div></Link>
                                        </div>
                                    </div>
                                </div>
                            </>

                        }

                    </div>

                    <div className="tarif">
                        <div className="d-flex justify-content-center pt-4">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Tarif</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="apropos">
                        <div className="d-flex justify-content-center pt-4">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">A&nbsp;propos</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blog">
                        <div className="d-flex justify-content-center pt-4">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Blog</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="d-flex justify-content-center pt-4">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMobileComponent;
