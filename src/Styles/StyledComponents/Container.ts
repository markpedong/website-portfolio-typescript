import { Container } from "@mantine/core";
import styled from "styled-components";

type Props = {
  position: "center" | "space-between" | "start" | "end";
  direction: "row" | "column" | "row-reverse" | "column-reverse";
};

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: ${(props: Props) => props.position};
  align-items: ${(props: Props) => props.position};
  flex-direction: ${(props: Props) => props.direction};
`;

export const WhiteContainer = styled(Container)`
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(196, 196, 196, 1) 100%
  );
`;

export const GridContainer = styled(Container)`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2, 1fr);
  padding-inline: 0;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const SkillContainer = styled(Container)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 7fr;
  width: 464px;
  text-align: left;

  @media screen and (max-width: 992px) {
    padding-inline: 0;
    margin-block-end: 2rem;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;
