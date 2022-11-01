import * as React from "react";
import dr1 from "../images/dr1.webp"
import "./dr-profile.css";
import Layout from "../layouts/layout";

const DrProfilePage = () => {
    return (
        <>
            <Layout>
                <div className="container-fluid service pt-5 pb-5">
                    <div className="container intern-page-style">
                        <div className="row">
                            <div className="col-sm-12 col-md-3 text-center">
                                <img className="img-fluid doctor-profile-img" src={dr1} alt="doctor" />
                            </div>

                            <div className="col-sm-12 col-md-8 pt-5">
                                <h1 className="service-title">
                                    Dr. Bourguiba Mohamed Aboulkacem
                                </h1>
                                <p class="service-description pt-3">
                                    Chirurgien de l’obésité
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid pt-5 pb-5">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 mt-3 dr-dip-form">
                                <h3 className="">Diplômes</h3>
                                <ul className="lead">
                                    <li> PAE/EVC épreuves de vérification des connaissances : Paris 2017</li>
                                    <li> Diplôme de la faculté de Strasbourg en chirurgie laparoscopique (Janvier 2015)</li>
                                    <li> Assistant hospitalo-universitaire en chirurgie générale.</li>
                                    <li> Faculté de médecine de Tunis (Juillet 2012)</li>
                                    <ul>
                                        <li> Diplôme de spécialité en chirurgie générale (Mars 2012) </li>
                                        <li> Résident sur concours des hôpitaux de Tunisie (2008 – 2011) </li>
                                        <li> Diplôme d’état de Doctorat en médecine (Novembre 2010) </li>
                                    </ul>

                                </ul>

                                <h3 className="">Formation continue </h3>
                                <ul className="lead">
                                    <li> Participation active au 90ème congrès de l’association des morphologistes.</li>
                                    <li> Bordeaux, France, juin 2008</li>
                                    <li> Bordeaux, France, juin 2008</li>
                                    <li> Participation active au 113ème congrès de l’association Française de chirurgie.</li>
                                    <li> Paris octobre 2011</li>
                                    <li> Diplôme universitaire en Parodontologie Implantologie Orale</li>
                                    <li> Participation aux cours intensifs de L’IRCAD Strasbourg</li>
                                    <li> Participation à intensive courses of the IRCAD Strasbourg</li>
                                    <li> Participation Active à EAES Amsterdam 2016</li>
                                    <li> Participation Active à SAGES Houston 2017</li>
                                    <li> Participation active à EAES Frankfurt 2017 </li>
                                    <li> Masterclass MANAGEMENT OF THE GERD, EAES 2017</li>
                                    <li> Participation Active à SAGES Houston 2017</li>
                                    <li> Active participation to different national congresses since 2008</li>
                                    <li> Stage d’ Observership au department de chirurgie</li>
                                    <li> EAES Sevilla 2019</li>
                                    <li> Masterclass TA-TME FOR RECTAL CANCER</li>
                                    <li> EAES Sevilla 2019</li>
                                    <li> HOPITAL CIVIL DE STARSBOURG 2016 – 2017</li>
                                    <li> Lecture about risk factor of leakage in colorectal surgery 2011</li>
                                </ul>
                            </div>

                            <div className="col-sm-12 col-md-8 mt-3 dr-diplome">

                                <div className="container-fluid  pb-5">
                                    <div className="container ">
                                        <div className="row">

                                            <h1 className="text-center">
                                                <span className="h11">
                                                    Activites
                                                </span>
                                                <br />
                                                <span className="h12">
                                                    pedahogiques
                                                </span>
                                            </h1>
                                            <ul className="lead">
                                                <li>Participation à l’enseignement universitaire à la faculté de médecine de Tunis</li>
                                                <li>Participation à l’élaboration et la correction des examens de chirurgie générale et d’anatomie à la faculté
                                                    de médecine de Tunis depuis 2013</li>
                                                <li>Participation à l’étude docimologique des examens de chirurgie générale depuis 2013</li>
                                                <li>Participation à l’enseignement universitaire paramédical à l’école supérieure de santé</li>
                                                <li>Quinze publications dans des revues indexées déjà faites</li>
                                                <li>Plus d’une douzaine de publications dans des monographies d’études multicentriques tunisienne</li>
                                                <li>Reviewer dans des journaux indexes (BMJ of case report, World Journal of Surgical Oncology…)</li>
                                            </ul>
                                        </div>

                                        <div className="row">

                                            <h1 className="text-center">
                                                <span className="h11">
                                                    International
                                                </span>
                                                <br />
                                                <span className="h12">
                                                    medical societé
                                                </span>
                                            </h1>
                                            <ul className="lead">
                                                <li>Membre de l’Association Tunisienne de chirurgie depuis 2012</li>
                                                <li>Follow, Americain society of surgeons FACS depuis 2018</li>
                                                <li>Membre de European Association of Endoscopic Surgery EAES depuis 2017</li>
                                                <li>Membre de European hernia Society EHS depuis 2017</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default DrProfilePage
