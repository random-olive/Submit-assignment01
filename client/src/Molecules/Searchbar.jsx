import { SearchbarStyle } from "../ZStyles/MoleculeStyles";
import Input from "../Atoms/Input";
import { SearchIcon } from "../Constants/icons";
import HotTags from "../Atoms/HotTags";

const Searchbar = () => {
  return (
    <>
      <SearchbarStyle>
        <Input />
        <SearchIcon color={"var(--orange300)"} />
      </SearchbarStyle>
      <HotTags />
    </>
  );
};

export default Searchbar;
