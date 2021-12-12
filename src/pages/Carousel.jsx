import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../components/img/Imagen1.jpg";
import img2 from "../components/img/Imagen2.jpg";
import img3 from "../components/img/Imagen3.jpg";
import "../styles/Carousel.css";
import { Grid } from "@material-ui/core";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Index = () => {
  return (
    <div>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs={4}>
          <Grid
            container
            justifyContent="center"
            direction="column"
            alignItems="center"
            style={{ minHeight: "20vh" }}
          >
            <br/>
            <br/>
            <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <div class="pt-6 md:p-8 text-center">
                  <blockquote>
                    <p class="text-lg text center font-medium">
                      “En primer lugar, ten un ideal definido, claro y práctico; una meta, un objetivo;
                      en segundo lugar, dispón de los medios necesarios para alcanzar tus fines; sabiduría, dinero, materiales y métodos
                      y en tercer lugar, emplea todos tus medios para ese fin.” – Aristóteles
                    </p>
                  </blockquote>
                </div>
            </figure>
            <Carousel
              className="main-slide"
              autoPlay="true"
              infiniteLoop="true"
              showArrows="false"
            >
              <div>
                <img src={img1} alt="img1" height="300px" width="200px" />
              </div>
              <div>
                <img src={img2} alt="img2" height="300px" width="200px" />
              </div>
              <div>
                <img src={img3} alt="img3" height="300px" width="200px" />
              </div>
            </Carousel>

            <div class="pt-6 md:p-8 font-bold text-center">
            OMNIUM <br/> Work Smarter 
            </div>
            
            {/* <ul class="flex">
              <li class="flex-1 mr-2">
                <a
                  class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                  href="auth/login"
                >
                  Ingresar
                </a>
              </li>
              <li class="flex-1 mr-2">
                <a
                  class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
                  href="auth/register"
                >
                  Registrarse
                </a>
              </li>
            </ul> */}
          </Grid>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
