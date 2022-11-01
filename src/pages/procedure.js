import * as React from "react";
import "./procedure.css";
import Layout from "../layouts/layout";
import { Link } from "gatsby";

const ProcedurePage = () => {
    return (
        <Layout>
            <div className="container-fluid service pt-5 pb-5">
                <div className="container intern-page-style">
                    <h1 className="service-title">
                        Procédure
                    </h1>
                    <p className="service-description pt-3">
                        Procédure séjour médical Tunisie
                        Afin de vous permettre de passer un agréable séjour, vous trouverez dans cette rubrique toutes les informations nécessaires en rapport avec votre intervention.
                    </p>
                </div>
            </div>

            <div className="container mt-4">
                <p className="lead">
                    Pour plus de détails concernant votre séjour médical, veuillez cliquer sur les liens ci-dessous:
                </p>
                <div className="row">
                    <div className="col-sm-12 col-md-4 pt-2">
                        <div className="card" >
                            <img src="https://imscproject.com/medica/wp-content/uploads/2022/04/hotel.png" className="card-img-top img-fluid" alt="Sleeve gastrique" />
                            <div className="card-body card-body-intervention  w-100">
                                <Link to="/hotel-el-mouradi-gammarth/" className="link-interv">
                                    <h5 className="text-center card-body-title">HÔTEL</h5>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 pt-2">
                        <div className="card" >
                            <img src="https://imscproject.com/medica/wp-content/uploads/2022/04/clinique.png" className="card-img-top img-fluid" alt="Bypass gastrique" />
                            <div className="card-body card-body-intervention  w-100">
                                <h5 className="text-center card-body-title">CLINIQUE</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 pt-2">
                        <div className="card" >
                            <img src="https://imscproject.com/medica/wp-content/uploads/2022/04/sejour-medical.png" className="card-img-top img-fluid" alt="sleeve-gastrectomie.webp" />
                            <div className="card-body card-body-intervention  w-100">
                                <h5 className="text-center card-body-title">SÉJOUR MÉDICAL</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid pb-5 pt-2">
                <div className="container ">
                    <div className="row">

                        <h1 className="text-center mt-5 pt-5">
                            <span className="h11">
                                Quelle est la procédure pour une intervention
                            </span>
                            <br />
                            <span className="h12">
                                chirurgicale en Tunisie?
                            </span>
                        </h1>

                        <div className="row">
                            <div className="col-12">
                                <h3 className="proc-sub-title">
                                    La procédure pré-opératoire:
                                </h3>
                                <p className="lead">
                                    Plusieurs démarches sont nécessaire pour préparer dans les meilleures conditions votre chirurgie esthétique en Tunisie:
                                </p>

                                <ul className="lead">
                                    <li>
                                        Premièrement, il est nécessaire d’envoyer une demande à l’une de nos cliniques partenaires. Pour ce faire, il suffit de remplir une demande de formulaire sur notre site.
                                    </li>

                                    <li>
                                        Un conseiller Medica-Tour prendra alors contact avec vous. Lors de cette prise de contact, nous vous poserons quelques questions telles que: de spécifier le type d’intervention de votre choix, vos antécédents médicaux et votre état de santé général (allergies, antécédents chirurgicaux, consommation de tabac, nombre d’accouchements…). Toutes ces informations, ainsi que des photos (selon la procédure) et d’autres informations complémentaires permettront d’établir votre dossier. Enfin, votre dossier sera transmis au chirurgien afin d’établir un premier diagnostic.
                                    </li>

                                    <li>
                                        Puis nous vous communiquons un premier devis par mail.
                                    </li>

                                    <li>
                                        Après l’établissement du premier diagnostic par le chirurgien et son accord, nous pouvons fixer votre date d’arrivée et confirmer votre intervention.
                                    </li>

                                    <li>
                                        Le planning de votre séjour, vous est envoyé après la fixation de la date de votre intervention.
                                    </li>

                                    <li>
                                        Une fois votre intervention confirmée, nous vous partageons le planning complet de votre séjour en Tunisie.
                                    </li>

                                    <li>
                                        Lors de votre arrivée, nous vous conduirons à une première consultation au préalable de votre intervention avec votre chirurgien. Vous pouvez lors de cette consultation poser toutes vos questions et rencontrer votre chirurgien. Cette étape est cruciale et vous permet de finaliser les derniers détails de votre intervention chirurgicale.
                                    </li>

                                    <li>
                                        Suite à cette consultation, un devis final vous est alors communiqué.
                                    </li>

                                    <li>
                                        Nous assurons également votre transport de la consultation pré-opératoire à la clinique jusqu’à votre hôtel. vos transports entre la clinique et l’hôtel, mais aussi vos transports de l’hôtel à l’aéroport
                                    </li>

                                </ul>

                            </div>

                            <div className="col-12">
                                <h3 className="proc-sub-title">
                                    La procédure lors de votre intervention chirurgicale en Tunisie et post-opératoire:
                                </h3>
                                <p className="lead">
                                    Après avoir complété les démarches pré-opératoires, nous pouvons passer à la suite:
                                </p>

                                <ul className="lead">
                                    <li>Afin de vous faire gagner du temps, nous essayons de programmer votre intervention chirurgicale, le lendemain de votre arrivée en Tunisie.</li>
                                    <li>Après votre opération de chirurgie esthétique, nos équipes <a href="https://www.medica-tour.fr/">MedicaTour</a> s’assurent de votre confort post-opératoire. Votre satisfaction et votre convalescence sont nos priorités, c’est pour cela que nous serons au plus prêt de vous durant cette période. Nous serons à votre écoute et nous assurerons que vos demandes soient traitées.</li>
                                    <li>Lors de la fin de votre convalescence post-opératoire, nos agents assure votre transport vers l’aéroport</li>
                                </ul>

                            </div>

                        </div>


                    </div>
                </div>
            </div>

           
        </Layout>
    )
}

export default ProcedurePage
