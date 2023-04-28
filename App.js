import React, { Fragment, useState } from "react";
import { Container, Navbar, NavbarBrand, Row } from "reactstrap";
import { Accordion } from "react-bootstrap";
import "./Firstdropdown";
import "./App.css";
import { ArrowUpRight } from "react-feather";
import Firstdropdown from "./Firstdropdown";

function App() {
  const [value, setValue] = useState(true);

  const shoot = () => {
    alert("Welcome To DBM!");
  };
  return (
    <>
      <Fragment className="Whole-Container">
        <Navbar className="text-center" color="primary" dark>
          <NavbarBrand href="/">
            <span className="text-one-in-navone" onClick={shoot}>
              Bring the power Of AI to Webflow.
            </span>
          </NavbarBrand>
          <NavbarBrand href="/">
            <span className="text-one-in-navone" onClick={shoot}>
              Read the announcement
            </span>
            <ArrowUpRight />
          </NavbarBrand>
        </Navbar>
        <Navbar className="d-flex align-items-center">
          <div className="d-flex gap-4">
            <NavbarBrand className=" d-flex align-items-center">
              <span className="Webflow">Webflow</span>
            </NavbarBrand>

            

            <NavbarBrand>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="2" className="border-0 ">
                  <Accordion.Header className="">
                    <span className="text-two-nav-two">Solution</span>
                  </Accordion.Header>
                  <Accordion.Body className="position-absolute  bg-primary text-white w-100">
                    <div className="w-100 ">
                      <Container fluid>
                        <Firstdropdown />
                      </Container>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </NavbarBrand>
            <NavbarBrand>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="3" className="border-0 ">
                  <Accordion.Header>
                    {" "}
                    <span className="text-two-nav-two">Resources</span>
                  </Accordion.Header>
                  <Accordion.Body className="position-absolute bg-primary text-white w-100">
                    <div className="w-100">
                      <Container fluid>
                        <Firstdropdown />
                      </Container>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </NavbarBrand>
            <NavbarBrand className=" d-flex align-items-center">
              <span className="text-two-nav-two">Enterprice</span>
            </NavbarBrand>
            <NavbarBrand className=" d-flex align-items-center">
              <span className="text-two-nav-two"> Pricing</span>
            </NavbarBrand>
          </div>
          <div className="d-flex ">
            <NavbarBrand className=" d-flex align-items-center ">
              {" "}
              <span className="text-two-nav-two">Log in</span>
            </NavbarBrand>
            <NavbarBrand className="">
              <button className="Contact-sales-Button  text-primary ">
                <span className="text-two-nav-two"> Contact Sales</span>
              </button>
            </NavbarBrand>
            <NavbarBrand>
              <button className="Get-Started-Button bg-primary text-two-nav-two text-white">
                Gets Started-it's free
              </button>
            </NavbarBrand>
          </div>
        </Navbar>
        <Row className="bachahua d-flex align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center w-75">
            <h1 className="Heading-body d-flex justify-content-center w-75 text-center">
              Build With the Power of Code,without writting any
            </h1>

            <p className="w-50 text-center">
              Take control of HTML, CSS, and JavaScript in a visual canvas.
              Webflow generates clean, that’s ready to publish or hand to
              developers.
            </p>
            <button type="button" className="Start-Building text-white">
              start Building
            </button>
          </div>
        </Row>
      </Fragment>
    </>
  );
}

export default App;
