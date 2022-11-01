import * as React from "react";
import "./procedure.css";
import Layout from "../layouts/layout";

const HotelPage = () => {
    return (
        <Layout>
            <div className="container-fluid service pt-5 pb-5">
                <div className="container intern-page-style">
                    <h1 className="service-title">
                        Hôtel
                    </h1>
                </div>
            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-12 col-md-6 pt-2">
                        <div className="card" >
                            <img src="https://imscproject.com/medica/wp-content/uploads/2022/06/hotel-down-town-1.webp" className="card-img-top img-fluid" alt="Sleeve gastrique" />
                            <div className="card-body card-body-intervention  w-100">
                                <h5 className="text-center card-body-title">Hotel down town</h5>                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 pt-2">
                        <div className="card" >
                            <img src="https://imscproject.com/medica/wp-content/uploads/2022/06/hotel-mouradi-gammarth-1.webp" className="card-img-top img-fluid" alt="Bypass gastrique" />
                            <div className="card-body card-body-intervention  w-100">
                                <h5 className="text-center card-body-title">Hotel mouradi gammarth</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pb-5 pt-2">
                <div className="container ">


                    <div className="row">
                        <div className="col-12">
                            <p className="lead">
                                Afin d’assurer les meilleurs conditions de votre séjour medical, Medica Tour a choisi pour vous un hôtel de chirurgie esthétique Tunisie situé au centre ville : Down Town Hôtel Tunis
                            </p>

                            <p className="lead">
                                Situé dans un quartier des affaires, cet hôtel est composé de 58 chambres confortables, spacieuses et lumineuses. Les chambres sont toutes bien équipées avec un service de qualité : climatisation, chauffage individuel, salle de bains ou de douche, télévision et wi-fi.
                            </p>

                            <p className="lead">
                                Down Town Tunis Hôtel est dédié principalement au séjours des chirurgies dentaires et de PMA.
                            </p>

                            <p className="lead">
                                Medica tour a choisi cet hôtel vu sa proximité des cliniques et de l’aeroport ,dans le but de garantir une facilité de déplacement pour les consultations et pour une meilleure prise en charge. Parce que dans le cas d’un acte chirurgical dentaire ou de PMA, plusieurs consultations sont nécessaires pour de garantir un résultat optimal. MedicaTour en choisissant cet hôtel a pensé au confort de ses patients en lui évitant les longs trajets entre hôtel et cabinet .
                            </p>

                            <p className="lead">
                                Pendant votre séjour esthetique Tunisie vous allez combiner chirurgie esthétique par les meilleurs chirurgiens esthétiques du pays et profiter d’un hôtel pour votre séjour médical équipé avec un tarif pas cher et tout inclus.
                            </p>



                        </div>


                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default HotelPage
