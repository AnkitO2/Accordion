import React, { Fragment } from "react";
import { Row, Col, Container } from "reactstrap";
import { } from "feather-icons-react";
function Firstdropdown() {
  return (
    <>
      <Container >
        <Row>
          <Col md={8}>
            <Row className="border-bottom pt-3">
              <h6>Build A Website</h6>
            </Row>
            <Row>
              <Col>
                <div className="mt-3">
                  <h4>Designer</h4>
                 <span>Creative Control and flexbility Without Code</span>
                </div>
              </Col>
              <Col>
                <div className="mt-3">
                  <h4>CMS</h4>
                  <p>Flexible content management</p>
                </div>
              </Col>
              <Col>
                <div className="mt-3">
                  <h4>E-Commerce</h4>
                  <p>Manage stunning online store</p>
                </div>
              </Col>
             
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Firstdropdown;
