import styled from "styled-components";
import { Text } from "@mantine/core";

export const BlackText = styled(Text)`
  padding-block: 1rem;
  transition: all 0.2s ease;

  &:hover {
    color: black;
    background-color: white;
    width: 100%;
  }
`;

export const WhiteText = styled(Text)`
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: black;
    background-color: white;
    padding: 0.4rem 0.7rem;
    border-radius: 0.5rem;
  }
`;
