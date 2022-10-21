import styled from "styled-components";

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  size: props.size || "24",
}))`
  color: ${"var(--orange200)"};
  font-weight: bold;
  border: none;
  background: transparent;
  :focus {
    outline: none;
  }
`;

export default Input;