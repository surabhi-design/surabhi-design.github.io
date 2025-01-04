// Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Bio>
          <h2>Surabhi Singh</h2>
          <p>UX Designer | Creative Thinker | Problem Solver</p>
          <Quote>"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs</Quote>
        </Bio>
        <SocialIcons>
          <IconLink
            href="https://www.linkedin.com/in/design-surabhi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </IconLink>
          <IconLink
            href="https://www.behance.net/surabhisingh1/projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaBehance size={30} />
          </IconLink>
          <IconLink
            href="mailto:singhsurabhi.design@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope size={30} />
          </IconLink>
        </SocialIcons>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 Surabhi Singh. All rights reserved.</p>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 40px 20px;
  background-color: #000;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Bio = styled.div`
  margin-bottom: 20px;

  h2 {
    font-size: 28px;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 18px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const Quote = styled.p`
  font-size: 16px;
  font-style: italic;
  color: #ccc;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ccc;
  }
`;

const FooterBottom = styled.div`
  font-size: 14px;
  color: #aaa;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
