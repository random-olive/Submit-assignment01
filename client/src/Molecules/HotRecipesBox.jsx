import { HotRecipesBoxStyle } from "../ZStyles/MoleculeStyles";

const HotRecipesBox = () => {
  return (
    <>
      <HotRecipesBoxStyle>
        <div className="wrapper">
          <div className="recipes--wrapper">
            <img
              src={
                "https://phinf.pstatic.net/dbscthumb/2891_000_1/20140218133324638_PE7N5QBS4.jpg/food262.jpg?type=f132_87_fst"
              }
              alt="레시피"
            />
            <div>굴전</div>
          </div>
          <div className="recipes--wrapper">
            <img
              src={
                "https://phinf.pstatic.net/dbscthumb/2891_000_1/20140521143318714_QDHC6OQYJ.jpg/food335.jpg?type=f132_87_fst"
              }
              alt="레시피"
            />
            고등어 무조림
          </div>
        </div>
      </HotRecipesBoxStyle>
    </>
  );
};

export default HotRecipesBox;
