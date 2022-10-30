import * as React from "react";
import dr1 from "../images/dr1.webp"
import dr2 from "../images/dr2.webp"
import dr3 from "../images/dr3.webp"
import dr4 from "../images/dr4.webp"
import dr5 from "../images/dr5.webp"
import dr6 from "../images/dr6.webp"
import { FaFileInvoice } from 'react-icons/fa';
import "./chirurgiens-esthetiques-tunisie.css";
import Layout from "../layouts/layout";
import { Link } from "gatsby";

const ChirurgiensPage = () => {
    return (
        <>
            <Layout>
                <div className="container-fluid service pt-5 pb-5">
                    <div className="container intern-page-style">
                        <h1 className="service-title">
                            Nos Chirurgiens
                        </h1>
                    </div>
                </div>
                <div className="container-fluid cont3-style pb-5 pt-5">
                    <div className="container ">
                        <div className="row">

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div className="card card-dr h-100">
                                    <img src={dr1} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body pb-4">
                                        <h5 className="">Chirurgien de l’obésité
                                            <span className="float-end">
                                                <Link to="#" className="link-cv">
                                                    <FaFileInvoice />
                                                </Link>
                                            </span>
                                        </h5>
                                        <h4 className="mb-2">Dr Mohamed Bourguiba Belgacem</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div className="card card-dr h-100">
                                    <img src={dr2} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body pb-4">
                                        <h5 className="">Chirurgien dentaire
                                            <span className="float-end">
                                                <Link to="#" className="link-cv">
                                                    <FaFileInvoice />
                                                </Link>
                                            </span>
                                        </h5>
                                        <h4 className="mb-2">Dr Jouda Ben Mustapha Sghaier</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div className="card card-dr h-100">
                                    <img src={dr3} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body pb-4">
                                        <h5 className="">Chirurgien esthétique
                                            <span className="float-end">
                                                <Link to="#" className="link-cv">
                                                    <FaFileInvoice />
                                                </Link>
                                            </span>
                                        </h5>
                                        <h4 className=" mb-2">Dr Mohamed ALI ABDELAALI</h4>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div className="card card-dr h-100">
                                    <img src={dr4} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body pb-4">
                                        <h5 className="">Chirurgien esthétique
                                            <span className="float-end">
                                                <Link to="#" className="link-cv">
                                                    <FaFileInvoice />
                                                </Link>
                                            </span>
                                        </h5>
                                        <h4 className="mb-2">Dr Hayathem Helali</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div className="card card-dr h-100">
                                    <img src={dr5} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body pb-4">
                                        <h5 className="">Traitement de l’infertilité
                                            <span className="float-end">
                                                <Link to="#" className="link-cv">
                                                    <FaFileInvoice />
                                                </Link>
                                            </span>
                                        </h5>
                                        <h4 className=" mb-2">Dr Chiheb ben said</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div className="card card-dr h-100">
                                    <img src={dr6} className="card-img-top img-fluid" alt="..." />
                                    <div className="card-body pb-4">
                                        <h5 className="">Médecin esthetique
                                            <span className="float-end">
                                                <Link to="#" className="link-cv">
                                                    <FaFileInvoice />
                                                </Link>
                                            </span>
                                        </h5>
                                        <h4 className="mb-2">Dr Donia Ben Jemia</h4>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="container-fluid  pb-5 pt-2">
                    <div className="container ">
                        <div className="row">

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    Meilleures chirurgiens
                                </span>
                                <br />
                                <span className="h12">
                                    plasticiens en Tunisie
                                </span>
                            </h1>

                            <p className="lead">
                                chirurgiens esthétiques Tunisie
                            </p>
                            <p className="lead">
                                chirurgiens esthétiques Tunisie

                                Medicatour vous dirige vers ces chirurgiens
                                plasticiens, bariatrique et dentaire, les mieux qualifiés,
                                afin de vous garantir des opérations sécurisées et des résultats adéquats et conforme a vos attentes.
                            </p>

                            <p className="lead">
                                Pour toutes vos interventions esthétiques, notre agence de tourisme médicale s’appuie depuis de longues années sur l’expertise de chirurgien de renom.
                            </p>

                            <p className="lead">
                                Aussi, nous vous mettons en relation avec une équipe médicale hautement qualifiée et composée de prestigieux spécialistes et expérimentés en chirurgie esthétique. Cette équipe est triée sur le volet, afin de vous offrir le meilleur traitement possible.
                            </p>

                            <p className="lead">
                                De ce fait, les chirurgiens esthétiques en Tunisie ont prouvé leurs aptitudes à mener à bien les multiples interventions esthétiques complexes. Ils possèdent le don de mettre leurs patients à l’aise et les guider dans leurs choix. En revanche, ils sont en constante évolution en veillant à ameliorer leurs techniques.
                            </p>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ChirurgiensPage
