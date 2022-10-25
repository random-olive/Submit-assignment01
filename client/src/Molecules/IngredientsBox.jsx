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
            <img
              src={
                "https://images.unsplash.com/photo-1554071407-1fb7259a9118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
              alt="img"
            />
            <H4>고등어</H4>
            <H4>9월 ~ 11월</H4>
          </div>
          <div>
            <img
              src={
                "https://images.unsplash.com/photo-1627898292764-6733087b55ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              }
              alt="img"
            />
            <H4>굴</H4>
            <H4>9월 ~ 12월</H4>
          </div>
        </div>
      </IngredientBoxStyle>
    </>
  );
};

export default IngredientsBox;
