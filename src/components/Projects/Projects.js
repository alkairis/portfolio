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
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>{
        projects.map(({title, description, image, tags, source, visit}, index) => (
          <BlogCard key={index}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree >{title}</HeaderThree>
              <Hr/>
              <CardInfo>{description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={visit}>
                  Code
                </ExternalLinks>
                <ExternalLinks href={source}>
                  Source
                </ExternalLinks>
              </UtilityList>
            </TitleContent>
          </BlogCard>
        ))}</GridContainer>
    </Section>
  );
};

export default Projects;
