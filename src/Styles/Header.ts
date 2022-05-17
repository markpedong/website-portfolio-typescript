import { Burger, Group } from "@mantine/core";
import styled from "styled-components";

export const GroupStyled = styled(Group)`
  @media (max-width: 992px) {
    position: absolute;
    flex-direction: column;
    top: 0;
    right: 0;
    left: 0;
  }
`;

export const BurgerStyled = styled(Burger)`
  @media (min-width: 992px) {
    display: none;
  }
`;
