import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Creative Chatting App Logo.png";
import projImg2 from "../assets/img/GraduateUsLogo.png";
import projImg3 from "../assets/img/Orientation pass.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "ChatApp DOOGLE",
      description: "This chat application DOOGLE helps one effortlessly communicate with people anywhere in the world by sending and receiving messages in real time.This project provides the instant communication functionality between users",
      imgUrl: projImg1,
    },
    {
      title: "Graduate Us",
      description: "• Developed backend of Official Website of GraduateUs using Node.js, Express.js , MongoDB and Socket.io • Implemented Authentication functionality, Realtime message sending functionality and a Community Chat",
      imgUrl: projImg2,
    },
    {
      title: "Ticket Generator",
      description: "• It’s a ticket generating webpage where user can input name and photo to get a beautiful ticket for the event.• Used the tech stack of HTML, CSS, Javascript and Firebase",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Welcome to my project section! Here, you will find a collection of web development projects that I have worked on. From Chat-App websites to custom web applications, these projects showcase my skills and expertise in various technologies and frameworks. Each project includes a brief description, screenshots, and links to live demos or repositories on Github. I hope you enjoy browsing through my work and feel free to reach out if you have any questions or feedback.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
