import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  StackContent
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import {VscGithub } from 'react-icons/vsc'
import {CgArrowTopRightR } from 'react-icons/cg'

const Projects = () => {
  return (
    <Section id="projects">
      <SectionDivider /><br/>
      <SectionTitle>Some Things I have build</SectionTitle>
      <GridContainer>{
        projects.map(({title, description, image, tags, source, visit, time}, index) => (
          <BlogCard key={index}>
            {index/2===1 || index===0 ? <Img src={image}/> : null}
            <TitleContent>
              <HeaderThree >{title}</HeaderThree>
              <CardInfo>{description}</CardInfo>
              <br/>
              <CardInfo>Time took to build <strong>{time}</strong></CardInfo>
              <Hr/>
              <div>
                <StackContent>Stack</StackContent>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                {source ? <ExternalLinks href={source}>
                  <VscGithub size="2rem"/>
                </ExternalLinks> : null}
                <ExternalLinks href={visit}>
                  <CgArrowTopRightR size="2rem"/>
                </ExternalLinks>
              </UtilityList>
            </TitleContent>
            {index/2!==1 && index!==0 ? <Img src={image}/> : null}
          </BlogCard>
        ))}</GridContainer>
    </Section>
  );
};

export default Projects;
