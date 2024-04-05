import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import reactnative from "../../Assets/Projects/reactnative.jpg";
import chatify from "../../Assets/Projects/chatify.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to  hangout with friends build with MERN. Have features which allows user for realtime messaging  as well as supports reactions on messages."
              ghLink="https://github.com/Abinayasrinivasan305/mern-chat-app"
              demoLink="https://mern-chat-app-jvy8.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="A Ecommerce website is developed using MERN with backend,frontend,admin panel.Using admin panel admin can add new products and its prices,categories...Each time it update with website and database."
              ghLink="https://github.com/Abinayasrinivasan305/Ecommerce"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactnative}
              isBlog={false}
              title="React Native Sample Projects"
              description="Using React Native I completed a basic projects like Goals App,BMI calculator,Imperical to metric conversion system which i deployed in expo platform...Moving forward, I'm eager to continue learning and expanding my skills to develop even more."
              ghLink="https://github.com/Abinayasrinivasan305/React-Native-Sample-projects"
              demoLink="https://expo.dev/accounts/abinayaparameswari"
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
