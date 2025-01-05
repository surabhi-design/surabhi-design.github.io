import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Header from './Header'; // Import Header

const MainBanner = () => {
  const [activeTab, setActiveTab] = useState('home'); // Track active section

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);

  // Function to detect which section is visible
  const handleScroll = () => {
    const homeOffset = homeRef.current.getBoundingClientRect().top;
    const projectsOffset = projectsRef.current.getBoundingClientRect().top;
    const aboutOffset = aboutRef.current.getBoundingClientRect().top;

    if (homeOffset <= 100 && homeOffset >= -100) {
      setActiveTab('home');
    } else if (projectsOffset <= 100 && projectsOffset >= -100) {
      setActiveTab('projects');
    } else if (aboutOffset <= 100 && aboutOffset >= -100) {
      setActiveTab('about');
    }
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Header activeTab={activeTab} /> {/* Pass activeTab dynamically */}
      <Section ref={homeRef} id="home" isHome>
        <ContentWrapper>
          <TextWrapper>
            <Title>Hi I'm a</Title>
            <Subtitle>Visual Designer</Subtitle>
            <Description>
              I'M SURABHI, AN ART DIRECTOR, AND A VISUAL DESIGNER <Highlight>BASED IN NEW YORK.</Highlight> DRIVEN BY A PASSION FOR PROBLEM-SOLVING, MY DESIGN PHILOSOPHY <Highlight>THRIVES ON VERSATILITY,</Highlight> AIMING TO ENCOMPASS DIVERSE FACETS. I CRAFT DESIGNS INFUSED WITH <Highlight>EMOTIONAL INTELLIGENCE</Highlight> SPECIALIZING IN CREATING <Highlight>IMPACTFUL DIGITAL EXPERIENCES,</Highlight> WITH EXPERTISE IN BRANDING, USER EXPERIENCE, AND MOTION DESIGN.
            </Description>
          </TextWrapper>
          <LabelsWrapper>
            <MotionLabel color="#DCE4CF" textColor="#030303" rotation="-4deg" marginRight="100px">
              <span className="text">MOTION DESIGN</span>
              <span className="code">DCE4CF</span>
            </MotionLabel>
            <MotionLabel color="#5A6E27" rotation="5deg" marginLeft="-20px">
              <span className="text">INTERACTION DESIGN</span>
              <span className="code">5A6E27</span>
            </MotionLabel>
            <MotionLabel color="#004735" rotation="-7deg" marginRight="100px">
              <span className="text">USER EXPERIENCE</span>
              <span className="code">004735</span>
            </MotionLabel>
            <MotionLabel color="#CE8EC0" rotation="7deg" marginLeft="20px">
              <span className="text">BRANDING</span>
              <span className="code">CE8EC0</span>
            </MotionLabel>
            <MotionLabel color="#FF9416" rotation="7deg" marginLeft="20px" marginRight="60px">
              <span className="text">TYPOGRAPHY</span>
              <span className="code">FF9416</span>
            </MotionLabel>
            <MotionLabel color="#C1DD17" textColor="#030303" rotation="-1deg" marginLeft="40px">
              <span className="text">USER INTERFACE</span>
              <span className="code">C1DD17</span>
            </MotionLabel>
          </LabelsWrapper>
        </ContentWrapper>
      </Section>
    </Wrapper>
  );
};

export default MainBanner;

const Wrapper = styled.div`
  background-color: #ebf5f4;
  color: #030303;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    padding: 0 40px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ isHome }) => (isHome ? '100vh' : 'auto')};
  padding: 20px;
  box-sizing: border-box;

  &:nth-child(odd) {
    background-color: #f7f7f7;
  }

  &:nth-child(even) {
    background-color: #ebf5f4;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 200px;
  flex-grow: 1;

  @media (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    flex-direction: column; /* Ensure stacking */
    align-items: center; /* Center content on small screens */
    margin-top: 20px; /* Reduce margin to avoid cutting */
    padding: 0 10px; /* Add padding for better spacing */
  }
`;

const TextWrapper = styled.div`
  flex: 3;
  margin-bottom: 50px;
  max-width: 650px;
  text-align: left;
  margin-left: 100px;
  margin-right: 200px;

  @media (max-width: 1440px) {
    max-width: 550px;
    margin-left: 80px;
    margin-right: 60px;
  }

  @media (max-width: 1024px) {
    text-align: left;
    margin-bottom: 30px;
    margin-left: 50px;
    margin-right: 40px;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    margin-left: 10px;
    margin-right: 10px;

    /* Generalized margin-top for small screens */
    margin-top: calc(10vh + 20px); /* Dynamically adjust based on viewport height */

    /* Fine-tuning for iPhone SE (320px width) */
    @media (max-width: 420px) {
      margin-top: 155px;
    }

    /* Fine-tuning for iPhone 14 Pro Max (430px width) */
    @media (min-width: 430px) and (max-width: 480px) {
      margin-top: 35px;
    }
  }
`;


const Title = styled.h2`
  font-family: 'flexalight', sans-serif;
  font-size: 48px;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 42px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h1`
  font-family: 'alpinaitalic', sans-serif;
  font-size: 96px;
  font-style: italic;
  margin: 10px 0 0;

  @media (max-width: 1440px) {
    font-size: 84px;
  }

  @media (max-width: 768px) {
    font-size: 72px;
  }

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

const Description = styled.p`
  font-family: 'flexalight', sans-serif;
  font-size: 15.5px;
  line-height: 1.6;
  max-width: 100%;
  text-align: left;

  span {
    font-family: 'flexabold', sans-serif;
  }

  @media (max-width: 1440px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Highlight = styled.span`
  font-family: 'flexabold', sans-serif;
  font-weight: bold;
`;

const LabelsWrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: 20px;
  margin-right: 20px;

  @media (max-width: 1024px) {
    align-items: center;
    margin-right: 0;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    margin-top: 20px;
  }

  @media (max-width: 480px) {
    align-items: center;
    margin-top: 10px;
  }
`;

const MotionLabel = ({ color, rotation, textColor, marginLeft, marginRight, children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setOffset({ x: x / 10, y: y / 10 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 }); // Reset offset when the mouse leaves
  };

  return (
    <Label
      color={color}
      rotation={rotation}
      textColor={textColor}
      marginLeft={marginLeft}
      marginRight={marginRight}
      offsetX={offset.x}
      offsetY={offset.y}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Label>
  );
};

const Label = styled.a`
  font-family: 'Helvetica', sans-serif;
  font-size: 16px;
  color: ${({ textColor }) => textColor || '#ffffff'};
  background-color: ${({ color }) => color};
  padding: 15px 25px;
  margin-bottom: 15px;
  transform: rotate(${({ rotation }) => rotation});
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  text-align: right;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  margin-left: ${({ marginLeft }) => marginLeft || '0'};
  margin-right: ${({ marginRight }) => marginRight || '0'};

  &:hover {
    transform: translate(${({ offsetX }) => `${offsetX}px`}, ${({ offsetY }) => `${offsetY}px`})
      rotate(${({ rotation }) => `calc(${rotation} + 10deg)`})
      scale(1.1);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  }

  .text {
    flex: 1;
    text-align: left;
  }

  .code {
    flex: 0;
    text-align: right;
    margin-left: 20px;
    font-family: 'Courier New', monospace;
  }

  @media (max-width: 768px) {
    width: 250px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    width: 200px;
    padding: 8px 15px;
    font-size: 14px;
  }
`;
