import * as React from "react";
import logo from "../images/logo.webp";
import slide1 from "../images/slide1.webp"
import slide2 from "../images/slide2.webp"
import doctor from "../images/doktorka.png"
import dr1 from "../images/dr1.webp"
import dr2 from "../images/dr2.webp"
import dr3 from "../images/dr3.webp"
import dr4 from "../images/dr4.webp"
import dr5 from "../images/dr5.webp"
import dr6 from "../images/dr6.webp"
import inter1 from "../images/inter1.webp"
import inter2 from "../images/inter2.webp"
import inter3 from "../images/inter3.webp"
import inter4 from "../images/inter4.webp"
import inter5 from "../images/inter5.webp"
import inter6 from "../images/inter6.webp"
import inter7 from "../images/inter7.webp"
import inter8 from "../images/inter8.webp"
import footerImg from "../images/dentalcare-promo-new.png"
import blog1 from "../images/gynecomastie.webp"
import blog2 from "../images/chirurgie-paupiere.webp"
import blog3 from "../images/rhinoplastie-en-tunisie.webp"

import { FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./accueil.css";
import Layout from "../layouts/layout";

const AccueilPage = () => {
    return (
        <>
            <Layout>
                <link href='https://fonts.googleapis.com/css?family=Bree Serif' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' />
                <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src={slide1} class="d-block w-100 img-carousel" alt="..." />
                            <div class="carousel-caption mt-5">
                                <h1 className="text-start carousel-title">
                                    SOYEZ CELLE OU CELUI QUE VOUS VOULEZ ÊTRE
                                </h1>
                                <p className="text-start">
                                    Avec MedicaTour profitez d’un séjour médical tout compris en toute quiétude .
                                </p>

                                <p className="text-start">
                                    <span className="our-chur"><button type="button" class="btn btn-bt btn-sec-color">Nos tarifs</button></span>
                                    <span className="free-devis"><button type="button" class="btn btn-bt free-devis btn-prim-color">Devis gratuit</button></span>
                                </p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="10000">
                            <img src={slide2} class="d-block w-100 img-carousel" alt="..." />
                            <div class="carousel-caption mt-5">
                                <h1 className="text-start carousel-title">
                                    VOTRE SANTÉ EST NOTRE PRIORITÉ
                                </h1>
                                <p className="text-start">
                                    Grâce à son réseau de professionnels, MedicaTour vous offre un accompagnement personnalisé et une équipe médicale des plus compétentes pour vous offrir des soins à la hauteur de vos attentes
                                </p>

                                <p className="text-start">
                                    <span className="our-chur"><button type="button" class="btn btn-bt btn-prim-color">Nos chirurgiens</button></span>
                                    <span className="free-devis"><button type="button" class="free-devis btn btn-bt btn-sec-color">Devis gratuit</button></span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="container-fluid cont2-style">
                    <div class="container d-none d-sm-none d-md-block">
                        <div className="row">
                            <div className="col-xs-12 col-md-3 pt-5 pb-5 " style={{ backgroundColor: "rgba(0, 179, 204, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                            <div className="col-xs-12 col-md-3 pt-5 pb-5" style={{ backgroundColor: "rgba(0, 161, 190, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                            <div className="col-xs-12 col-md-3 pt-5 pb-5" style={{ backgroundColor: "rgba(0, 135, 170, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                            <div className="col-xs-12 col-md-3 pt-5 pb-5" style={{ backgroundColor: "rgba(0, 109, 149, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                        </div>
                    </div>

                    <div class="d-sm-block d-md-none">
                        <div className="row">
                            <div className="col-xs-12 col-md-3 pt-5 pb-5 " style={{ backgroundColor: "rgba(0, 179, 204, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                            <div className="col-xs-12 col-md-3 pt-5 pb-5" style={{ backgroundColor: "rgba(0, 161, 190, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                            <div className="col-xs-12 col-md-3 pt-5 pb-5" style={{ backgroundColor: "rgba(0, 135, 170, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                            <div className="col-xs-12 col-md-3 pt-5 pb-5" style={{ backgroundColor: "rgba(0, 109, 149, 1)", textAlign: "center" }}>
                                <h4 className="btSubTitle">Best dental surgeons</h4>
                                <p className="btSubText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis semper felis.</p>
                                <button type="button" class="btn btn-bt">Read more</button>
                            </div>

                        </div>
                    </div>





                    <div class="container">
                        <div className="row mt-5">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="section2-title">
                                    Chirurgie esthétique en Tunisie
                                </h2>

                                <div class="btSubTitle2">MedicaTour est une agence de
                                    chirurgie esthétique en Tunisie qui vous offre un séjour
                                    médical tout compris répondant à vos besoins.
                                    Pareillement, nous proposons des services d’assistance
                                    médicale et logistique en vue de proposer des solutions
                                    sûres et optimisées dans les domaines suivants:

                                    <div class="row">
                                        <div class="col-12">
                                            <li>CHIRURGIE ESTHÉTIQUE</li>
                                            <li>CHIRURGIE DU VISAGE</li>
                                            <li>SOINS DENTAIRES</li>
                                            <li>OPERATION BARIATRIQUE ET OBÉSITÉ</li>
                                            <li>TRAITEMENT DE L’INFERTILITÉ</li>
                                            <li>CHIRURGIE INTIME</li>
                                            <li>ET PLUS ENCORE…</li>
                                        </div>
                                        <br />

                                        La chirurgie plastique en Tunisie peut résoudre les
                                        imperfections, rétablir la tension de la peau après
                                        l’accouchement ou l’âge, ou encore corriger les
                                        résultats d’une intervention chirurgicale
                                        antérieure. Ainsi, nous offrons des prestations de
                                        qualité pour toute chirurgie plastique, au meilleur
                                        prix.
                                    </div>
                                    <button type="button" class="btn btn-sec2 mt-3">Devis gratuit</button>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <img className="img-fluid doctor-img" src={doctor} alt="doctor" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid cont3-style pb-5 pt-5">
                    <div class="container ">
                        <div className="row">

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div class="card card-dr h-100">
                                    <img src={dr1} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body pb-4">
                                        <h5 class="">Chirurgien de l’obésité</h5>
                                        <h4 class="mb-2">Dr Mohamed Bourguiba Belgacem</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div class="card card-dr h-100">
                                    <img src={dr2} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body pb-4">
                                        <h5 class="">Chirurgien dentaire</h5>
                                        <h4 class="mb-2">Dr Jouda Ben Mustapha Sghaier</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div class="card card-dr h-100">
                                    <img src={dr3} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body pb-4">
                                        <h5 class="">Chirurgien esthétique</h5>
                                        <h4 class=" mb-2">Dr Mohamed ALI ABDELAALI</h4>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div class="card card-dr h-100">
                                    <img src={dr4} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body pb-4">
                                        <h5 class="">Chirurgien esthétique</h5>
                                        <h4 class="mb-2">Dr Hayathem Helali</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div class="card card-dr h-100">
                                    <img src={dr5} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body pb-4">
                                        <h5 class="">Traitement de l’infertilité</h5>
                                        <h4 class=" mb-2">Dr Chiheb ben said</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-4 mt-3">
                                <div class="card card-dr h-100">
                                    <img src={dr6} class="card-img-top img-fluid" alt="..." />
                                    <div class="card-body pb-4">
                                        <h5 class="">Médecin esthetique</h5>
                                        <h4 class="mb-2">Dr Donia Ben Jemia</h4>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                <div className="container-fluid  pb-5 pt-5">
                    <div class="container ">
                        <div className="row">

                            <p class="lead">
                                Afin de vous prodiguer les meilleurs soins,
                                MedicaTour collabore avec les chirurgiens les
                                plus qualifiés. Nous collaborons également avec
                                les établissements médicaux à la pointe de la technologie
                                et conformes aux normes internationales. Nous vous offrons
                                aussi des conseils et orientations dans votre choix du type
                                d’intervention de chirurgie esthétique, tout au long de votre
                                séjour esthétique en Tunisie.
                            </p>

                            <p class="lead">
                                Si vous désirez sauter le pas et vous offrir une chirurgie esthétique en Tunisie, avec une clinique fiable, proposant des prestations de très bonne facture à des tarifs avantageux.
                                Alors MedicaTour est la clinique qui satisfera tous vos besoins.
                            </p>

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    Chirurgie esthétique en Tunisie
                                </span>
                                <br />
                                <span className="h12">
                                    Comment réserver mon intervention chirurgicale et les démarches à suivre
                                </span>
                            </h1>

                            <ul class="lead">
                                <li> Tout d’abord veuillez remplir le formulaire de demande de
                                    devis à MedicaTour. Vous pouvez cliquez sur le bouton
                                    ci-dessous afin de procéder à cette première étape</li>
                                <li>Un conseiller prendra alors en charge votre demande. Après
                                    une première prise de contact, votre conseiller vous
                                    demandera quelques informations : le type d’intervention
                                    demandé, ainsi que quelques questions générales sur votre
                                    état de santé. Selon les cas, des photos seront nécessaires
                                    pour votre dossier. Lorsque votre dossier est prêt, notre
                                    conseiller se charge de le transmettre au chirurgien afin
                                    qu’il puisse établir un premier diagnostic</li>
                                <li>Après ce premier diagnostic, nous vous transmettons un devis
                                    préliminaire</li>
                                <li>Après examen et vérification de votre dossier médical par le
                                    chirurgien, nous organisons l’intervention. Notre
                                    conseiller, selon les disponibilités du chirurgien, vous
                                    contactera pour décider des dates d’arrivée et de votre
                                    chirurgie</li>
                                <li>Votre conseiller vous communiquera alors votre devis final
                                </li>
                                <li>À votre arrivée en Tunisie, MedicaTour s’occupe de vous
                                    accueillir, ainsi que votre transfert depuis l’aéroport vers
                                    votre hôtel. Nous assurons également votre transport depuis
                                    l’hôtel vers la clinique. Aussi bien pour la consultation
                                    préopératoire, le jour de l’intervention et la consultation
                                    post-opératoire</li>
                                <li>Un conseiller sera également à votre disposition durant
                                    toute la période de votre convalescence. Nous pouvons
                                    également mettre à disposition une aide-soignante si
                                    nécessaire</li>
                                <li>Enfin les équipes de MedicaTour assurent votre transfert de
                                    l’hôtel vers l’aéroport le jour de votre départ</li>
                            </ul>

                        </div>
                    </div>
                </div>


                <div className="container-fluid pb-2">
                    <div class="container ">
                        <div className="row">

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    VOTRE SÉJOUR DE CHIRURGIE
                                </span>
                                <br />
                                <span className="h12">
                                    ESTHETIQUE EN TUNISIE
                                </span>
                            </h1>

                            <div className="row sej-style">
                                <div className="col-md-6 col-sm-12 sej-1">

                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 pt-4">
                                            <img className="img fluid pic-sej" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-4.jpg" alt="" />
                                        </div>

                                        <div className="col-md-9 col-sm-12 pt-5">
                                            <p className="lead sej-text">
                                                Une offre extrêmement avantageuse: Ainsi, MedicaTour offre à ses patients
                                                le meilleur service de chirurgie esthétique en Tunisie avec des tarifs pouvant
                                                être jusqu’à 50% moins cher qu’en Europe. Donc, MedicaTour met à votre disposition
                                                un séjour esthétique de luxe, à un tarif avantageux
                                                tout en vous assurant une équipe médicale à la pointe.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6 col-sm-12 sej-2">

                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 pt-4">
                                            <img className="img fluid pic-sej" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-2.jpg" alt="" />
                                        </div>

                                        <div className="col-md-9 col-sm-12 pt-5">
                                            <p className="lead sej-text">
                                                Une offre extrêmement avantageuse: Ainsi, MedicaTour offre à ses patients le meilleur
                                                service de chirurgie esthétique en Tunisie avec des tarifs pouvant être jusqu’à 50% moins
                                                cher qu’en Europe. Donc, MedicaTour met à votre disposition un séjour esthétique de
                                                luxe, à un tarif avantageux tout en vous assurant une équipe médicale à la pointe.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="row sej-style">
                                <div className="col-md-6 col-sm-12 sej-3">

                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 pt-4">
                                            <img className="img fluid pic-sej" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-5.jpg" alt="" />
                                        </div>

                                        <div className="col-md-9 col-sm-12 pt-5">
                                            <p className="lead sej-text">
                                                <ul>
                                                    <li>Remplissez le formulaire de devis
                                                    </li>
                                                    <li>Après le traitement de votre dossier
                                                        médical détaillé, nous vous envoyons
                                                        un devis personnalisé</li>
                                                    <li>Un mail contenant le planning de
                                                        votre séjour esthétique en Tunisie
                                                        vous sera envoyé après avoir fixé un
                                                        rendez-vous avec le chirurgien selon
                                                        vos disponibilités.</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-md-6 col-sm-12 sej-4">

                                    <div className="row">
                                        <div className="col-md-3 col-sm-12 pt-4">
                                            <img className="img fluid pic-sej" src="http://medicare.bold-themes.com/dentist/wp-content/uploads/sites/3/2015/12/people-1.jpg" alt="" />
                                        </div>

                                        <div className="col-md-9 col-sm-12 pt-5">
                                            <p className="lead sej-text">
                                                <ul>
                                                    <li>Une consultation pré-opératoire
                                                        s’impose. Vous pouvez poser toutes
                                                        les questions et vous aurez par la
                                                        suite.</li>
                                                    <li>Votre opération de chirurgie
                                                        esthétique se déroulera le lendemain
                                                        de votre arrivée ou lors de la date
                                                        fixée au préalable</li>
                                                    <li>Après l’intervention, notre équipe
                                                        sera aux petits soins afin de vous
                                                        accompagner.</li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="container-fluid  pb-5 pt-2">
                    <div class="container ">
                        <div className="row">

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    MedicaTour votre partenaire
                                </span>
                                <br />
                                <span className="h12">
                                    privilégié de chirurgie esthétique en Tunisie.
                                </span>
                            </h1>

                            <p class="lead">
                                Des soins prodigués par la médecine esthétique
                                aux interventions chirurgicales, nous offrons
                                une panoplie complète de services. Notre objectif
                                est de vous permettre d’atteindre le bien-être,
                                rajeunissement ou embellissement que vous recherchez.
                                Nous tenons à offrir les meilleurs soins et satisfaire
                                les attentes de nos patients. Nous proposons des prestations
                                chirurgicales de qualité, à l’aide de nos chirurgiens
                                renommés. Spécialiste de la chirurgie esthétique en Tunisie,
                                MedicaTour offre une gamme complète d’interventions esthétiques
                                : de la chirurgie du visage au remodelage de votre silhouette,
                                en passant par la chirurgie intime ou la greffe de cheveux.
                                Nous nous engageons à vous accompagner et vous garantir le
                                meilleur séjour esthétique en Tunisie possible.
                            </p>

                            <p class="lead">
                                Depuis près d’une dizaine d’années, la Tunisie se positionne en tant
                                qu’acteur majeur du tourisme médical. En effet, la Tunisie accueille
                                un nombre croissant d’étrangers ayant choisi cette destination pour
                                leur chirurgie esthétique. Cela s’explique notamment par des conditions
                                sanitaires strictes, des services médicaux développés et des compétences
                                reconnues à l’échelle internationale.
                            </p>

                        </div>
                    </div>
                </div>

                {/* free devis block */}
                <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                    <div class="container pt-4">

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-12 col-md-6 text-center">
                                <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                            </div>

                            <div className="col-sm-12 col-md-6 text-center">
                                <a href="#" class="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</a>
                                <a href="#" class="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid  pb-5 pt-2">
                    <div class="container ">
                        <div className="row">

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    La chirurgie esthétique
                                </span>
                                <br />
                                <span className="h12">
                                    en Tunisie : Pour qui ?
                                </span>
                            </h1>

                            <p class="lead">
                                Recourir à une intervention chirurgicale esthétique peut venir de besoins
                                variés. Ils peuvent être purement esthétiques, mais aussi pour des raisons
                                thérapeutiques.
                            </p>


                            <ul class="lead">
                                <li>Votre intervention de chirurgie esthétique peut viser à
                                    corriger ou embellir votre apparence physique. Ces patients
                                    sont à la recherche d’une intervention purement esthétique.
                                    Ils désirent un rajeunissement, corriger une imperfection,
                                    ou embellir une ou plusieurs zones de leur physique.</li>
                                <li>D’autre part, une chirurgie réparatrice a des vertus
                                    thérapeuthiques. Elle peut permettre la correction d’une
                                    malformation, ou encore réparer des cicatrices. Ces patients
                                    visent à retrouver leur intégrité physique. Aussi bien après
                                    le traitement d’une malformation, le retrait d’une tumeur,
                                    ou toute intervention laissant des séquelles visibles.</li>
                            </ul>




                            <p class="lead">
                                Quelle que soit vos motivations pour recourir à une opération de chirurgie esthétique
                                en Tunisie, elle vous permet d’améliorer votre confort.
                            </p>

                            <p class="lead">
                                Avec son climat et une offre touristique de qualité , la Tunisie est devenue une destination
                                incontournable du tourisme médical. En effet, La Tunisie est la deuxième destination du continent,
                                avec près de 500 000 patients traités en 2018. Sa position géographique avantageuse et sa qualité
                                de soins à prix avantageux, en fait donc une destination de choix.
                            </p>




                        </div>
                    </div>
                </div>

                {/* free devis block */}
                <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                    <div class="container pt-4">

                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-12 col-md-6 text-center">
                                <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                            </div>

                            <div className="col-sm-12 col-md-6 text-center">
                                <a href="#" class="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</a>
                                <a href="#" class="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container-fluid  pb-5 pt-2">
                    <div class="container ">
                        <div className="row sej-style">

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    Nos
                                </span>
                                <br />
                                <span className="h12">
                                    INTERVENTIONS
                                </span>
                            </h1>

                            <div className="row mt-2">
                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter1} class="card-img-top img-fluid" alt="Chirurgie mammaire" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Chirurgie mammaire</h5>
                                            <p class="card-text">La chirurgie mammaire est une procédure chirurgicale esthétique ou reconstructive. Le but de cette intervention permet d’ augmenter le volume de la poitrine, de remodeler sa forme, ou enfin d’améliorer la sensation de la poitrine. Elle peut aussi être reconstructive, notamment dans le cas d’une mastectomie (ablation) À partir de</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter2} class="card-img-top img-fluid" alt="Chirurgie de la silhouette" />
                                        <div class="card-body w-100">
                                            <h6 class="card-title inter-title">Chirurgie de la silhouette</h6>
                                            <p class="card-text">
                                                La chirurgie de la silhouette est une intervention chirurgicale esthétique ou reconstructive. Cette chirurgie du corps, permet de redonner à la silhouette des proportions harmonieuses, perdues ou non existantes. Pour ce faire, le chirurgien joue sur les contours du corps: ventre, fesses, bras… À partir de 1700 €
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter3} class="card-img-top img-fluid" alt="Intervention esthétique du visage" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Intervention esthétique du visage</h5>
                                            <p class="card-text">
                                                La chirurgie du visage est une procédure chirurgicale permettant de corriger certaines imperfections. C’est également un moyen d’estomper le vieillissement du visage. Les procédures sont multiples, et permettent de contrer de nombreux aspects disgracieux. La chirurgie du visage s’adresse aux patients
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter4} class="card-img-top img-fluid" alt="Traitement de l’infertilité (PMA)" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Traitement de l’infertilité (PMA)</h5>
                                            <p class="card-text">
                                                Les techniques et pratiques médicales permettant de traiter l’infertilité, sont également appelées PMA (procréation médicalement assistée). La procréation médicalement assistée désigne les solutions thérapeutiques, cliniques et biologiques, tous sexes confondus. MedicaTour propose l’insémination
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row mt-2">
                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter5} class="card-img-top img-fluid" alt="Chirurgie de l’obésité" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Chirurgie de l’obésité</h5>
                                            <p class="card-text">
                                                Les techniques et pratiques médicales permettant de traiter l’infertilité, sont également appelées PMA (procréation médicalement assistée). La procréation médicalement assistée désigne les solutions thérapeutiques, cliniques et biologiques,
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter6} class="card-img-top img-fluid" alt="Greffe poils et cheveux" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Greffe poils et cheveux</h5>
                                            <p class="card-text">
                                                La greffe capillaire est une technique chirurgicale permettant de traiter une calvitie, un manque de poils de la barbe ou des sourcils. Ces procédures sont l’évolution de la procédure de greffe capillaire FUE étendant la zone donneuse au corps entier.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter7} class="card-img-top img-fluid" alt="Chirugie dentaire" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Chirugie dentaire</h5>
                                            <p class="card-text">
                                                Un beau sourire est l’une des premières choses que l’on remarque chez une personne! c’est souvent synonyme de rayonnement et d’assurance que tout le monde cherche à avoir. Donc, pour obtenir ce privilège, MedicaTour, vous propose une offre
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-3">
                                    <div class="card" >
                                        <img src={inter8} class="card-img-top img-fluid" alt="Chirugie Esthétique de l’intimité" />
                                        <div class="card-body w-100">
                                            <h5 class="card-title inter-title">Chirugie Esthétique de l’intimité</h5>
                                            <p class="card-text">
                                                La chirurgie esthétique de l’intimité consiste à remodeler les lèvres, la vulve ou le pénis. Certaines personnes choisissent cette chirurgie parce qu’elles ne sont pas satisfaites de l’apparence de leurs organes génitaux. Une opération visant à
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="container-fluid contact-gen-style pt-2">
                    <div className="container">

                        <div className="contact-bloc col-sm-5 col-md-4 pb-3 mt-5 pt-5">
                            <h3 className="w-25"><span class="headline">HEURES
                                D'OUVERTURE</span>
                            </h3>

                            <p>Lundi - Samedi 08:00 - 21:00</p>
                            <hr className="hr-contact" />
                            <p>Dimanche - Fermé</p>

                            <h3 className=""><span class="headline">
                                Contactez-nous
                            </span>
                            </h3>

                            <p className="w-75">145, RES MAYA "B" - H NOUIRA, BORJ LOUZIR 2073</p>

                            <p><a href="tel:+216 22 543 410">
                                <span>
                                    <FaPhoneAlt /> +216 22 543 410
                                </span>
                            </a></p>
                            <p><a href="mailto:Contact@medica-tour.fr">
                                <span>
                                    <FaRegEnvelope /> Contact@medica-tour.fr
                                </span>
                            </a></p>
                        </div>






                    </div>
                </div>

                <div className="container-fluid  pb-5 pt-2">
                    <div class="container ">
                        <div className="row">

                            <h1 className="text-center mt-5 pt-5">
                                <span className="h11">
                                    Les meilleurs chirurgiens
                                </span>
                                <br />
                                <span className="h12">
                                    esthétiques en Tunisie
                                </span>
                            </h1>

                            <p class="lead">
                                Nous sommes une clinique de tourisme médical facilitant votre séjour de chirurgie esthétique en Tunisie. Nos services comprennent:<br />
                                -L’organisation de votre séjour esthétique<br />
                                -L’accompagnement tout au long des différentes étapes de votre intervention<br />
                                -La mise en relation avec le chirurgien idéal pour votre intervention<br />
                                Afin de vous faire bénéficier de la meilleure expertise du pays, MedicaTour s’assure de travailler avec les meilleurs chirurgiens tunisiens. Cela nous permet de garantir à nos patients la qualité de nos prestations chirurgicales. Nos chirurgiens sont choisis suite à un processus de sélection basé sur :
                            </p>


                            <ul class="lead">
                                <li>Une revue approfondie de leur carrière</li>
                                <li>La qualité de leurs interventions</li>
                            </ul>

                            <p class="lead">
                                Forts de leur longue expérience, nos chirurgiens offrent les meilleurs traitements pour chaque patient.
                            </p>




                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}

export default AccueilPage
