import React, { useEffect, useState } from "react";
import {
  Container,
  BoardTitle,
  EditBoardTitle,
  TitleContainer,
  AssignMemberContainer,
  ButtonStylesforPersonAdd,
  IconPersonAdd,
  IconPerson,
  ButtonStylesforIconPerson,
} from "./styles";
import MemberPhoto from "../../tools/user/member-photo";
import Modal from "../modal";
import AddPerson from "../addPerson";
import { useUserContext } from "../../../contexts/UserContext";

function TopMenu(props) {
  const [boardTitle, setBoardTitle] = useState(props.topMenuTitle);
  const { user } = useUserContext();
  const [emailforAddPerson, setEmailforAddPerson] = useState("");
  function handleChange(event) {
    setEmailforAddPerson(event.target.value);
  }

  useEffect(() => {
    setBoardTitle(props.topMenuTitle);
  }, [props.topMenuTitle]);

  async function updateTitle() {
    const id = props.boardId;
    const title = boardTitle;
    const body = { title, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "board", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      props.onBoardUpdate(data);
    }
  }

  const [editBoardTitle, setEditBoardTitle] = useState(false);
  function openEditBoardTitle() {
    setEditBoardTitle(true);
  }
  function closeEditBoardTitle() {
    setEditBoardTitle(false);
    updateTitle();
  }
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  async function onSubmit() {
    const boardId = props.boardId;
    const boardData = {
      boardId: boardId,
      email: emailforAddPerson,
      userId: user._id,
    };
    const response = await fetch(
      process.env.REACT_APP_API_URL + "board/add-user",
      {
        method: "POST",
        body: JSON.stringify(boardData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.ok;
  }

  return (
    <Container onBlur={closeEditBoardTitle}>
      {showModal && (
        <Modal onClose={closeModal}>
          <AddPerson
            closeModal={closeModal}
            onSubmit={onSubmit}
            emailforAddPerson={emailforAddPerson}
            handleChange={handleChange}
          />
        </Modal>
      )}
      <TitleContainer>
        {editBoardTitle ? (
          <EditBoardTitle
            value={boardTitle}
            onChange={(e) => {
              setBoardTitle(e.target.value);
            }}
          />
        ) : (
          <BoardTitle onClick={openEditBoardTitle}>{boardTitle}</BoardTitle>
        )}
      </TitleContainer>
      <AssignMemberContainer>
        <MemberPhoto
          $userPhotoWidth="40px"
          $userPhotoHeight="40px"
          $userPhotoFontSize="15px"
          $userBorderadius="50px"
          $userBorder="2px solid rgba(143,180,230,255)"
        />
        <ButtonStylesforIconPerson>
          <IconPerson />
        </ButtonStylesforIconPerson>
        <ButtonStylesforPersonAdd onClick={openModal}>
          <IconPersonAdd />
        </ButtonStylesforPersonAdd>
      </AssignMemberContainer>
    </Container>
  );
}
export default TopMenu;
