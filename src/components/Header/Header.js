import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumCircle,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { FaStackOverflow } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  Icons,
  NavLink,
  SocialIcons,
  Span,
  Title,
} from "./HeaderStyles";

const Header = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  return (
    <Container style={colorChange ? { backgroundColor: "#121212" } : null}>
      <Div1>
        <Link href="/">
          <Title>Alkairis</Title>
        </Link>
      </Div1>
      <Div3>
        <Icons>
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
        </Icons>
      </Div3>
    
      <Div2>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#technology">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact-me">
            <NavLink>Contact Me</NavLink>
          </Link>
        </li>
      </Div2>
      </Container>
  );
};

export default Header;
