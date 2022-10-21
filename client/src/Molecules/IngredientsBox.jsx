import { H3, H4 } from "../Atoms/Heads";
import { IngredientBoxStyle } from "../ZStyles/MoleculeStyles";

const IngredientsBox = () => {
  return (
    <>
      <IngredientBoxStyle>
        <div className="wrapper">
          <div className="tags--wrapper">
            <H3>전체</H3>
            <H3 margin="0 0 0 15px">해산물</H3>
            <H3 margin="0 0 0 15px">과일</H3>
            <H3 margin="0 0 0 15px">야채</H3>
          </div>
        </div>
        <div className="ingredients--wrapper">
          <div>
            <img alt="ing" />
            <H4>재료</H4>
            <H4>월별</H4>
          </div>
          <div>
            <img alt="ing" />
            <H4>재료</H4>
            <H4>월별</H4>
          </div>
        </div>
      </IngredientBoxStyle>
    </>
  );
};

export default IngredientsBox;
