import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
  filter:grayscale(100%) saturate(50%);
  transition: filter 0.5s ease-in-out;

  &:hover{
    filter: grayscale(0%);
  }
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 60% 40%;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 110%;
    grid-template-columns: 1fr;
  }
`;
export const TitleContent = styled.div`
  position: relative;
  text-align: justify;
  z-index: 20;
  width: 100%;
`;

export const StackContent = styled.div`
  position: relative;
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  margin-top: 0.5rem;
  margin-left: 5rem;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 2rem;
  }

`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const UtilityList = styled.div`
  position: absolute;
  right: 30px;
  top: 0;
  transform: translate(50%, -50%);
  display: flex;
  justify-content: flex-end;
  margin: 2.5rem 2rem;
`;

export const ExternalLinks = styled.a`
  color: white;
  background: none;
  transition: 0.5s;
  margin: 0 2rem;
  &:hover {
    box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
