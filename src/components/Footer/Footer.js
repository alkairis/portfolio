import React from "react";
import { FcPhoneAndroid } from "react-icons/fc";
import {BsFillEnvelopeFill, BsArrowRight} from "react-icons/bs"

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call In <FcPhoneAndroid size="1.5rem"/></LinkTitle>
          <LinkItem href="tel:+919644945358">+91 9644945358</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email <BsFillEnvelopeFill size="1.5rem" color="red"/></LinkTitle>
          <LinkItem href="mailto:deepaksinghrajput0711">Mail Me</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Keep moving forward <BsArrowRight size="1.5rem" color="white"/> </Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
