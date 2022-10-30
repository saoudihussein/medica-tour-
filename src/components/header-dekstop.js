import * as React from "react";
import "./header-dekstop.css";
import logo from "../images/logo.webp";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from "gatsby";




const HeaderDesktopComponent = () => {
    const [header, setHeader] = React.useState(window.scrollY > 300 ? true : false);



    React.useEffect(() => {
        document.addEventListener('scroll', () =>
            window.scrollY > 300 ? setHeader(true) : setHeader(false)
        );
    }, [])

    return (
        <div className="desktop">


            {
                !header ||
                <div className="container-fluid header">
                    <div className="container pt-4 pb-4 ">

                        <div className="row">
                            <div className="col-10 menu-bar">
                                <ul>
                                    <li>
                                        <Link to="/" className="text-uppercase link-desk">
                                            ACCUEIL
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Interventions
                                        </Link>


                                        <div className="dropdown-menu">
                                            <ul>
                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Bariatrique</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Sleeve gastrique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Anneau gastrique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">By-pass gastrique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Ballon gastrique</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Dentaire</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Implant dentaire</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Facettes Dentaires</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Blanchiment dents</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Gingivectomie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Couronne Dentaire</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Médecine esthetique</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Acide hyaluronique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Toxine Botulique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Traitement Laser</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Mesobotox</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">PRP</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Rhinoplastie Médicale</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Techniques d’Amincissement</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Fils Tenseurs</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Mésothérapie</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Chirurgie corps</Link>
                                                    <div className="dropdown-menu-1 chir-corp">

                                                        <div className="row">
                                                            <div className="col-4">
                                                                <ul>
                                                                    <li><Link className="text-uppercase sublink fw-bold" href="#">Chirurgie visage</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Blépharoplastie</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Canthopexie</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Genioplastie</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Lifting visage</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Mini lifting visage</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Otoplastie</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Rhinoplastie</Link></li>
                                                                </ul>
                                                            </div>



                                                            <div className="col-4">
                                                                <ul>
                                                                    <li><Link className="text-uppercase sublink fw-bold" href="#">Chirurgie silhouette</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">LipoVaser ou Liposuccion Vaser</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Abdominoplastie</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Mini abdominoplastie</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Lifting des Bras</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Bodylift Tunise</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">lifting des cuisses</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Augmentation des mollets</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Augmentation fesses</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Lipofilling fesses</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Bbl tunisie</Link></li>
                                                                </ul>
                                                            </div>

                                                            <div className="col-4">
                                                                <ul>
                                                                    <li><Link className="text-uppercase sublink fw-bold" href="#">Chirurgie sein</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Augmentation mammaire</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Lifting des seins</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Lipofilling mammaire</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Réduction mammaire</Link></li>
                                                                    <li><Link className="text-uppercase sublink" href="#">Gynécomastie</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </li>


                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Esthétique de l’intimité</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Nymphoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Penoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Vaginoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Gingivectomie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Hymenoplastie</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">PMA</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Biopsie testiculaire</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Fécondation in vitro</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Insémination artificielle</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Gingivectomie</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>

                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Greffe de cheveux</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Greffe poils et cheveux</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Greffe de barbe</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Greffe et implants des sourcils</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>
                                    </li>




                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Devis&nbsp;gratuits
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            A&nbsp;propos
                                        </Link>


                                        <div className="dropdown-menu">
                                            <ul>
                                                <li>
                                                    <Link className="text-uppercase" to="/chirurgiens-esthetiques-tunisie/">Nos&nbsp;chirurgiens</Link>
                                                </li>

                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Tarifs</Link>
                                                </li>


                                                <li>
                                                    <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Procédure</Link>
                                                    <div className="dropdown-menu-1">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink" href="#">Hôtel</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Clinique</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Séjour Médical</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Blog
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to="/" className="text-uppercase link-desk dropbtn">
                                            Contact
                                        </Link>
                                    </li>

                                </ul>

                            </div>

                            <div className="col">
                                <div className="row float-end">
                                    <div className="col-1">
                                        <a href="https://www.facebook.com/Medicatour.fr" className="link-desk" target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                                    </div>

                                    <div className="col-1">
                                        <a href="https://www.linkedin.com/company/medica-tour-fr/" className="link-desk" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                                    </div>

                                    <div className="col-1">
                                        <a href="https://www.instagram.com/medicatour.fr/?hl=fr" className="link-desk" target="_blank" rel="noreferrer"> <FaInstagram /></a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            }

            <div className="container">
                <div className="row d-flex">
                    <div className="col-2 pt-5">
                        <Link to="/">
                            <img src={logo} className="img-fluid  logo" alt="medica-tour" />
                        </Link>
                    </div>
                    <div className="col pt-5">
                        <div className="row flex-style">
                            <div className="col-2">
                                <FaClock size={30} />
                            </div>

                            <div className="col-9">
                                <div className="row">
                                    Lundi - Samedi 08:00 - 21:00
                                </div>

                                <div className="row">
                                    Dimanche - Fermé
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col pt-5">
                        <div className="row">
                            <div className="col">
                                <div className="row">
                                    <a href="tel:+216 22 543 410" className="link-desk">
                                        <span>
                                            <FaPhoneAlt /> +216 22 543 410
                                        </span>
                                    </a>
                                </div>

                                <div className="row">
                                    <a href="mailto:Contact@medica-tour.fr" className="link-desk">
                                        <span>
                                            <FaRegEnvelope /> Contact@medica-tour.fr
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col pt-5">
                        <div className="row flex-style">
                            <div className="col-2">
                                <FaMapMarkerAlt size={30} />
                            </div>

                            <div className="col">
                                <div className="row">
                                    145, RES MAYA "B" - H NOUIRA,
                                </div>

                                <div className="row">
                                    BORJ LOUZIR 2073
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <hr className="border-2 border-top mt-5" />


            <div className="container">
                <div className="row">
                    <div className="col-10 menu-bar">
                        <ul>
                            <li>
                                <Link to="/" className="text-uppercase link-desk">
                                    ACCUEIL
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Interventions
                                </Link>


                                <div className="dropdown-menu">
                                    <ul>
                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Bariatrique</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Sleeve gastrique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Anneau gastrique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">By-pass gastrique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Ballon gastrique</Link></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Dentaire</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Implant dentaire</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Facettes Dentaires</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Blanchiment dents</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Gingivectomie</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Couronne Dentaire</Link></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Médecine esthetique</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Acide hyaluronique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Toxine Botulique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Traitement Laser</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Mesobotox</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">PRP</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Rhinoplastie Médicale</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Techniques d’Amincissement</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Fils Tenseurs</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Mésothérapie</Link></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Chirurgie corps</Link>
                                            <div className="dropdown-menu-1 chir-corp">

                                                <div className="row">
                                                    <div className="col-4">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink fw-bold" href="#">Chirurgie visage</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Blépharoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Canthopexie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Genioplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Lifting visage</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Mini lifting visage</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Otoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Rhinoplastie</Link></li>
                                                        </ul>
                                                    </div>



                                                    <div className="col-4">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink fw-bold" href="#">Chirurgie silhouette</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">LipoVaser ou Liposuccion Vaser</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Abdominoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Mini abdominoplastie</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Lifting des Bras</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Bodylift Tunise</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">lifting des cuisses</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Augmentation des mollets</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Augmentation fesses</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Lipofilling fesses</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Bbl tunisie</Link></li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-4">
                                                        <ul>
                                                            <li><Link className="text-uppercase sublink fw-bold" href="#">Chirurgie sein</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Augmentation mammaire</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Lifting des seins</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Lipofilling mammaire</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Réduction mammaire</Link></li>
                                                            <li><Link className="text-uppercase sublink" href="#">Gynécomastie</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>


                                            </div>
                                        </li>


                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Esthétique de l’intimité</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Nymphoplastie</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Penoplastie</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Vaginoplastie</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Gingivectomie</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Hymenoplastie</Link></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">PMA</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Biopsie testiculaire</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Fécondation in vitro</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Insémination artificielle</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Gingivectomie</Link></li>
                                                </ul>
                                            </div>
                                        </li>

                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Greffe de cheveux</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Greffe poils et cheveux</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Greffe de barbe</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Greffe et implants des sourcils</Link></li>
                                                </ul>
                                            </div>
                                        </li>


                                    </ul>
                                </div>
                            </li>




                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Devis&nbsp;gratuits
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    A&nbsp;propos
                                </Link>


                                <div className="dropdown-menu">
                                    <ul>
                                        <li>
                                            <Link className="text-uppercase" to="/chirurgiens-esthetiques-tunisie/">Nos&nbsp;chirurgiens</Link>
                                        </li>

                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Tarifs</Link>
                                        </li>


                                        <li>
                                            <Link className="text-uppercase" to="chirurgie-obesite-tunisie">Procédure</Link>
                                            <div className="dropdown-menu-1">
                                                <ul>
                                                    <li><Link className="text-uppercase sublink" href="#">Hôtel</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Clinique</Link></li>
                                                    <li><Link className="text-uppercase sublink" href="#">Séjour Médical</Link></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to="/" className="text-uppercase link-desk dropbtn">
                                    Contact
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div className="col">
                        <div className="row float-end">
                            <div className="col-1">
                                <a href="https://www.facebook.com/Medicatour.fr" className="link-desk" target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                            </div>

                            <div className="col-1">
                                <a href="https://www.linkedin.com/company/medica-tour-fr/" className="link-desk" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>

                            <div className="col-1">
                                <a href="https://www.instagram.com/medicatour.fr/?hl=fr" className="link-desk" target="_blank" rel="noreferrer"> <FaInstagram /></a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default HeaderDesktopComponent
