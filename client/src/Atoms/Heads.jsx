import styled from "styled-components";

export const H1 = styled.div`
  font-size: 1.7rem;
  font-weight: ${props=>props.fontWeight};
  color: ${(props) => props.color || "var(--font200)"};
  margin: ${(props) => props.margin};
  @media screen and (max-width: 588px) {
    font-size: 1.4rem;
  }
`;

export const H2 = styled(H1)`
  font-size: 1.5rem;
  @media screen and (max-width: 588px) {
    font-size: 1.3rem;
  }
`;

export const H3 = styled(H1)`
  font-size: 1.2rem;
  @media screen and (max-width: 588px) {
    font-size: 1.15rem;
  }
`;

export const H4 = styled(H1)`
  font-size: 1rem;
  @media screen and (max-width: 588px) {
    font-size: 1rem;
  }
`;
