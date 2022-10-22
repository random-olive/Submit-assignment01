import styled, { keyframes, css } from "styled-components";

//keyframes
const fadeIn = keyframes`
from {
  opacity:0;
}
to{
  opacity:1;
}
`;

const fadeOut = keyframes`
from {
  opacity:1;
}
to{
  opacity:0;
}
`;

const fadeInAni = css`
  animation: ${fadeIn} 1s;
`;

const fadeOutAni = css`
  animation: ${fadeOut} 1s;
`;

const MoveSlide = keyframes`
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-71%);
    }
  `;

export const FlexBase = styled.div`
  display: flex;
`;

export const LogoStyle = styled(FlexBase)`
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 65px;
  font-size: 50px;
  font-weight: bolder;
  margin: ${(props) => props.margin};
  cursor: pointer;
  p {
    margin-top: 0px;
    :first-child {
      color: ${"var(--red100)"};
    }
    :nth-child(2) {
      color: ${"var(--orange200)"};
    }
    :nth-child(3) {
      color: ${"var(--orange100)"};
    }
  }
  :hover {
    scale: 1.1;
  }
`;

export const HotTagsStyle = styled(FlexBase)`
  font-size: 1.15rem;
  margin-top: 20px;
  div:nth-child(1) {
    margin-right: 20px;
    color: var(--red100);
    font-weight: bold;
  }
  div:nth-child(2),
  div:nth-child(3) {
    margin-right: 15px;
    color: var(--font300);
    cursor: pointer;
  }
  div:last-child {
    color: var(--font300);
    cursor: pointer;
  }
`;

//Btns
export const BtnBase = styled.button`
  background: transparent;
  display: flex;
  cursor: pointer;
  color: var(--font100);
`;
export const LinkBtnStyle = styled(BtnBase)`
  color: var(--font200);
  font-weight: bold;
  margin: ${(props) => props.margin || "30px 0 40px 0"};
  box-shadow: 0px 0px 0px var(--shadow100);
  :hover {
    color: var(--orange200);
    font-weight: 700;
  }
`;

export const StickyBtnStyle = styled(FlexBase)`
  justify-content: right;
  width: 100%;
  margin: -30px 15% 60px 0;
  z-index: 999;
  .content--wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    cursor: pointer;
    background: var(--orange100);
    :hover {
      background: var(--green100);
      box-shadow: 1px 1px 1px var(--shadow100);
    }
  }
`;

export const BasicBtnStyle = styled(BtnBase)`
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "120px"};
  height: ${(props) => props.height || "50px"};
  border-radius: 5px;

  :hover {
    background: var(--orange200);
    color: white;
    font-weight: bold;
  }
`;

//TextBoxes
export const TextBoxBaseStyle = styled(StickyBtnStyle)`
  margin: -420px 50px 20px 30px;
  z-index: 999;
  color: var(--font200);
  .content--wrapper {
    display: flex;
    flex-direction: column;
    color: var(--font100);
    font-weight: bold;
    width: 250px;
    height: 400px;
    background: var(--msg100);
    box-shadow: 1px 1px 1px var(--shadow100);
    border-radius: 10px;
    a {
      color: var(--fon100);

      :hover {
        color: var(--red100);
      }
    }
    .site {
      margin-bottom: 10px;
    }
    .title {
      margin-bottom: 40px;
    }
    :hover {
      background: var(--msg100);
    }
    /* color: ${(props) => (props.on === "true" ? "red" : "yellow")};
    animation: ${(props) => (props.on === "true" ? fadeInAni : fadeOutAni)}; */
    animation: ${fadeIn} 1s;
  }
  @media screen and (max-width: 1020px) {
    .content--wrapper {
      background: var(--msg50);
    }
  }
`;

//Backdrop
export const Backdrop = styled.div`
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: grid;
  place-items: center;
  animation: ${fadeIn} 1s;
`;

export const BoardStyle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  padding: 20px;
  box-shadow: 2px 2px 2px var(--shadow100);
`;

export const CardStyle = styled(FlexBase)`
  width: 100%;
  height: 150px;
  background: var(--msg100);
  border-radius: 10px;
  padding: 20px;
`;
