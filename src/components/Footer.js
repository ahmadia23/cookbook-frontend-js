import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  const workingProgressNotice = (e) => {
    e.target.style = "cursor: progress";
    e.target.innerText = "In Progress";
  };
  const removeProgressNotice = (e) => {
    e.target.style = "cursor: pointer";
    e.target.innerText = "IA";
  };

  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Me</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">My Profile</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="cookbooks">Cookbooks</FooterLink>
            <FooterLink href="new">Creation</FooterLink>
            <FooterLink href="cookbooks/recipes">Recipes</FooterLink>
            <FooterLink
              href="#"
              onMouseOver={workingProgressNotice}
              onMouseLeave={removeProgressNotice}
            >
              IA
            </FooterLink>
          </Column>
          <Column>
            <Heading>Contact Me</Heading>
            <FooterLink
              href="https://www.linkedin.com/in/ahmadou-dia-47337710a/"
              target={"_blank"}
            >
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://www.instagram.com/ahma_dia/"
              target={"_blank"}
            >
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://twitter.com/Ahmadou78828895"
              target={"_blank"}
            >
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink
              href="https://www.youtube.com/watch?v=_8g3QtiEXC0"
              target={"_blank"}
            >
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
