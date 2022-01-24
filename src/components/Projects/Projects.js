import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drimage from "../../Assets/Projects/drimage.png";
import grains from "../../Assets/Projects/grains.png";
import covid from "../../Assets/Projects/covid.PNG";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid-19 Dashboard."
              description="The website developed using Django framework displays the records of covid-19 details
              (like deaths, recovery rate, infected rate, etc.) using API. The website allows the user to search the covid-19 
              details based on country name which also contains the FAQ’s of covid-19 vaccine."
              link="https://github.com/Sneha677/COVID-19-dashboard.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drimage}
              isBlog={false}
              title="Grading of Diabetic Retinopathy"
              description="he domain of this project is image processing using python programming language.The main objective of this project is to classify the DR into 5 categories (No-DR, Mild,
                Moderate, Severe, Proliferative) using CNN model.Kaggle APTOS-2019 and EyePACS datasets are used."
              link="https://github.com/Sneha677/Automated-Grading-of-Diabetic-Retinopathy.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grains}
              isBlog={false}
              title="Grading of rice grains."
              description="Image Processing domain using python language. The main objective of this project is to grade the rice grain images as gradeA, gradeB,
              gradeC based on its morphological and geometrical features."
              link="https://github.com/Sneha677/Rice-Grain-Grading.git"
            />
          </Col>
  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
