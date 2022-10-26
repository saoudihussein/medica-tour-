import * as React from "react";
import logo from "../images/logo.webp";
import footerImg from "../images/dentalcare-promo-new.png"
import blog1 from "../images/gynecomastie.webp"
import blog2 from "../images/chirurgie-paupiere.webp"
import blog3 from "../images/rhinoplastie-en-tunisie.webp"

import { FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./footer.css";





const FooterComponent = () => {
    const [menu, setMenu] = React.useState(false);
    const [exit, setExit] = React.useState(false);
    const [interventions, setInterventions] = React.useState(false);
    const [procedures, setProcedures] = React.useState(false);

    return (
        <>
            <div className="container-fluid footer-gen-style pt-5 ">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <span className="footer-bloc-1-title ">Contact us now</span>
                            <p className="footer-bloc-1-text mt-3">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps.

                                <div className="row mt-3">
                                    <div className="col-sm-12 col-md-6">
                                        <p><a href="tel:+216 22 543 410">
                                            <span>
                                                <FaPhoneAlt /> +216 22 543 410
                                            </span>
                                        </a></p>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <p><a href="mailto:Contact@medica-tour.fr">
                                            <span>
                                                <FaRegEnvelope /> Contact@medica-tour.fr
                                            </span>
                                        </a></p>
                                    </div>
                                </div>

                            </p>

                        </div>

                        <div className="col-sm-12 col-md-4">
                            <img className="img-fluid" src={footerImg} />
                        </div>

                        <div className="col-sm-12 col-md-2">
                            <span className="footer-bloc-1-title ">Suivez-nous</span>

                            <div className="row">


                                <div className=" col-4">
                                    <p className="footer-bloc-1-text mt-3 ">
                                        <a href="https://www.facebook.com/Medicatour.fr" target="_blank"> <FaFacebookF /></a>
                                    </p>
                                </div>

                                <div className="col-4">
                                    <p className="footer-bloc-1-text mt-3">
                                        <a href="https://www.linkedin.com/company/medica-tour-fr/" target="_blank"><FaLinkedinIn /></a>
                                    </p>
                                </div>

                                <div className="col-4">
                                    <p className="footer-bloc-1-text mt-3">
                                        <a href="https://www.instagram.com/medicatour.fr/?hl=fr" target="_blank"> <FaInstagram /></a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid  pb-5 pt-2">
                <div class="container ">
                    <div className="row blog-style">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Actualités
                            </span>
                            <br />
                            <span className="h12">
                                sur la chirurgie esthétique
                            </span>
                        </h1>

                        <div className="row mt-3">
                            <div className="col-sm-12 col-md-4">
                                <div class="card" >
                                    <img src={blog1} class="card-img-top img-fluid" alt="Chirurgie de l’obésité" />
                                    <div class="card-body">
                                        <h5 class="card-title">10/10/2022</h5>
                                        <h6 class="card-subtitle mb-2">Qu est-Ce Que La Chirurgie De La Gynécomastie ?</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4">
                                <div class="card" >
                                    <img src={blog2} class="card-img-top img-fluid" alt="Chirurgie de l’obésité" />
                                    <div class="card-body">
                                        <h5 class="card-title">02/10/2022</h5>
                                        <h6 class="card-subtitle mb-2">Comment la blépharoplastie vous permet de paraître plus jeune ?</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4">
                                <div class="card" >
                                    <img src={blog3} class="card-img-top img-fluid" alt="Chirurgie de l’obésité" />
                                    <div class="card-body">
                                        <h5 class="card-title">20/09/2022</h5>
                                        <h6 class="card-subtitle mb-2">8 Questions À Se Poser Avant De Subir Une Rhinoplastie</h6>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>



            <div className="container-fluid  pb-5 pt-5 last-footer-style">
                <div className="container">
                    <div className="row ">




                        <div class="d-flex bd-highlight">
                            <div class="p-2  bd-highlight">2019 MedicaTour. All rights reserved.</div>
                            <div class="ms-auto p-2 bd-highlight"><img className="img-fluid img-last-footer" src={logo} alt="logo" /></div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default FooterComponent
