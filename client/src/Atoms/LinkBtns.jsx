import { LinkBtnStyle } from "../ZStyles/AtomStyles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Organisms/FirebaseO";
import { getUser } from "../Redux/slices/userSlice";

const LinkBtns = ({ content, path, width, margin }) => {
  const navigate = useNavigate("/login");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const logoutHandler = async () => {
    await logout();
    dispatch(
      getUser({
        list: [],
      })
    );
  };
  const authHandler = () => {
    userState.list.length === 0 ? navigate("/login") : logoutHandler();
  };
  return (
    <>
      <Div
        width={width}
        onClick={() => {
          authHandler();
        }}
      >
        {/* <Link to={path}> */}
        <LinkBtnStyle margin={margin}>{content}</LinkBtnStyle>
        {/* </Link> */}
      </Div>
    </>
  );
};

export default LinkBtns;

const Div = styled.div`
  display: flex;
  justify-content: right;
  width: ${(props) => props.width || "50%"};
`;
