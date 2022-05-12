import { Container } from "@mantine/core";
import styled from "styled-components";

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WhiteContainer = styled(Container)`
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(196, 196, 196, 1) 100%
  );
`;
