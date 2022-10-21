import { SearchbarStyle } from "../ZStyles/MoleculeStyles";
import { SearchInput } from "../Atoms/InputsTXTs";
import { SearchIcon } from "../Constants/icons";
import HotTags from "../Atoms/HotTags";

const Searchbar = () => {
  return (
    <>
      <SearchbarStyle>
        <SearchInput />
        <SearchIcon color={"var(--orange300)"} />
      </SearchbarStyle>
      <HotTags />
    </>
  );
};

export default Searchbar;
