import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #f4f4f4;
  padding: 40px 20px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ProfileImage = styled.img`
  width: 400px;
  height: 350px;
  border-radius: 10%;
  object-fit: cover;
  margin-right: 50px; // Space between the image and the info cards
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

const InfoCard = styled.div`
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  margin: 10px 10px;
  flex: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
`;

const CardContent = styled.p`
  font-size: 1rem;
  color: #666;
`;

function About() {
  return (
    <Section id="about">
      <h2>Get To Know More</h2>
      <h3>About Me</h3>
      <Container>
        <ProfileImage src="/volunteer.png" alt="Akhil Pavan Sai Machavaram" />
        <div style={{width:'50%',padding:'20px'}}>
          <InfoCard>
            <CardTitle>Experience</CardTitle>
            <CardContent>2+ years in Full Stack Web Application Development & Mobile Application Development </CardContent>
          </InfoCard>
          <InfoCard>
            <CardTitle>Education</CardTitle>
            <CardContent>Bachelor Of Engineering In Computer Science & Engineering (B.E C.S.E)<br/>Master Of Science In Computer Science (MS CS)</CardContent>
          </InfoCard>
          <p style={{textAlign:'justify'}}>A seasoned Software Engineer with a robust background in full-stack development, specializing in creating dynamic web and mobile applications using the MERN stack and React Native. With experience at ZeMoSo Technologies, I've led and contributed to projects that enhanced user engagement and operational efficiency through innovative features and user-centric design. My expertise spans across front-end and back-end technologies, including React, NodeJS, MongoDB, and advanced tools like Cypress and TensorFlow for machine learning applications. Currently pursuing a Master’s in Computer Science at the University of Central Florida, I am passionate about leveraging cutting-edge technologies to solve complex problems and drive business success. Open to opportunities that challenge my skill set and contribute to my professional growth</p>
        </div>
      </Container>
        </Section>
  );
}

export default About;
