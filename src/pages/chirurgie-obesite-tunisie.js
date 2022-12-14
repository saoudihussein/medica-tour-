import * as React from "react";
import sleeveGastrectomie from "../images/sleeve-gastrectomie.webp"
import byPassGastrique from "../images/by-pass-gastrique.webp"
import anneauGastrique from "../images/anneau-gastrique.webp"
import ballonGastrique from "../images/ballon-gastrique.png"
import chirurgieObesite from "../images/chirurgie-obesite.webp"

import { FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./chirurgie-obesite-tunisie.css";
import Layout from "../layouts/layout";

const ChurigPage = () => {
    return (
        <Layout>
            <div className="container-fluid service pt-5 pb-5">
                <div className="container">
                    <h1 className="service-title">
                        Chirurgie bariatrique
                    </h1>
                    <p className="service-description pt-3">
                        Quisque eget sem urna. Donec at vestibulum nibh, non bibendum est.
                        Curabitur eget tincidunt eros.
                    </p>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12 col-md-3">
                        <div class="card" >
                            <img src={sleeveGastrectomie} class="card-img-top img-fluid" alt="Sleeve gastrique" />
                            <div class="card-body w-100">
                                <h5 class="card-title inter-title">Sleeve gastrique</h5>
                                <p class="card-text">
                                    La sleeve gastrectomie en Tunisie est une intervention qui sert à réduire la taille de l’estomac. On
                                    effectue une ablation du 2/3 de son volume. Cette technique est la plus utilisée aujourd’hui
                                    puisqu’elle permet une perte de poids très importante.
                                </p>
                                <a href="#" class="btn btn-success">En savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <div class="card" >
                            <img src={byPassGastrique} class="card-img-top img-fluid" alt="Bypass gastrique" />
                            <div class="card-body w-100">
                                <h5 class="card-title inter-title">Bypass gastrique</h5>
                                <p class="card-text">
                                    Une Bypass gastrique en Tunisie permet une perte de poids entre 35 kg et 80 kg*. Elle consiste à
                                    court-circuiter une grande partie de l’estomac en le réduisant à une petite poche. Un court-circuit
                                    d’une partie de l’estomac avec la partie moyenne de l’intestin grêle permet
                                </p>
                                <a href="#" class="btn btn-success">En savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <div class="card" >
                            <img src={ballonGastrique} class="card-img-top img-fluid" alt="sleeve-gastrectomie.webp" />
                            <div class="card-body w-100">
                                <h5 class="card-title inter-title">Ballon gastrique</h5>
                                <p class="card-text">
                                    La procédure du ballon gastrique est un nouveau système de perte de poids qui vise à réduire la quantité de nourriture ingérée lors d’un repas
                                    et à augmenter la sensation d’être rassasié plus longtemps après n’avoir mangé que de petits repas.
                                </p>
                                <a href="#" class="btn btn-success">En savoir plus</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3">
                        <div class="card" >
                            <img src={anneauGastrique} class="card-img-top img-fluid" alt="Anneau gastrique" />
                            <div class="card-body w-100">
                                <h5 class="card-title inter-title">Anneau gastrique</h5>
                                <p class="card-text">
                                    La procédure du ballon gastrique est un nouveau système de perte de poids qui vise à réduire la quantité de nourriture ingérée lors d’un repas et à augmenter
                                    la sensation d’être rassasié plus longtemps après n’avoir mangé que de petits repas.
                                </p>
                                <a href="#" class="btn btn-success">En savoir plus</a>
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
                                Chirurgie obésité
                            </span>
                            <br />
                            <span className="h12">
                                en Tunisie (Bariatrique)
                            </span>
                        </h1>

                        <div className="row">
                            <div className="col-sm-12 col-md-9">
                                <p class="lead">
                                    La chirurgie bariatrique (aussi appelée chirurgie de la perte de poids)
                                    fait partie d’un programme multidisciplinaire qui comprend une alimentation
                                    saine, de l’exercice physique et le traitement d’affections telles que le
                                    diabète de type 2 ou les maladies thyroïdiennes.
                                </p>

                                <p class="lead">
                                    Il existe plusieurs types de chirurgie bariatrique – pontage gastrique, anneau gastrique et autres –
                                    qui ont tous le même objectif final : réduire la quantité de nourriture que votre corps peut absorber
                                    afin de favoriser la perte de poids. La chirurgie bariatrique est une procédure médicale majeure
                                    utilisée pour vous aider à éviter les complications de santé liées à l’obésité, et non pour des raisons esthétiques.
                                </p>

                                <p class="lead">
                                    La chirurgie d’obésité en Tunisie permet de lutter contre
                                    le surpoids pour les personnes présentant une forte surcharge pondérale.
                                </p>
                            </div>

                            <div className="col-sm-12 col-md-3">
                                <img loading="lazy" class="img-fluid"
                                    src={chirurgieObesite}
                                    alt="chirurgie obesite" width="300" height="200" />
                            </div>

                            <p class="lead">
                                On parle d’obésité importante : c’est-à-dire une IMC supérieur ou égal à 35 kg/m² ou une obésité sévère : soit un IMC supérieur ou égal à 45 kg/m².

                                En effet, l’obésité se définit comme accumulation excessive de graisse dans votre organisme, ce qui représente un grand risque pour la santé.

                                De ce fait, elle représente le facteur de risque majeur pour certaines maladies chroniques tel que : le diabète, les maladies cardio-vasculaires…

                                L’idée principale de la chirurgie obésité en Tunisie est de réduire la quantité de nourriture que l’estomac peut comporter.
                            </p>

                        </div>


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
                                La chirurgie de l’obésité est le moyen le plus efficace
                            </span>
                            <br />
                            <span className="h12">
                                pour réaliser une perte de poids importante et durable.
                            </span>
                        </h1>

                        <p class="lead">
                            En effet, ces termes reflètent l’impact de ces opérations sur le poids des patients et la santé de leur métabolisme (transformation des aliments en énergie). L’exercice physique et le régime alimentaire ne suffisent pas à traiter efficacement les personnes souffrant d’obésité extrême et excessive.

                            En plus de leur capacité à traiter l’obésité, ces opérations traitent efficacement le diabète, l’hypertension artérielle, l’apnée du sommeil et l’hypercholestérolémie, parmi de nombreuses autres maladies.

                            Ces opérations permettent également de prévenir des problèmes de santé futurs. Ces avantages permettent aux patients souffrant d’obésité choisissant de se faire traiter, de bénéficier d’une meilleure qualité de vie et d’une durée de vie plus longue.
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
        </Layout>
    )
}

export default ChurigPage
