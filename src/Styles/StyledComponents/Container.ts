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
