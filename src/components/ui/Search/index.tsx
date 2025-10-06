import { useEffect, useRef, useState } from "react";
import {
  SearchContainer,
  IconWrapper,
  InputWrapper,
  Input,
  Icon,
} from "./styles";
type SearchPropsType = {
  onSearch: (value: string) => void;
  placeHolderForSearchButton: string;
};
function Search(props: SearchPropsType) {
  const [isclicked, setisclicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleButtonClick = () => {
    setisclicked(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setisclicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <SearchContainer
      tabIndex={1}
      $isclicked={isclicked}
      onClick={handleButtonClick}
      ref={containerRef}
    >
      <InputWrapper>
        <Input
          onChange={(e) => props.onSearch(e.target.value)}
          placeholder={props.placeHolderForSearchButton}
        />
        <IconWrapper>
          <Icon />
        </IconWrapper>
      </InputWrapper>
    </SearchContainer>
  );
}
export default Search;
