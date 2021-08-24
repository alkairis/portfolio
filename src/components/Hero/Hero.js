import React from "react";

import {
  Section,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, Inline } from "./HeroStyles";
import Typewriter from "typewriter-effect";


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there{" "}
        <img
          src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif"
          width="30px"
        />
        , <br />I am Deepak Singh Rajput!<br/>
        <Inline>
        <span>I am a </span><Typewriter
          options={{
            strings: ["Developer ", "Blogger"],
            autoStart: true,
            loop: true,
          }}
        />
        </Inline>
      </SectionTitle>
      <SectionText>
        I'm always converting JSON data in human understandable format.
      </SectionText>
      <Button onClick={() => (window.location = "")}>
        Download Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
