import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: #f9f9f9;
  padding: 40px 20px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  color: #333;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns for awards and volunteering
  gap: 20px;
  justify-content: center;
  align-items: start;
  max-width: 1200px;
  margin: 0 auto;
`;

const SubSection = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SubTitle = styled.h3`
  color: #007bff; // A soft blue that can be adjusted to fit your design
`;

const ListItem = styled.li`
  text-align: left;
  margin-bottom: 10px;
  font-size: 16px;
  list-style-type: none; // Removes bullet points
`;

const List = styled.ul`
  padding-left: 0; // Removes default padding
`;

function AwardsVolunteer() {
  return (
    <Section id='volunteer'>
      <Title>Awards & Volunteer Work</Title>
      <ContentContainer>
        <SubSection>
          <SubTitle>Awards</SubTitle>
          <List>
            <ListItem>Code-a-thon Winner - 1st Place in ACM competitive coding event</ListItem>
            <ListItem>Best Innovative Project Award at University Tech Fair 2021</ListItem>
            {/* More awards can be added here */}
          </List>
        </SubSection>
        <SubSection>
          <SubTitle>Volunteer Work</SubTitle>
          <List>
            <ListItem>Local Student Volunteer at IEEE VR 2024 International Conference</ListItem>
            <ListItem>Community Tech Classes - Taught introductory coding to high school students</ListItem>
            {/* More volunteer activities can be added here */}
          </List>
        </SubSection>
      </ContentContainer>
    </Section>
  );
}

export default AwardsVolunteer;
