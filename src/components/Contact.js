import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: white;
  padding: 20px;
  text-align: center;
`;

function Contact() {
  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <p>Email: akhilpavansai74@gmail.com</p>
      <p>LinkedIn: [https://www.linkedin.com/in/machavaram-akhil-pavan-sai/]</p>
    </Section>
  );
}

export default Contact;
