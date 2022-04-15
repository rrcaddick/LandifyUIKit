import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import H5 from "../../styled/H5.styled";
import Body from "../../styled/Body.styled";
import Img from "../../styled/Img.styled";
import PhoneMockup from "../../../images/PhoneMockup.svg";
import LaptopMockup from "../../../images/LaptopMockup.svg";
import { Colors } from "../../../Theme";

const Project = styled.section`
  padding: 8rem 16.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 52.6rem);
  column-gap: 3rem;
  row-gap: 6.4rem;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  :nth-child(1) {
    > div {
      justify-content: center;
      background-color: ${Colors.Accent.Cyan};
      > img {
        transform: translateY(4.8rem);
      }
    }
  }
  :nth-child(2) {
    > div {
      justify-content: center;
      background-color: ${Colors.Accent.CottonCandy};
      > img {
        transform: translateY(4.8rem);
      }
    }
  }
  :nth-child(3) {
    > div {
      justify-content: flex-end;
      background-color: ${Colors.Accent.LightPeach};
      > img {
        transform: translateY(4.8rem);
      }
    }
  }
  :nth-child(4) {
    > div {
      justify-content: flex-end;
      background-color: ${Colors.Accent.PastelGreen};
      > img {
        transform: translateY(4.8rem);
      }
    }
  }
`;

const ImageContainer = styled.div`
  background-color: ${Colors.Accent.Cyan};
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  border-radius: 0.8rem;
`;

const StyledImg = styled(Img)`
  position: absolute;
`;

const ProjectMultiple1 = () => {
  return (
    <Project>
      <H2>Some of my recent work</H2>
      <ProjectGrid>
        <ProjectCard>
          <ImageContainer>
            <StyledImg src={PhoneMockup} />
          </ImageContainer>
          <H5>Project Title</H5>
          <Body>iOS, IoT</Body>
        </ProjectCard>
        <ProjectCard>
          <ImageContainer>
            <StyledImg src={PhoneMockup} />
          </ImageContainer>
          <H5>Project Title</H5>
          <Body>Android, IoT</Body>
        </ProjectCard>
        <ProjectCard>
          <ImageContainer>
            <StyledImg src={LaptopMockup} />
          </ImageContainer>
          <H5>Project Title</H5>
          <Body>Web app</Body>
        </ProjectCard>
        <ProjectCard>
          <ImageContainer>
            <StyledImg src={LaptopMockup} />
          </ImageContainer>
          <H5>Project Title</H5>
          <Body>Web app</Body>
        </ProjectCard>
      </ProjectGrid>
    </Project>
  );
};

export default ProjectMultiple1;
