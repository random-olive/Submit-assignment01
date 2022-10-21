import { LinkBtnStyle } from "../ZStyles/AtomStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkBtns = ({ content, path, width, margin }) => {
  return (
    <>
      <Div width={width}>
        <Link to={path}>
          <LinkBtnStyle margin={margin}>{content}</LinkBtnStyle>
        </Link>
      </Div>
    </>
  );
};

export default LinkBtns;

const Div = styled.div`
  display: flex;
  justify-content: right;
  width: ${(props) => props.width || '50%'};
`;
