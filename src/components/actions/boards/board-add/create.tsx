import { useEffect, useState } from "react";
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
import { BoardType } from "../../../../types";
type BoardCreatePropsType = {
  onCreate: (board: BoardType) => void;
  onClose: () => void;
  userBorder?: string;
  projectKey?: string;
};
type CreateBoardResponse = {
  message: string;
  newBoard: BoardType;
};

function BoardCreate(props: BoardCreatePropsType) {
  const [boardTitle, setBoardTitle] = useState("");
  const [projectKey, setProjectKey] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const { user } = useUserContext();
  const userId = user?._id;

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:8080");
    setWs(websocket);
    websocket.onopen = () => {
      console.log("WebSocket Connected");
    };

    websocket.onmessage = (event) => {
      console.log("event", event);
      const data = JSON.parse(event.data);
      if (data.projectKey) {
        setProjectKey(data.projectKey);
      }
    };

    return () => {
      websocket.close();
    };
  }, []);
  console.log(`this is a ${projectKey}`);

  function handleChange(value: string) {
    setBoardTitle(value);
    ws?.send(JSON.stringify({ title: value }));
  }
  async function onSubmit() {
    const boardData = {
      title: boardTitle,
      userId: userId,
      projectKey: projectKey,
    };
    const response = await fetch(process.env.REACT_APP_API_URL + "board", {
      method: "POST",
      body: JSON.stringify(boardData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = (await response.json()) as CreateBoardResponse;
      props.onCreate(data.newBoard);
      props.onClose();
    }
  }
  return (
    <Container>
      <GeneralWrapper
        onSubmit={async (e) => {
          e.preventDefault();
          await onSubmit();
        }}
      >
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
                  onChange={(e) => handleChange(e.target.value)}
                  maxLength={64}
                />
              </AddBoardWrapper>
              <AddBoardWrapper>
                <TitleforBoard>Key</TitleforBoard>
                <InputforProjectLead>{projectKey}</InputforProjectLead>
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
                      $userBorder={props.userBorder}
                    />
                    {user?.fullName}
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
