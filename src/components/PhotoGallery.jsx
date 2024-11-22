import React from "react";
import "../css/PhotoGallery.css";
import { Col, Container, Row } from "react-bootstrap";
import useWindowSize from "../customHooks/useWindowSize";

const PhotoGallery = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <Container fluid="md">
      <Row>
        <Col xs={12}>
          <h2 className="section-title text-center">Thư viện ảnh</h2>
        </Col>
        {isMobile ? (
          // Mobile Layout
          <>
            <Col xs={6} className="p-10">
              <div className="small gray"></div>
            </Col>
            <Col xs={6} className="p-10">
              <div className="small gray"></div>
            </Col>
            <Col xs={12} className="p-10">
              <div className="large orange"></div>
            </Col>
          </>
        ) : (
          // Desktop Layout
          <>
            <Col md={9} className="p-10">
              <div className="large orange"></div>
            </Col>
            <Col md={3} className="p-10">
              <div className="small gray"></div>
            </Col>
            <Col md={3} className="p-10">
              <div className="small gray"></div>
            </Col>
            <Col md={9} className="p-10">
              <div className="large orange"></div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default PhotoGallery;
