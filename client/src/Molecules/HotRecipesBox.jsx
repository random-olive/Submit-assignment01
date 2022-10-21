import { HotRecipesBoxStyle } from "../ZStyles/MoleculeStyles";

const HotRecipesBox = () => {
  return (
    <>
      <HotRecipesBoxStyle>
        <div className="wrapper">
          <div className="recipes--wrapper">
            <img alt="레시피" />
            <div>이름</div>
          </div>
          <div className="recipes--wrapper">
            <img alt="레시피" />
            이름
          </div>
        </div>
      </HotRecipesBoxStyle>
    </>
  );
};

export default HotRecipesBox;
