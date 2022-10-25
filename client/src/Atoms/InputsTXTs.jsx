import styled from "styled-components";

export const SearchInput = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "24",
}))`
  color: ${"var(--orange200)"};
  font-weight: bold;
  border: none;
  width: 95%;
  background: transparent;
  :focus {
    outline: none;
  }
`;

export const Input = styled(SearchInput)`
  background-color: var(--msg100);
  color: var(--orange300);
  width: ${(props) => props.width || "300px"};
  padding: 15px;
  border-bottom: 2px solid var(--shadow100);
  margin: ${(props) => props.margin};
  ::placeholder {
    color: var(--orange150);
  }
  :focus {
    border-bottom: 2px solid var(--orange300);
  }
  @media screen and (max-width: 588px) {
    width: 380px;
  }
`;

export const TXT = styled.textarea`
  background-color: var(--msg100);
  color: var(--font100);
  min-width: 300px;
  width: 500px;
  height: 150px;
  padding: 15px;
  box-shadow: 2px 2px 2px var(--shadow100);
  /* resize: none; */
  :focus {
    outline: none;
    border-bottom: 2px solid var(--orange300);
  }
  ::placeholder {
    color: var(--orange150);
    font-weight: bold;
  }
  @media screen and (max-width: 588px) {
    width: 380px
  }
`;
