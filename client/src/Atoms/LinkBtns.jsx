import { LinkBtnStyle } from "../ZStyles/AtomStyles";
import styled from "styled-components";
const LinkBtns = ({ content }) => {
  return (
    <>
      <Div>
        <LinkBtnStyle margin="30px 0 40px 0">{content}</LinkBtnStyle>
      </Div>
    </>
  );
};

export default LinkBtns;

const Div = styled.div`
display: flex;
justify-content: right;
width: 50%;
`