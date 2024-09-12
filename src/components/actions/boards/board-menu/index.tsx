import React, { useState, useEffect } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import MemberPhoto from "../../../tools/user/member-photo";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Container,
  AddBoardWrapper,
  ListWrapper,
  UserInfo,
  MemberName,
  ArrowIcon,
} from "./styles";
import { BoardType } from "../../../../types";
type BoardMenuPropsType = {
  setBoards: (boards: BoardType[]) => void;
  boards: BoardType[];
  onBoardChange: (board: BoardType) => void;
};

function BoardMenu(props: BoardMenuPropsType) {
  const { user } = useUserContext();
  const [hideMenu, setHideMenu] = useState(false);

  useEffect(() => {
    loadBoards();
    // eslint-disable-next-line
  }, []);

  async function loadBoards() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "board?userId=" + user?._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as BoardType[];
      props.setBoards(data);
    }
  }

  if (!user) {
    return null;
  }
  const userFullName = user.fullName;
  const chars = userFullName.split(" ");
  const firstName = chars[0];

  return (
    <Container $hidden={hideMenu}>
      <UserInfo $hidden={hideMenu}>
        <MemberPhoto
          $userPhotoWidth="40px"
          $userPhotoHeight="40px"
          $userPhotoFontSize="15px"
          $userBorderadius="5px"
          $hidden={hideMenu}
        />
        <MemberName $hidden={hideMenu}>Hello {firstName}</MemberName>
        <ArrowIcon
          $hidden={hideMenu}
          as={hideMenu ? KeyboardArrowRightIcon : KeyboardArrowLeftRoundedIcon}
          onClick={() => {
            setHideMenu(!hideMenu);
          }}
        />
      </UserInfo>
      <AddBoardWrapper $hidden={hideMenu}>
        <div>Your Boards</div>
      </AddBoardWrapper>
      <ListWrapper $hidden={hideMenu}>
      </ListWrapper>
    </Container>
  );
}
export default BoardMenu;
