import React from "react";
import "./Home.css";
import homeImg1 from "./Homeimages/homeimage1.jpg";
import homeImg2 from "./Homeimages/background-ewaste.webp";
import homeImg3 from "./Homeimages/stray2.jpg";
import homeImg4 from "./Homeimages/donateUs.png";
import homeImg5 from "./Homeimages/154189.jpg";
import homeImgTestimonial1 from "./Homeimages/testimonials/modiji.jpg";
import homeImgTestimonial2 from "./Homeimages/testimonials/putin.jpeg";
import homeImgTestimonial3 from "./Homeimages/testimonials/testimonial.jpg";
import homeImg7 from "./Homeimages/154189.jpg";
import homeImg8 from "./Homeimages/ewaste-pic.jpg";

import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

let Home = (props) => {
  return (
    <React.Fragment>
      <section id="home" className="home">
        <div
          className="container-fluid px-0 top-banner"
          style={{
            backgroundImage: `url(${homeImg1}) `,
            backgroundRepeat: "noRepeat",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1 className="hech1">Recycling All e-Waste</h1>
                <p className="pee">
                  India has 3.2 million metric tonnes of e-waste annually , has
                  highest levels of abandonment and THIS BREAKS OUR HEARTS! Join
                  our cause and help us recycle this waste and put it to good
                  use and save the enironment
                </p>

                <div className="mt-4">
                  <button className="main-btn" id="n">
                    Report eWaste
                  </button>

                  <button className="main-btn ms-lg-4 mt-lg-0 mt-4">
                    Purchase Recycled Components
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" data-aos="fade-up">
        <div
          className="about-section wrapper"
          style={{
            backgroundColor: "#65C332",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 mb-lg-0 mb-5 d-flex justify-content-evenly">
                <div className="card border-0" style={{ width: "70vh" }}>
                  <img src={homeImg7} className="card-image img-fluid" alt="" />
                </div>
              </div>
              <div className="col-lg-5 col-md-12 text-sec">
                <h2 className="" style={{ color: "white" }}>
                  About Us
                </h2>
                <p className="" style={{ color: "white" }}>
                  Remine India is a recognized startup working on recycling
                  e-Waste and Li Batteries. The company offers end-to-end
                  e-waste management services, including collection,
                  transportation, dismantling, and recycling of e-waste and
                  Li-ion batteries. Remine India uses advanced recycling
                  technologies to extract valuable metals and components from
                  e-waste and Li-ion batteries, which can be reused in the
                  production of new electronics.
                </p>

                <button className="main-btn mt-4">Find Out More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div
          className="wrapper"
          style={{
            backgroundColor: "white",
            paddingTop: "80px",
            paddingBottom: "80px",
          }}
        >
          <div className="container rescue-stray">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                <h2 className="" style={{ color: "var(--primary-color)" }}>
                  Help the e-waste near you get rightly disposed
                </h2>
                <p>
                  If you come across electronic waste (e-waste) near you, it is
                  important to report it to a responsible recycling company like
                  Remine India to ensure safe disposal and recycling. E-waste
                  can contain hazardous materials that can harm the environment
                  and human health if not properly disposed of.
                </p>
                <button className="main-btn mt-4">Report eWaste</button>
              </div>
              <div className="col-lg-7 col-md-12 d-flex justify-content-center">
                <div className="card border-0" style={{ width: "70vh" }}>
                  <img src={homeImg8} alt="" className="card-image img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story" data-aos="fade-up">
        <div
          className="story-section"
          style={{
            background: `url(${homeImg2})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100vw",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content">
                  <h2
                    className="mb-4"
                    style={{
                      fontWeight: "600",
                      fontSize: "2rem",
                      color: "black",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    It All Started With One Battery
                  </h2>
                  <p
                    className=""
                    style={{
                      fontWeight: "600",
                      fontSize: "1.3rem",
                      color: "black",
                      backgroundColor: "rgba(255, 255, 255, 0.7)",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    The need for this movement struck us when we saw for
                    ourselves how the eWaste was affecting the unexperinced
                    labours who were dealing with them. We then decided to save
                    all the children and the workers who were dealing and at the
                    same time create a revenue model around it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="explore-features"
        style={{ paddingBottom: "80px", paddingTop: "80px" }}
      >
        <div className="explore-features wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="square-box">
                      <div
                        className="square-content"
                        id="card1Image"
                        style={{
                          backgroundImage: `url(${homeImg3})`,
                          dataAos: "fade-right",
                        }}
                      ></div>
                    </div>

                    <div className="main-btn m-3">
                      Purchase Recycled Components
                    </div>
                    <p className="card-text">Get Recyled Components from Us</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="square-box">
                      <div
                        className="square-content"
                        id="card3Image"
                        style={{
                          backgroundImage: `url(${homeImg5})`,
                          dataAos: "fade-left",
                        }}
                      ></div>
                    </div>
                    <div className="main-btn m-3">Report eWaste</div>
                    <p className="card-text">Save people from dying</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="card h-100">
                  <div className="card-body text-center">
                    <div className="square-box">
                      <div
                        className="square-content"
                        id="card2Image"
                        style={{
                          backgroundImage: `url(${homeImg4})`,
                          dataAos: "fade-up",
                        }}
                      ></div>
                    </div>
                    <div className="main-btn m-3">Donate Us</div>

                    <p className="card-text">
                      Help Us promote our moto of recycling eWaste
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" data-aos="fade-up">
        <div className="wrapper testimonial-section">
          <div className="container text-center">
            <div className="text-center pb-4">
              <h2
                className="hech2_sreekar"
                style={{ color: "var(--primary-color)" }}
              >
                Testimonials
              </h2>
            </div>
            <Carousel>
              <Carousel.Item interval={1000} className="bg-dark">
                <div className="d-flex justify-content-center car-div">
                  <img
                    className="d-block car-image"
                    src={homeImgTestimonial1}
                    alt="First slide"
                  />
                </div>
                <Carousel.Caption>
                  <h3>Narendra Modi - Prime Minister of India</h3>
                  <p>
                    I trust Remine India for their innovative recycling
                    technologies and commitment to sustainability.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} className="bg-dark">
                <div className="d-flex justify-content-center car-div">
                  <img
                    className="d-block car-image"
                    src={homeImgTestimonial2}
                    alt="Second slide"
                  />
                </div>
                <Carousel.Caption>
                  <h3>Vladimir Putin - President of Russia</h3>
                  <p>
                    Remine India has exceeded my expectations with their
                    efficient and hassle-free e-waste management services.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="bg-dark">
                <div className="d-flex justify-content-center car-div">
                  <img
                    className="d-block car-image"
                    src={homeImgTestimonial3}
                    alt="Third slide"
                  />
                </div>
                <Carousel.Caption>
                  <h3>Dr. Michelle - Director Green Energy Association</h3>
                  <p>
                    I appreciate Remine India's efforts to educate the public
                    about the importance of responsible e-waste disposal. They
                    are truly making a difference in promoting environmental
                    awareness.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="p-5 faq" id="questions" data-aos="fade-up">
        <Accordion defaultActiveKey="0">
          <h2 className="text-center mb-4">
            Frequently Asked Questions
          </h2>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Where are you located?</Accordion.Header>
            <Accordion.Body>lorem ipsum</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What do I need to know?</Accordion.Header>
            <Accordion.Body>lorem ipsum</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>How much does it cost?</Accordion.Header>
            <Accordion.Body>lorem ipsum</Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How do I sign up?</Accordion.Header>
            <Accordion.Body>lorem ipsum</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </React.Fragment>
  );
};

export default Home;
