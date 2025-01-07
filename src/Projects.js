import React from 'react';
import styled from 'styled-components';
import p1Video from './p1.mp4';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';
import p5 from './p5.png';

import Header from './Header'; // Import the Header component

const Projects = () => {
  const projectData = [
    {
      title: "GreenMind",
      description: `Greenmind is a website that promotes positive climate narratives for environmentally conscious individuals seeking hope and actionable solutions.`,
      video: p1Video,
      link: "https://www.figma.com/proto/hbABR9CVMz9bod50InohZM/Greenmind-Website-UI?page-id=191%3A28&node-id=191-29&viewport=300%2C1504%2C0.14&t=qRDrEVjBZtCo4bh8-1&scaling=scale-down-width&content-scaling=fixed",
      label: { text: "USER EXPERIENCE", color: "#004735", code: "004735", rotation: "-4deg", marginRight: "100px", textColor: "#FFFFFF" }
    },
    {
      title: "FindFreeFood",
      description: `Find free food is a mobile application designed for students on campus to - you guessed it - find free food! This app keeps track of all the events going on campus and sends alerts whenever there is free food nearby.`,
      image: p2,
      link: "https://www.figma.com/proto/NspGcwBdveeytsVCci2FMx/Surabhi-Singh---Pitch-Course-Project?page-id=528%3A1262&node-id=530-1059&viewport=389%2C176%2C0.08&t=PnfUBU9qZoWmiYiH-1&scaling=scale-down-width&content-scaling=fixed",
      label: { 
        text: "INTERACTIVE DESIGN", 
        color: "#5A6E27", 
        code: "#5A6E27", 
        rotation: "5deg", 
        marginLeft: "-20px",
        textColor: "#FFFFFF" 
      }
    },
    {
      title: "Derma-e",
      description: `Redesigning a Pharmaceutical skin care brand to make it more visually appealing and creating a numeric system that makes skincare as easy as 1 2 3.`,
      image: p3,
      link: "https://www.behance.net/gallery/176141145/Derma-E-RebrandingCasestudy",
      label: { 
        text: "BRANDING", 
        color: "#CE8EC0", 
        code: "#CE8EC0", 
        rotation: "-7deg", 
        marginRight: "100px",
        textColor: "#FFFFFF"
      }
    },
    {
      title: "Riff",
      description:  `
      Riff is a hypothetical music label company, with a soda on the side!
It's a harmonious blend of refreshment and rhythm, where every sip is a note in a delicious symphony. Whether you're into the classics or the latest hits, Riff is here to quench your thirst for both music and refreshment.
      `,
      image: p4,
      link: "https://vimeo.com/880016031?share=copy",
      label: { text: "MOTION DESIGN", color: "#DCE4CF", code: "#DCE4CF", rotation: "7deg", marginLeft: "20px" }
    },
    {
      title: "Jazz Music Festival",
      description: "The goal of this project was to explore the relationship between type and image. This brochure is text-heavy but avoids information overload.",
      image: p5,
      link: "https://www.behance.net/gallery/169089697/Rochester-Jazz-Festival-Brochure",
      label: { text: "TYPOGRAPHY ", color: "#FF9416", code: "#FF9416", rotation: "7deg", marginLeft: "20px", marginRight: "60px",textColor: "#FFFFFF" }
    },
  ];

  return (
    <Wrapper>
      <Header activeTab="projects" /> {/* Header with activeTab to set color */}
      <Heading>Work</Heading> {/* Add the Work heading */}
      <ProjectsWrapper>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ImageWrapper>
              {project.video ? (
                <ProjectVideo src={project.video} muted autoPlay loop />
              ) : (
                <ProjectImage src={project.image} alt={project.title} />
              )}
              <MotionLabel
                color={project.label.color}
                rotation={project.label.rotation}
                textColor={project.title === "Riff" ? "#000000" : "#FFFFFF"} // Conditionally set text color
                marginLeft={project.label.marginLeft}
                marginRight={project.label.marginRight}
              >
                <span className="text">{project.label.text}</span>
                <span className="code">{project.label.code}</span>
              </MotionLabel>
            </ImageWrapper>
            <TextWrapper>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ViewButton href={project.link} target="_blank" rel="noopener noreferrer">View Project</ViewButton>
            </TextWrapper>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  width: 100%;
  background-color: #0d1116; /* Set background color to match header */
  color: #fff;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 50px 20px;
  width: 100%;
`;
const Heading = styled.h1`
  font-family: 'alpinaitalic', serif;
  font-size: 48px;
  color: #FFFFFF;
  text-align: left;
  margin: 30px 50px;

  @media (max-width: 1024px) {
    margin: 20px 30px;
    font-size: 32px;
  }

  @media (max-width: 768px) {
    margin: 15px 20px;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    margin: 10px 15px;
    font-size: 24px;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  margin-bottom: 40px;
  padding: 0;
  width: 95%;
  max-width: 1500px;


  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    padding: 0 15px; /* Add padding to prevent cut-off */
  }

  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    padding: 0 15px; /* Add padding to prevent cut-off */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0 15px; /* Add padding to prevent cut-off */
  }
`;

const ProjectImage = styled.img`
  width: 670px;
  height: 312px;
  border-radius: 15px;
  object-fit: cover;
  opacity: 1;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }
`;

const ProjectVideo = styled.video`
  width: 670px;
  height: 312px;
  border-radius: 15px;
  object-fit: cover;
  opacity: 1;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }
`;

const ImageWrapper = styled.div`
  flex: 2;
  position: relative;
  margin-right: 40px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0 50px;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 20px;
    padding: 0 50px;
  }
`;

const MotionLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: 'flexalight', sans-serif;
  font-size: 14px;
  background-color: ${({ color }) => color};
  padding: 8px 15px;
  transform: rotate(${({ rotation }) => rotation});
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  text-align: right;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  margin-left: ${({ marginLeft }) => marginLeft || '0'};
  margin-right: ${({ marginRight }) => marginRight || '0'};

  &:hover {
    transform: translate(-5px, -5px) rotate(${({ rotation }) => `calc(${rotation} + 10deg)`});
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  }

  .text {
    flex: 1;
    text-align: left;
    color: ${({ textColor }) => textColor || '#ffffff'}; /* Apply textColor */
  }

  .code {
    flex: 0;
    text-align: right;
    margin-left: 10px;
    font-family: 'Courier New', monospace;
    color: ${({ textColor }) => textColor || '#ffffff'}; /* Apply textColor */
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: color 0.3s ease-in-out;
  width: 100%; /* Ensure it takes the full width */

  @media (max-width: 767px) {
    text-align: center; /* Center text on mobile */
    width: 100%;
  }

  @media (max-width: 480px) {
    text-align: center;
    width: 100%;
  }
`;
const ProjectTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #FFFFFF;
  margin-left: -250px;

  @media (max-width: 1024px) {
    margin-left: 0;
    text-align: center; /* Center-align for tablets */
  }

  @media (max-width: 767px) {
    font-size: 24px;
    margin-left: 0;
    text-align: center; /* Center-align for mobile */
  }

  @media (max-width: 480px) {
    margin-left: 0;
    text-align: center; /* Center-align for small screens */
  }
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-left: -250px;
  line-height: 1.6;
  color: #ddd;
  word-wrap: break-word;
  padding-right: 10px;

  @media (max-width: 1024px) {
    margin-left: 0;
    padding: 0 50px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin-bottom: 15px;
    margin-left: 0;
    padding: 0 50px; /* Increased padding to prevent cutting off */
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-left: 0;
    padding: 0 50px; /* Increased padding to prevent cutting off */
    text-align: center;
  }
`;

const ViewButton = styled.a`
  align-self: flex-start;
  padding: 10px 20px;
  font-size: 18px;
  color: #000;
  background-color: #FFFFFF;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  z-index: 1;
  position: relative;
  margin-left: -250px;

  @media (max-width: 1024px) {
    margin-left: 0;
    align-self: center; /* Center button on tablets */
  }

  @media (max-width: 767px) {
    padding: 8px 16px;
    font-size: 16px;
    margin-left: 0;
    align-self: center; /* Center button on mobile */
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 16px;
    margin-left: 0;
    align-self: center; /* Center button on small screens */
  }

  &:hover {
    background-color: #fff;
    color: #000;
    transform: translateY(-3px);
  }
`;
