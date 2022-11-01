import * as React from "react";
import "./blog.css";
import Layout from "../layouts/layout";
import { Link } from "gatsby";

const BlogsPage = () => {
    return (
        <>
            <Layout>

                <div className="container-fluid service pt-5 pb-5">
                    <div className="container intern-page-style">
                        <h1 className="service-title">
                            Blog
                        </h1>

                    </div>
                </div>


                <div class="container my-5">
                    <div class="row d-flex justify-content-center">

                        <div class="col-sm-12 col-md-8 blogs">
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators mb-3"> 
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/10/gastroplastie-tunisie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            22/10/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            La Procédure De Perte De Poids À La Mode Que Vous Pouvez Subir Même Si Vous N êtes Pas En Surpoids
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/10/gynecomastie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            10/10/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            Qu est-Ce Que La Chirurgie De La Gynécomastie ?
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/10/chirurgie-paupiere.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            02/10/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            Comment la blépharoplastie vous permet de paraître plus jeune ?
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/09/rhinoplastie-en-tunisie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            20/09/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            8 Questions À Se Poser Avant De Subir Une Rhinoplastie
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/09/liposuccion.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            12/09/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            9 Choses A Savoir Avant D opter Pour Une Liposuccion
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/08/greffe-de-cheveux-en-tunisie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            22/08/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            Les 10 Choses À Éviter Après Une Greffe De Cheveux
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/10/gastroplastie-tunisie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            22/10/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            La Procédure De Perte De Poids À La Mode Que Vous Pouvez Subir Même Si Vous N êtes Pas En Surpoids
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/10/gynecomastie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            10/10/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            Qu est-Ce Que La Chirurgie De La Gynécomastie ?
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/10/chirurgie-paupiere.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            02/10/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            Comment la blépharoplastie vous permet de paraître plus jeune ?
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/09/rhinoplastie-en-tunisie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            20/09/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            8 Questions À Se Poser Avant De Subir Une Rhinoplastie
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/09/liposuccion.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            12/09/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            9 Choses A Savoir Avant D opter Pour Une Liposuccion
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 col-xl-4 mb-4">
                                                <div class="card mr-3">
                                                    <img src="https://imscproject.com/medica/wp-content/uploads/2022/08/greffe-de-cheveux-en-tunisie.webp" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-text">
                                                            22/08/2022
                                                        </p>
                                                        <h5 class="card-title">
                                                            Les 10 Choses À Éviter Après Une Greffe De Cheveux
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 ">
                            <h5 className="blog-recent">
                                Blog récent
                            </h5>
                            <div className="row">
                                <div className="col-4">
                                    <img style={{ height: "50%", width: "100%", borderRadius: "5px" }} loading={"lazy"} className="img-fluid" width="73" height="73" src="https://imscproject.com/medica/wp-content/uploads/2022/10/gastroplastie-tunisie.webp" alt="blog" />
                                </div>
                                <div className="col-8">
                                    <Link className="blog-title" aria-current="page" to="#">
                                        <p>
                                            La Procédure De Perte De Poids À La Mode Que Vous Pouvez Subir Même Si Vous N êtes Pas En Surpoids
                                        </p>
                                    </Link>
                                    <p>
                                        22/10/2022
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <img style={{ height: "50%", width: "100%", borderRadius: "5px" }} loading={"lazy"} className="img-fluid" width="73" height="73" src="https://imscproject.com/medica/wp-content/uploads/2022/10/gynecomastie.webp" alt="blog" />
                                </div>
                                <div className="col-8">
                                    <Link className="blog-title" aria-current="page" to="#">
                                        <p>
                                            Qu est-Ce Que La Chirurgie De La Gynécomastie ?
                                        </p>
                                    </Link>
                                    <p>
                                        10/10/2022
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-4">
                                    <img style={{ height: "50%", width: "100%", borderRadius: "5px" }} loading={"lazy"} className="img-fluid" width="73" height="73" src="https://imscproject.com/medica/wp-content/uploads/2022/10/chirurgie-paupiere.webp" alt="blog" />
                                </div>
                                <div className="col-8">
                                    <Link className="blog-title" aria-current="page" to="#">
                                        <p>
                                            Comment la blépharoplastie vous permet de paraître plus jeune ?
                                        </p>
                                    </Link>
                                    <p>
                                        02/10/2022
                                    </p>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default BlogsPage
