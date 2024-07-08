import React from 'react';
import styled from 'styled-components';
import FileSaver from 'file-saver';


const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background: white;
`;

const Navbar = styled.nav`
  width: 100%;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const NavLink = styled.a`
  padding: 10px 15px;
  margin: 0 10px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #555;
  }
`;

const Content = styled.div`
  text-align: center;
  margin-top: 60px; /* Adjust based on the height of the Navbar */
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin: 0;
`;

const Title = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const Button = styled.a`
  padding: 10px 20px;
  border-radius: 20px;
  background: #000;
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  display: inline-block;

  &:hover {
    background: #333;
  }
`;

const handleDownload = () => {
  FileSaver.saveAs(
    process.env.PUBLIC_URL + '/Akhil-Pavan-Sai-Machavaram-Resume.pdf', 
    'Akhil-Pavan-Sai-Machavaram-Resume.pdf'
  );
};

function Header() {
  return (
    <>
      <Navbar>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#volunteer">Awards & Volunteer</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navbar>
      <HeaderContainer style={{alignItems:'center',justifyContent:'center'}}>
        <Content >
          <ProfileImage src="/prof.jpg" alt="John Doe" />
          <Name>Akhil Pavan Sai Machavaram</Name>
          <Title>Software Engineer</Title>
          <Button onClick={handleDownload}>Download Resume</Button>
          <Button href="mailto:akhilpavansai74@gmail.com">Contact Info</Button>
        </Content>
      </HeaderContainer>
    </>
  );
}

export default Header;
