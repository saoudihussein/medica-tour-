import * as React from "react";
import "./header-mobile.css";
import logoSide from "../images/MedicaTour_logo_mobile.webp";
import logo from "../images/logo.webp";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "gatsby";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';



const HeaderMobileComponent = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [interventions, setInterventions] = React.useState(false);
    const [bariatrique, setBariatrique] = React.useState(false);
    const [denatire, setDenatire] = React.useState(false);
    const [esthetique, setEsthetique] = React.useState(false);
    const [chirCorps, setChirCorps] = React.useState(false);
    const [estheInti, setEstheInti] = React.useState(false);
    const [pma, setPMA] = React.useState(false);
    const [greffeChev, setGreffeChev] = React.useState(false);
    const [procedures, setProcedures] = React.useState(false);
    const [propos, setPropos] = React.useState(false);
    const [header, setHeader] = React.useState(window.scrollY > 250 ? true : false);



    React.useEffect(() => {
        document.addEventListener('scroll', () =>
            window.scrollY > 300 ? setHeader(true) : setHeader(false)
        );
    }, [])

    return (

        <>

            {
                !header ||
                <div className="container-fluid mobile header-mob pt-2">

                    <div className="row">
                        <div className="col-9">
                            <GiHamburgerMenu size={30} onClick={() => setIsOpen(!isOpen)} />

                            <Link to="/">
                                <img src={logoSide} className="img-fluid logo-mobile text-center" alt="medica-tour" />
                            </Link>
                        </div>

                        <div className="col-3 pt-3">
                            <div className="dropdown">
                                <button className="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <BsFillInfoCircleFill size={30} />
                                </button>
                                <ul className="dropdown-menu details" aria-labelledby="dropdownMenuButton1">
                                    <li className="mb-3">
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
                                    </li>
                                    <li className="mb-3">
                                        <div className="row flex-style">
                                            <div className="col-2">
                                                <FaPhoneAlt size={30} />
                                            </div>

                                            <div className="col-9">
                                                <div className="row">
                                                    <a href="tel:+216 22 543 410" className="link-detail">
                                                        <span>
                                                            +216 22 543 410
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="row flex-style">
                                            <div className="col-2">
                                                <FaRegEnvelope size={30} />
                                            </div>

                                            <div className="col-9">
                                                <div className="row">
                                                    <a href="mailto:Contact@medica-tour.fr" className="link-detail">
                                                        <span>
                                                            Contact@medica-tour.fr                                                    </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="mb-3">
                                        <div className="row flex-style">
                                            <div className="col-2">
                                                <FaMapMarkerAlt size={30} />
                                            </div>

                                            <div className="col">
                                                <div className="row ">
                                                    <span className="adr">
                                                        145, RES MAYA "B" - H NOUIRA,
                                                    </span>
                                                </div>

                                                <div className="row">
                                                    BORJ LOUZIR 2073
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            }


            <div className="container-fluid mobile pt-3">

                <div className="row">
                    <div className="col-9">
                        <GiHamburgerMenu size={30} onClick={() => setIsOpen(!isOpen)} />

                        <Link to="/">
                            <img src={logo} className="img-fluid logo-mobile text-center" alt="medica-tour" />
                        </Link>
                    </div>

                    <div className="col-3">
                        <div className="dropdown">
                            <button className="btn btn-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <BsFillInfoCircleFill size={30} />
                            </button>
                            <ul className="dropdown-menu details" aria-labelledby="dropdownMenuButton1">
                                <li className="mb-3">
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
                                </li>
                                <li className="mb-3">
                                    <div className="row flex-style">
                                        <div className="col-2">
                                            <FaPhoneAlt size={30} />
                                        </div>

                                        <div className="col-9">
                                            <div className="row">
                                                <a href="tel:+216 22 543 410" className="link-detail">
                                                    <span>
                                                        +216 22 543 410
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="row flex-style">
                                        <div className="col-2">
                                            <FaRegEnvelope size={30} />
                                        </div>

                                        <div className="col-9">
                                            <div className="row">
                                                <a href="mailto:Contact@medica-tour.fr" className="link-detail">
                                                    <span>
                                                        Contact@medica-tour.fr                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="row flex-style">
                                        <div className="col-2">
                                            <FaMapMarkerAlt size={30} />
                                        </div>

                                        <div className="col">
                                            <div className="row">
                                                <span className="adr">
                                                    145, RES MAYA "B" - H NOUIRA,
                                                </span>
                                            </div>

                                            <div className="row">
                                                BORJ LOUZIR 2073
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>


            </div>

            <div className="container mobile">


                <div className={isOpen ? "sidenavOpen" : "sidenav"}>
                    <div className="d-flex flex-row-reverse bd-highlight close-style pt-2" onKeyDown={() => setIsOpen(!isOpen)} onClick={() => setIsOpen(!isOpen)}>
                        <AiOutlineClose color="black" size={30} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/">
                            <img src={logoSide} className="img-fluid pt-5 logo" alt="medica-tour" />
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center pt-4">
                        <div className="row">
                            <div className="col">
                                <a href="https://www.facebook.com/Medicatour.fr" target="_blank" rel="noreferrer"> <FaFacebookF /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.linkedin.com/company/medica-tour-fr/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            </div>
                            <div className="col">
                                <a href="https://www.instagram.com/medicatour.fr/?hl=fr" target="_blank" rel="noreferrer"> <FaInstagram /></a>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center pt-4">
                        <div className="row">
                            <div className="col">
                                <Link className="link" to="#">Accueil</Link>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center pt-4">
                        <div className="row">
                            <div className="col">

                            </div>
                        </div>
                    </div>

                    <div className="intervetions">

                        <div className="d-flex justify-content-center">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Interventions</Link>
                                </div>
                                <div className="col" onClick={() => setInterventions(!interventions)} >
                                    {
                                        interventions ?
                                            <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                            <span className="angleIcon"><FaAngleDown color="black" /></span>
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            !interventions ||
                            <>
                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">Bariatrique</Link>
                                        </div>
                                        <div className="col" onClick={() => setBariatrique(!bariatrique)} >
                                            {
                                                bariatrique ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>


                                {
                                    !bariatrique ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink " to="#">Sleeve gastrique</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Anneau gastrique</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">By-pass gastrique</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Ballon gastrique</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }


                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">Denatire</Link>
                                        </div>
                                        <div className="col" onClick={() => setDenatire(!denatire)} >
                                            {
                                                denatire ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>


                                {
                                    !denatire ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Implant dentaire</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Facettes Dentaires</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Blanchiment dents</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Gingivectomie</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Couronne Dentaire</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">Médecine&nbsp;esthetique</Link>
                                        </div>
                                        <div className="col" onClick={() => setEsthetique(!esthetique)} >
                                            {
                                                esthetique ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>


                                {
                                    !esthetique ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Acide hyaluronique</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Toxine Botulique</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Traitement Laser</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Mesobotox</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">PRP</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Rhinoplastie Médicale</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Techniques d’Amincissement</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Fils Tenseurs</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Mésothérapie</Link>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                }


                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">Chirurgie&nbsp;corps</Link>
                                        </div>
                                        <div className="col" onClick={() => setChirCorps(!chirCorps)} >
                                            {
                                                chirCorps ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>


                                {
                                    !chirCorps ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink link" to="#">Chirurgie visage</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink link" to="#">Chirurgie sein</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink link" to="#">Chirurgie silhouette</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">Esthétique&nbsp;de&nbsp;l’intimité</Link>
                                        </div>
                                        <div className="col" onClick={() => setEstheInti(!estheInti)} >
                                            {
                                                estheInti ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>


                                {
                                    !estheInti ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Nymphoplastie</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Penoplastie</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Vaginoplastie</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Hymenoplastie</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }

                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">PMA</Link>
                                        </div>
                                        <div className="col" onClick={() => setPMA(!pma)} >
                                            {
                                                pma ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {
                                    !pma ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Biopsie testiculaire</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Fécondation in vitro</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Insémination artificielle</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }


                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink link" to="#">Greffe&nbsp;de&nbsp;cheveux</Link>
                                        </div>
                                        <div className="col" onClick={() => setGreffeChev(!greffeChev)} >
                                            {
                                                greffeChev ?
                                                    <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                    <span className="angleIcon"><FaAngleDown color="black" /></span>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {
                                    !greffeChev ||
                                    <>
                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Greffe poils et cheveux</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Greffe de barbe</Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-center pt-3">
                                            <div className="row">
                                                <div className="col">
                                                    <Link className="subLink" to="#">Greffe et implants des sourcils</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                            </>

                        }

                    </div>

                    <div className="devis">
                        <div className="d-flex justify-content-center  pt-3">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Devis&nbsp;gratuits</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="apropos">

                        <div className="d-flex justify-content-center pt-3">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">A&nbsp;propos</Link>
                                </div>
                                <div className="col" onClick={() => setPropos(!propos)} >
                                    {
                                        propos ?
                                            <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                            <span className="angleIcon"><FaAngleDown color="black" /></span>
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            !propos ||
                            <>
                                <div className="d-flex justify-content-center pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to="#">Nos&nbsp;chirurgiens</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center  pt-3">
                                    <div className="row">
                                        <div className="col">
                                            <Link className="subLink" to="#">Tarifs</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="procedures">

                                    <div className="d-flex justify-content-center pt-3">
                                        <div className="row">
                                            <div className="col">
                                                <Link className="link" to="#">Procedures</Link>
                                            </div>
                                            <div className="col" onClick={() => setProcedures(!procedures)} >
                                                {
                                                    procedures ?
                                                        <span className="angleIcon"><FaAngleUp color="black" /></span> :
                                                        <span className="angleIcon"><FaAngleDown color="black" /></span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        !procedures ||
                                        <>
                                            <div className="d-flex justify-content-center pt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <Link className="subLink" to="#">Hôtel</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center  pt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <Link className="subLink" to="#">Clinique</Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center  pt-3">
                                                <div className="row">
                                                    <div className="col">
                                                        <Link className="subLink" to="#"><div className="d-flex justify-content-center">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <Link className="subLink" to="#">Séjour Médical</Link>
                                                                </div>
                                                            </div>
                                                        </div></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>

                                    }

                                </div>

                            </>

                        }

                    </div>

                    <div className="blog">
                        <div className="d-flex justify-content-center pt-3">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Blog</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="d-flex justify-content-center pt-3">
                            <div className="row">
                                <div className="col">
                                    <Link className="link" to="#">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default HeaderMobileComponent;
