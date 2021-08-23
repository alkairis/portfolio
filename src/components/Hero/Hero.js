import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        Alkairis
      </SectionTitle>
      <SectionText>
        The The The The The The The The The The The The The The The The The The The The The The The The The The The The The The The The The
      </SectionText>
      <Button onClick={()=>window.location="https://dd"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;