import * as React from "react";
import footerImg from "../images/dentalcare-promo-new.png"

import { FaPhoneAlt, FaRegEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import "./sleeve.css";
import Layout from "../layouts/layout";
import { Link } from "gatsby";

const SleevePage = () => {
    return (
        <Layout>
            <div className="container-fluid service pt-5 pb-5">
                <div className="container intern-page-style">
                    <h1 className="service-title">
                        Sleeve gastrique
                    </h1>
                </div>
            </div>


            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Sleeve gastrique
                            </span>
                            <br />
                            <span className="h12">
                                en Tunisie
                            </span>
                        </h1>

                        <p className="lead">
                            L’opération de sleeve gastrique en Tunisie ou gastrectomie longitudinale est une intervention bariatrique de plus en plus pratiquée pour le traitement chirurgical de l’obésité morbide. En Tunisie elle se situe actuellement au deuxième rang après le bypass gastrique.

                            L’opération sleeve gastrectomie en Tunisie consiste à prélever les deux tiers de l’estomac avec un dispositif d’agrafage. Cela peut être fait par laparoscopie (chirurgie en trou de serrure). Cette technique n’est pas réversible.

                            Le chirurgien laisse essentiellement un tube d’estomac au lieu d’un sac d’estomac.
                        </p>
                    </div>
                </div>
            </div>



            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Comment fonctionne
                            </span>
                            <br />
                            <span className="h12">
                                la sleeve gastrique?
                            </span>
                        </h1>

                        <p className="lead">
                            La sleeve gastrectomie (réduction estomac) facilite non seulement la perte de poids sainement en réduisant la taille, mais aussi la forme de l’estomac.

                            Au fil du temps, avec une consommation excessive de nourriture, l’estomac s’étire sur une trop grande taille. Cela peut donc laisser les patients incapables de se sentir satisfaits, même après avoir mangé de gros repas riches en calories.

                            Or, la chirurgie de la sleeve gastrique corrige cela en retirant une partie de l’estomac et en minimisant ensuite la production d’hormones induisant la faim sécrétées par les tissus de l’estomac. Chez la plupart des patients, l’estomac postopératoire représente environ 20% à 25% de sa taille initiale.

                            Pendant cette opération :
                        </p>

                        <ul className="lead">
                            <li>Votre chirurgien pratique 2 à 5 petites coupures (incisions) dans votre ventre.</li>
                            <li>La caméra et les instruments nécessaires à l’opération sont introduits par ces incisions. La caméra est reliée à un moniteur vidéo dans la salle d’opération. Cela permet au chirurgien de voir l’intérieur de votre ventre pendant l’opération.</li>
                            <li>Un gaz inoffensif est injecté dans le ventre pour le dilater. Cela donne au chirurgien de la place pour travailler.</li>
                            <li>Votre chirurgien enlève la plus grande partie de votre estomac.</li>
                            <li>Les parties restantes de votre estomac sont réunies à l’aide d’agrafes chirurgicales. Cela crée un long tube vertical ou un estomac en forme de banane.</li>
                            <li>L’opération n’implique pas de couper ou de modifier les muscles sphincters qui permettent aux aliments d’entrer ou de sortir de l’estomac.</li>
                            <li>La lunette et les autres outils sont retirés. Les coupures sont fermées par des points de suture.</li>
                        </ul>

                        <p className="lead">
                            La sleeve gastrectomie ou encore sleeve gastrique préserve le pylore, la valve qui régule la vidange de l’estomac. Cela procure aux patients une sensation de satiété après avoir consommé des quantités relativement faibles de nourriture, entraînant donc une réduction spectaculaire de l’apport calorique total du patient.
                        </p>
                    </div>
                </div>
            </div>

            {/* free devis block */}
            <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                <div className="container pt-4">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-6 text-center">
                            <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center">
                            <Link to="#" className="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                            <Link to="#" className="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Prix sleeve gastrique
                            </span>
                            <br />
                            <span className="h12">
                                en Tunisie
                            </span>
                        </h1>

                        <p className="lead">
                            La sleeve gastrectomie en Tunisie est une excellente opportunité financière comme le démontre le tableau de prix ci-dessous.
                        </p>
                        <table className="table table-bordered border-primary">
                            <thead>
                                <tr>
                                    <th scope="col">Intervention</th>
                                    <th scope="col">PRIX</th>
                                    <th scope="col">SÉJOUR</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sleeve gastrique Tunisie</td>
                                    <td>3950€</td>
                                    <td>4nuits/5jours</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="lead">
                            Le prix inclut d’autres avantages comme:
                        </p>

                        <ul className="lead">
                            <li>L’accueil dès votre arrivée à l’aéroport</li>
                            <li>La prise en charge intégrale à la clinique</li>
                            <li>Les honoraires du chirurgien et de l’anesthésiste</li>
                            <li>L’hébergement dans un hôtel 5 étoiles</li>
                            <li>Le suivi médical avant et après l’intervention sleeve gastrique</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* free devis block */}
            <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                <div className="container pt-4">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-6 text-center">
                            <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center">
                            <Link to="#" className="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                            <Link to="#" className="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Sleeve Tunisie :
                            </span>
                            <br />
                            <span className="h12">
                                candidats concernés
                            </span>
                        </h1>

                        <p className="lead">
                            L’opération sleeve est une chirurgie bariatrique recommandée pour les patients qui présentent les caractéristiques suivantes :
                        </p>

                        <ul>
                            <li>En premier lieu, l’obésité morbide : IMC (indice de masse corporelle) supérieure à 35 kg/m2</li>
                            <li>En second lieu, si l’imc supérieure a 35kg/m2 associé à :
                                <ul className="lead">
                                    <li>Hyper tension artérielle(HTA)</li>
                                    <li>Maladie du foie secondaire à l’obésité, tel que la stéatose hépatique non alcoolique</li>
                                    <li>Maladie ostéo-articulaires invalidantes</li>
                                    <li>Une apnée du sommeil, troubles respiratoires sévères</li>
                                    <li>Un diabète de type 2 non compliqué</li>
                                    <li>Une hyperphagie (trouble du comportement alimentaire)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

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
                            <img className="img-fluid" src={footerImg} alt="img" />
                        </div>

                        <div className="col-sm-12 col-md-2">
                            <span className="footer-bloc-1-title ">Suivez-nous</span>

                            <div className="row">


                                <div className=" col-4">
                                    <p className="footer-bloc-1-text mt-3 ">
                                        <a href="https://www.facebook.com/Medicatour.fr" target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                                    </p>
                                </div>

                                <div className="col-4">
                                    <p className="footer-bloc-1-text mt-3">
                                        <a href="https://www.linkedin.com/company/medica-tour-fr/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                    </p>
                                </div>

                                <div className="col-4">
                                    <p className="footer-bloc-1-text mt-3">
                                        <a href="https://www.instagram.com/medicatour.fr/?hl=fr" target="_blank" rel="noreferrer"> <FaInstagram /></a>
                                    </p>
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
                                Intervention sleeve :
                            </span>
                            <br />
                            <span className="h12">
                                déroulement
                            </span>
                        </h1>

                        <p className="lead">
                            Effectuée sous anesthésie générale et par cœlioscopie,
                            le praticien procède aux étapes suivantes pour effectuer
                            l’intervention de sleeve gastrectomie en Tunisie qui dure en moyenne 1h30 à 2h :
                        </p>

                        <div className="row">
                            <div className="col p-5 lead"><span style={{ fontSize: "30px", color: "rgb(6, 185, 210)", marginRight: "20px;" }}>1</span>&nbsp;
                                Pour commencer, on réalise 5 incisions (5 à 15 mm) dans la partie supérieure de l’abdomen,
                                Ensuite on insère une caméra connectée à un moniteur vidéo et une pince d’agrafages.
                            </div>

                            <div className="col p-5 lead"><span style={{ fontSize: "30px", color: "rgb(6, 185, 210)", marginRight: "20px;" }}>2</span>&nbsp;
                                Par la suite, le chirurgien effectue une ablation des 2/3 de l’estomac du patient. Il forme ainsi un tube entre l’œsophage et l’antre gastrique
                                afin de permettre ultérieurement l’évacuation rapide des aliments dans l’intestin grêle
                            </div>

                            <div className="col p-5 lead"><span style={{ fontSize: "30px", color: "rgb(6, 185, 210)", marginRight: "20px;" }}>3</span>&nbsp;
                                En dernier lieu, une légère incision (moins de 10 cm) sera réalisée pour sortir le segment d’estomac coupé.
                            </div>
                        </div>

                        <p className="lead">
                            Si vous fumez, vous devez arrêter plusieurs semaines avant l’opération et ne pas recommencer à fumer après l’opération. Fumer ralentit le rétablissement
                            et augmente le risque de problèmes. Demandez à votre prestataire de soins de vous aider à arrêter de fumer.
                        </p>
                    </div>
                </div>
            </div>

            {/* free devis block */}
            <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                <div className="container pt-4">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-6 text-center">
                            <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center">
                            <Link to="#" className="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                            <Link to="#" className="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Opération réduction estomac par sleeve gastrique :
                            </span>
                            <br />
                            <span className="h12">
                                avantages
                            </span>
                        </h1>

                        <p className="lead">
                            La sleeve gastrique en Tunisie présente des avantages qu’il importe de souligner :

                            Une perte de poids considérable en 12 mois (70% de l’excès de poids éliminé), ainsi qu’un risque opératoire très faible :
                        </p>

                        <ul className="lead">
                            <li>Aucun risque de malabsorption ou de carence car le circuit intestinal est conservé.</li>
                            <li>Les incisions sont assez petites (5-10 mm), de plus il n’y a pas de mise en place d’un corps étranger.</li>
                            <li>Pas de complications après la sortie de la clinique donc surveillance moins systématique.</li>
                            <li>Amélioration très importante d’un diabète de type II, d’une hypertension artérielle, d’un trouble métabolique.</li>
                            <li>Pas de carence en vitamines.</li>
                            <li>La diminution de volume de l’estomac réduira la sécrétion d’une hormone appelée ghréline et qui interviendrait dans la sensation de faim ainsi donc, des règles hygiéniques et diététiques postopératoires sont indispensables, le mieux encadrées par un spécialiste (nutritionniste).</li>
                        </ul>
                        <p className="lead">
                            Inconvénient : Un seul risque rare mais grave de fistule.
                        </p>
                    </div>
                </div>
            </div>

            {/* free devis block */}
            <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                <div className="container pt-4">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-6 text-center">
                            <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center">
                            <Link to="#" className="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                            <Link to="#" className="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Suivi post opératoire
                            </span>
                            <br />
                            <span className="h12">
                                de Sleeve
                            </span>
                        </h1>

                        <p className="lead">
                            En guise de conclusion, il est recommandé d’avoir un contrôle postopératoire immédiat et un suivi régulier à long terme, en particulier une consultation avec le médecin nutritionniste tous les 3 mois puis au minimum tous les 6 mois.
                        </p>
                    </div>
                </div>
            </div>

            {/* free devis block */}
            <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                <div className="container pt-4">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-6 text-center">
                            <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center">
                            <Link to="#" className="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                            <Link to="#" className="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid  pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Les résultats
                            </span>
                        </h1>

                        <p className="lead">
                            La perte de poids finale peut ne pas être aussi importante qu’avec le bypass gastrique. Cela peut être suffisant pour de nombreuses personnes. Discutez avec votre chirurgien de l’intervention qui vous convient le mieux.
                        </p>
                        <p className="lead">
                            La perte de poids est généralement plus lente qu’avec un bypass gastrique. Vous devriez continuer à perdre du poids pendant 2 à 3 ans.
                        </p>
                        <p className="lead">
                            Perdre suffisamment de poids après l’opération peut améliorer de nombreux problèmes médicaux dont vous pourriez souffrir. Les conditions qui peuvent s’améliorer sont l’asthme, le diabète de type 2, l’arthrite, l’hypertension artérielle, l’apnée obstructive du sommeil, l’hypercholestérolémie et la maladie gastro-œsophagienne (RGO).
                        </p>

                        <p className="lead">
                            Le fait de peser moins devrait également vous permettre de vous déplacer et d’accomplir vos activités quotidiennes beaucoup plus facilement.
                        </p>

                        <p className="lead">
                            Cette chirurgie ne constitue pas à elle seule une solution pour perdre du poids. Elle peut vous entraîner à manger moins, mais vous devez encore faire une grande partie du travail. Pour perdre du poids et éviter les complications liées à l’intervention, vous devrez suivre les directives en matière d’exercice et d’alimentation que vous donneront votre chirurgien et votre diététicien.
                        </p>
                    </div>
                </div>
            </div>

            {/* free devis block */}
            <div className="container-fluid pb-3 pt-3 free-devis-bloc">
                <div className="container pt-4">

                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-12 col-md-6 text-center">
                            <p className="float-start text-devis-block pt-2">CONTACT US AND SCHEDULE YOUR VISIT</p>
                        </div>

                        <div className="col-sm-12 col-md-6 text-center">
                            <Link to="#" className="d-none d-sm-none d-md-block float-end btn btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                            <Link to="#" className="d-sm-block d-md-none btn  btn-devis-free" role="button" aria-pressed="true">DEVIS GRATUIT</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SleevePage
