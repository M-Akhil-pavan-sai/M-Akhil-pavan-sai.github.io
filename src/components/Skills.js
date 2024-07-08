import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: white;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const SkillsContainer = styled.div`
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  //justify-content: space-evenly;
  align-items: center;
`;

const SkillCategory = styled.div`
  margin-bottom: 40px;
`;

const CategoryName = styled.h3`
  margin: 20px 0;
  font-size: 18px;
`;

const Skill = styled.div`
  display: flex;
  flex: 1;;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 8px;
`;

const SkillName = styled.span`
  font-size: 14px;
  color: #333;
`;

function Skills() {
  return (
    <Section id='experience'>
      <Title>Skills</Title>
      
      <SkillCategory>
        <CategoryName>Programming Languages</CategoryName>
        <SkillsContainer>
          <Skill>
            <SkillIcon src="/python.png" alt="Python" />
            <SkillName>Python</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/java.png" alt="Java" />
            <SkillName>Java</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/cpp.png" alt="C++" />
            <SkillName>C++</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/c.png" alt="C" />
            <SkillName>C</SkillName>
          </Skill>
        </SkillsContainer>
      </SkillCategory>
      
      <SkillCategory>
        <CategoryName>Machine Learning & Data Science Technologies</CategoryName>
        <SkillsContainer>
          <Skill>
            <SkillIcon src="/tensorflow.png" alt="TensorFlow" />
            <SkillName>TensorFlow</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/pytorch.png" alt="PyTorch" />
            <SkillName>PyTorch</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/sklearn.png" alt="Sklearn" />
            <SkillName>Sklearn</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/powerbi.png" alt="PowerBi" />
            <SkillName>PowerBI</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/r.png" alt="R" />
            <SkillName>R</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/flask.png" alt="Flask" />
            <SkillName>Flask</SkillName>
          </Skill>
          {/* Additional skills like Node.js, Flask, etc. */}
        </SkillsContainer>
      </SkillCategory>


      <SkillCategory>
        <CategoryName>Full Stack Web Application Development & Mobile Application Development Technologies</CategoryName>
        <SkillsContainer>
          <Skill>
            <SkillIcon src="/react.png" alt="React" />
            <SkillName>React</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/springboot.png" alt="Spring Boot" />
            <SkillName>Spring Boot</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/nodejs.png" alt="Node JS" />
            <SkillName>NodeJS</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/mysql.png" alt="MySQL" />
            <SkillName>MySQL</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/mongodb.png" alt="MongoDB" />
            <SkillName>MongoDB</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/bootstrap.png" alt="Bootstrap" />
            <SkillName>Bootstrap</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/html.png" alt="HTML" />
            <SkillName>HTML</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/css.png" alt="CSS" />
            <SkillName>CSS</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/javascript.png" alt="Javascript" />
            <SkillName>Javascript</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/typescript.png" alt="Typescript" />
            <SkillName>Typescript</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/oauth.png" alt="OAuth" />
            <SkillName>OAuth</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/docker.png" alt="Docker" />
            <SkillName>Docker</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/aws.png" alt="AWS" />
            <SkillName>AWS</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/cypress.png" alt="Cypress" />
            <SkillName>Cypress</SkillName>
          </Skill>
          <Skill>
            <SkillIcon src="/reactnative.png" alt="ReactNative" />
            <SkillName>React Native</SkillName>
          </Skill>
          {/* Additional skills like Node.js, Flask, etc. */}
        </SkillsContainer>
      </SkillCategory>


     
      {/* Repeat for other categories like Database Management Systems, Mobile Development, etc. */}

    </Section>
  );
}

export default Skills;
