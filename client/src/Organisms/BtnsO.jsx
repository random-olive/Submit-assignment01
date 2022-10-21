import { StickyBtn } from "../Atoms/Btns";
import { useState } from "react";

export const StickyBtnO = ({ content }) => {
  const [on, setOn] = useState(false);
  return (
    <>
      <StickyBtn content={content} on={on} setOn={setOn} />
    </>
  );
};
