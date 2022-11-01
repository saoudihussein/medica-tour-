import * as React from "react";
import "./contact.css";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { BsFillInfoCircleFill } from "react-icons/bs";
import Layout from "../layouts/layout";

const ContactPage = () => {
    return (
        <>
            <Layout>

                <div className="container-fluid service pt-5 pb-5">
                    <div className="container intern-page-style">
                        <h1 className="service-title">
                            Contact
                        </h1>

                    </div>
                </div>

                <div className="container-fluid">

                    <div class="container pt-5 mb-5">
                        <div class="row">

                            <div class="col">
                                <div class="row pb-2 contact-icon">
                                    <FaClock size={70} />
                                </div>
                                <div class="row">
                                    <h4 class="text-center">
                                        Lundi - Samedi 08:00 - 21:00 Dimanche - Fermé
                                    </h4>
                                </div>
                            </div>

                            <div class="col">
                                <div class="row pb-2 contact-icon">
                                    <BsFillInfoCircleFill size={70} />
                                </div>
                                <div class="row">
                                    <h5 class="text-center">
                                        <a href="tel:+216 22 543 410" className="link-contact">
                                            <span>
                                                <FaPhoneAlt /> +216 22 543 410
                                            </span>
                                        </a>
                                    </h5>

                                    <h5 class="text-center">
                                        <a href="mailto:Contact@medica-tour.fr" className="link-contact">
                                            <span>
                                                <FaEnvelope /> Contact@medica-tour.fr
                                            </span>
                                        </a>
                                    </h5>
                                </div>
                            </div>


                            <div class="col">
                                <div class="row pb-2 contact-icon">
                                    <FaMapMarkerAlt size={70} />
                                </div>
                                <div class="row">
                                    <h4 class="text-center">
                                        145, RES MAYA "B" - H NOUIRA, BORJ LOUZIR 2073
                                    </h4>
                                </div>
                            </div>


                        </div>
                    </div>


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.0043282857628!2d10.197224299357183!3d36.869144308510364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbd190eb6337%3A0x247fbf54781134c3!2sMedicaTour!5e0!3m2!1sen!2stn!4v1667302644348!5m2!1sen!2stn"
                        allowfullscreen="true"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>



                </div>

            </Layout>
        </>
    )
}

export default ContactPage
