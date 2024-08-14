import React, { useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import {
  Container,
  GeneralWrapper,
  InfoTitle,
  InputStyle,
  GlobalStyle,
  TitleforBoard,
  DetailTitle,
  InputforProjectLead,
  FielsetWrapper,
  AddBoardWrapper,
  ProjectLeadWrapper,
  ProjectLeadInputWrapper,
  DetailsInfo,
  DetailWrapper,
  WrapperChild,
  Wrapper,
  Options,
} from "./styles";
import MemberPhoto from "../../../tools/user/member-photo";
import { CancelButton, SubmitButton } from "../../addPerson/styles";

function BoardCreate(props) {
  const [boardTitle, setBoardTitle] = useState("");
  const { user } = useUserContext();
  const userId = user._id;

  function handleChange(event) {
    const { value } = event.target;
    setBoardTitle(value);
  }
  async function onSubmit(event) {
    event.preventDefault();
    const boardData = { title: boardTitle, userId: userId };
    const response = await fetch(process.env.REACT_APP_API_URL + "board", {
      method: "POST",
      body: JSON.stringify(boardData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      props.onCreate(data);
      props.onClose();
    }
  }
  return (
    <Container>
      <GeneralWrapper onSubmit={onSubmit}>
        <GlobalStyle />
        <InfoTitle>New project with board</InfoTitle>
        <Wrapper>
          <WrapperChild>
            <FielsetWrapper>
              <AddBoardWrapper>
                <TitleforBoard>Project name</TitleforBoard>
                <InputStyle
                  type="text"
                  value={boardTitle}
                  onChange={handleChange}
                  maxLength="64"
                />
              </AddBoardWrapper>
              <ProjectLeadWrapper>
                <TitleforBoard>Project lead</TitleforBoard>
                <ProjectLeadInputWrapper>
                  <InputforProjectLead>
                    <MemberPhoto
                      $userPhotoWidth="19px"
                      $userPhotoHeight="19px"
                      $userPhotoFontSize="7px"
                      $userBorderadius="50px"
                      $userBorder={props.$userBorder}
                    />
                    {user.fullName}
                  </InputforProjectLead>
                </ProjectLeadInputWrapper>
              </ProjectLeadWrapper>
            </FielsetWrapper>
          </WrapperChild>
          <DetailWrapper>
            <DetailTitle>Creating a project</DetailTitle>
            <DetailsInfo>
              A board will be created with your project, and will be named after
              your project. You can rename your board in the board settings
              screen.
            </DetailsInfo>
          </DetailWrapper>
        </Wrapper>
        <Options>
          <SubmitButton type="submit">Create Board</SubmitButton>
          <CancelButton onClick={props.onClose}>Cancel</CancelButton>
        </Options>
      </GeneralWrapper>
    </Container>
  );
}
export default BoardCreate;
