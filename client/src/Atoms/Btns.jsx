import { StickyBtnStyle, BasicBtnStyle, Backdrop } from "../ZStyles/AtomStyles";
import { TextBox } from "./TextBox";

export const StickyBtn = ({ content, on, setOn }) => {
  return (
    <>
      {on ? (
        <>
          <TextBox setOn={setOn} on={on} />
          <Backdrop />
        </>
      ) : (
        ""
      )}
      <StickyBtnStyle>
        <div
          className="content--wrapper"
          onClick={() => {
            setOn(!on);
          }}
        >
          {content}
        </div>
      </StickyBtnStyle>
    </>
  );
};

export const BasicBtn = ({ content }) => {
  return (
    <>
      <BasicBtnStyle>{content}</BasicBtnStyle>
    </>
  );
};
