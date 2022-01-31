/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import donateEuro from '../../Assests/donateEuro.jpg';
import RWHeart from '../../Assests/RWHeart.png';
import clothDonate from '../../Assests/clothDonation.jpg';
import './Header.css';

const Header = () => {
  return (
    <div>
      {/* This is Navbar */}
      <Navbar />
      {/* This is carousel */}
      <div>
        <div id="carouselExample1" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExample1"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="1" aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="2" aria-label="Slide 3" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active ">
              <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img
                      src={donateEuro}
                      className="d-block mx-lg-auto img-fluid carouselImage"
                      alt="Bootstrap Themes"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Show that You Care Today</h1>
                    <p className="lead">
                      Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
                      popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                      system, extensive prebuilt components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <a href="#Donate">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                          Donate
                        </button>
                      </a>
                      <Link to="/registration">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container col-xxl-8 px-4 py-5 text-end">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Show that You Care Today</h1>
                    <p className="lead">
                      Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
                      popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                      system, extensive prebuilt components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <a href="#Donate">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                          Donate
                        </button>
                      </a>
                      <Link to="/registration">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img
                      src={RWHeart}
                      className="d-block mx-lg-auto img-fluid carouselImage"
                      alt="Bootstrap Themes"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                  <div className="col-10 col-sm-8 col-lg-6">
                    <img
                      src={clothDonate}
                      className="d-block mx-lg-auto img-fluid carouselImage"
                      alt="Bootstrap Themes"
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Show that You Care Today</h1>
                    <p className="lead">
                      Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
                      popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
                      system, extensive prebuilt components, and powerful JavaScript plugins.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <a href="#Donate">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                          Donate
                        </button>
                      </a>
                      <Link to="/registration">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                          Sign Up
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample1"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
