import React from 'react';
import styled from 'styled-components';
import SurabhiAboutImage from './surabhi2.jpeg'; 
import HelveticaSurabhiImage from './helveticasurabhi.png';
import Surabhi3 from './surabhi3.png';
import Surabhi4 from './surabhi4.png';
import Surabhi5 from './surabhi5.png';
import Surabhi6 from './surabhi6.png';
import { FaEnvelope } from 'react-icons/fa';
import SurabhiResume from './surabhiresume.pdf';

const About = () => {
  return (
    <AboutWrapper>
      <Heading>About Me</Heading> {/* Move Heading outside Content for left alignment */}
      <Content>
        <TextImageWrapper>
          <ProfileImage src={SurabhiAboutImage} alt="Surabhi Singh" />
          <TextWrapper>
            <Paragraph>
            I am so passionate about good design that I travelled to Lyon, France to volunteer at WorldSkills Competition just so that I could identify the world design trends.
            <br /> 
With experience of over 4 years, I am fluent in Adobe Creative Suite, Figma, Cinema 4D, and Microsoft Office. I definitely know my softwares.
<br /> 
With a strong foundation of design principles, I have done my homework on what makes a design intuitive and magical. My designs work just the way you expect them to work. 
<br />
Being a Digital Designer, I am always curious about the design of other things. As a student of Vignelli’s I am a firm believer of Design is One. Hence if you can design one thing, you can design anything. 
              <br />
              Talk to me about:
              <ul>
                <li>Design</li>
                <li>Chess</li>
                <li>Travel</li>
                <li>Harry Potter books</li>
              </ul>
              <Email href="mailto:singhsurabhi.design@gmail.com">
                <FaEnvelope /> singhsurabhi.design@gmail.com
              </Email>
              <ResumeButton href={SurabhiResume} target="_blank" rel="noopener noreferrer">View Resume</ResumeButton>
            </Paragraph>
          </TextWrapper>
        </TextImageWrapper>
        
        <HelveticaSurabhiWrapper>
          <HelveticaSurabhiImageStyled src={HelveticaSurabhiImage} alt="Helvetica Surabhi" />
        </HelveticaSurabhiWrapper>

        <OverlayWrapper>
          <ImageWrapper>
            <MotionLabel color="#FF6F00">
              <span className="text">L.L.Bean HQ</span>
              <span className="code">ME</span>
            </MotionLabel>
            <OverlayImage src={Surabhi3} alt="Image 3" />
          </ImageWrapper>
          <ImageWrapper>
            <MotionLabel color="#D184C5">
              <span className="text">Bar Harbor</span>
              <span className="code">ME</span>
            </MotionLabel>
            <OverlayImage src={Surabhi4} alt="Image 4" />
          </ImageWrapper>
          <ImageWrapper>
            <MotionLabel color="#4F7043">
              <span className="text">Japanese Garden</span>
              <span className="code">NY</span>
            </MotionLabel>
            <OverlayImage src={Surabhi5} alt="Image 5" />
          </ImageWrapper>
          <ImageWrapper>
            <MotionLabel color="#31521F">
              <span className="text">NYC Library</span>
              <span className="code">NY</span>
            </MotionLabel>
            <OverlayImage src={Surabhi6} alt="Image 6" />
          </ImageWrapper>
        </OverlayWrapper>
      </Content>
    </AboutWrapper>
  );
};

export default About;

const AboutWrapper = styled.div`
  background-color: #EBF5F4;
  color: #000;
  padding: 0 20px;
  max-width: 100vw;
  overflow-x: hidden;
`;

const Heading = styled.h1`
  font-family: 'alpinaitalic', serif;
  font-size: 48px;
  margin: 70px 0 20px 50px; /* Increased top margin for spacing */
  color: #030303;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 36px;
    margin: 50px 0 20px 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 40px 0 20px 20px;
  }
`;


const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 40px;
  font-family: 'flexalight', sans-serif;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
  }
`;

const Email = styled.a`
  font-size: 18px;
  margin-top: 14px;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 12px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const TextImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease-out forwards;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;


const ProfileImage = styled.img`
  width: 600px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
  text-align: left;
  padding: 0 20px;
  opacity: 0;
  animation: fadeIn 1.2s ease-out forwards 0.5s;

  @media (max-width: 1024px) {
    padding: 0;
    text-align: center;
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #000;
    transition: color 0.3s ease;
  }
`;

const MotionLabel = styled.div`
  position: absolute;
  top: 20px;
  left: 125px;
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  color: #fff;
  background-color: ${({ color }) => color};
  padding: 8px 15px;
  text-align: left;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;


  .text {
    flex: 1;
    text-align: left;
  }

  .code {
    flex: 0;
    text-align: right;
    margin-left: 10px;
    font-family: 'Courier New', monospace;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
    width: 120px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 5px 10px;
    width: 100px;
  }
`;

const HelveticaSurabhiWrapper = styled.div`
  width: 100%;
  margin: 20px 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease-out forwards;
`;

const HelveticaSurabhiImageStyled = styled.img`
  width: 100%;
  height: auto;
  transition: filter 0.3s ease;

  &:hover {
    filter: grayscale(100%);
  }
`;

const OverlayWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: -150px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: -100px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 22%;
  height: auto; /* Ensure height adjusts to image */
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 80%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const OverlayImage = styled.img`
  width: 100%;
  height: auto; /* Adjusts height proportionally */
  object-fit: cover; /* Ensures image covers the container fully */
  border-radius: 8px;
`;

