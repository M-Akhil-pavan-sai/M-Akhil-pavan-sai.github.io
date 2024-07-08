import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #f4f4f4;
  padding: 40px 0;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Create three columns
  gap: 20px; // Space between cards
  max-width: 1200px; // Max width of the grid container
  margin: 0 auto; // Center the grid container horizontally
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Centers the content within each card
  padding: 20px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px; // Rounded corners for the card
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.05); // Slight pop effect on hover
  }
`;



const ProjectImage = styled.img`
  width: 100%; // Adjust this based on your actual image sizes
  height: auto;
  border-radius: 10px; // Rounded corners for the image
  margin-bottom: 20px;
`;

const Button = styled.a`
  display: inline-block;
  margin: 10px 5px;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: #007BFF; // Bootstrap primary color
  color: white;
  text-decoration: none;
  &:hover {
    background-color: #0056b3; // Darken color on hover
  }
`;

function Projects() {
  return (
    <Section id="projects">
      <h2>Projects</h2>
      <ProjectsContainer>
        <ProjectCard>
          <ProjectImage src="/project1.png" alt="Project One" />
          <h3>YouTube Comments Sentiment Analysis</h3>
          <p style={{textAlign:'justify'}}>This project offers an automated solution for performing sentiment analysis on YouTube video comments. Utilizing the powerful TensorFlow framework in conjunction with the YouTube Data API, it efficiently fetches comments from specified videos and employs machine learning models to analyze and classify the sentiment of each comment into categories such as positive and negative.</p>
          <Button href="https://github.com/M-Akhil-pavan-sai/YOUTUBE-COMMENTS-SENTIMENT-ANALYSIS">GitHub</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/set.png" alt="Project Two" />
          <h3>Smart Expense Tracker: A Full-Stack Expense Management System</h3>
          <p style={{textAlign:'justify'}}>Smart Expense Management System is a web application designed to assist individuals in managing their finances by tracking income and expenses efficiently. The application features a clean, intuitive interface that allows users to input and monitor their financial data, helping them to maintain control over their budget and understand their financial habits better.</p>
          <Button href="https://github.com/M-Akhil-pavan-sai/smart-expense-tracker">GitHub</Button>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/project3.png" alt="Project Three" />
          <h3>Fitness Guide</h3>
          <p style={{textAlign:'justify'}}>Fitness Guide is a Web application which helps you to maintain proper health depending on your BMI.
This web application takes the height and weight and gives you the BMI(Body Mass Index) and according to the BMI of the individual, one is given the proper diet to maintain normal BMI and the appropriate workouts to maintain the normal BMI. This process differs from one person to another based on their BMI value(Low, Medium, High).
Our Web app performs information collection, diagnosis, treatment.</p>
          <Button href="https://github.com/M-Akhil-pavan-sai/FitnessGuide">GitHub</Button>
        </ProjectCard>
      </ProjectsContainer>
    </Section>
  );
}

export default Projects;
