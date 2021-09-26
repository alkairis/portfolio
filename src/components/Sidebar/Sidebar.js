import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillMediumCircle } from "react-icons/ai";
import {FaStackOverflow} from 'react-icons/fa'

const Container = styled.div`
  left: 0;
  position: fixed;
  top: 50%;
  transform: translate(0px, -50%);

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

const Div3 = styled.div`
  display: grid;
  grid-template-columns: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    /* grid-area: 2 / 1 / 2 / 6; */
  }
`;

export const SocialIcons = styled.a`
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 8px;
  cursor: pointer;
  transition: 0.7s ease;

  &:hover > svg {
    transform: scale(1.3);
  }
`;

const Sidebar = () => (
  <Container>
    <Div3>
      <SocialIcons href="https://github.com/alkairis">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/alkairis/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://alkairis.medium.com/">
        <AiFillMediumCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://stackoverflow.com/users/13090289/deepak-singh-rajput">
        <FaStackOverflow size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/alkairis_/">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/alkairis_">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Sidebar;
