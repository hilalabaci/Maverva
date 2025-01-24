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
  const [isClicked, setIsClicked] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleButtonClick = () => {
    setIsClicked(true);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsClicked(false);
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
      isClicked={isClicked}
      onClick={handleButtonClick}
      ref={buttonRef}
    >
      <InputWrapper>
        <IconWrapper>
          <Icon />
        </IconWrapper>
        <Input
          onChange={(e) => props.onSearch(e.target.value)}
          placeholder={props.placeHolderForSearchButton}
        />
      </InputWrapper>
    </SearchContainer>
  );
}
export default Search;
