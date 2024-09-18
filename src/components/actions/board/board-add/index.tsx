import {
  Container,
  GeneralWrapper,
  InfoTitle,
  InputStyle,
  GlobalStyle,
  TitleforProject,
  DetailTitle,
  InputforProjectLead,
  FielsetWrapper,
  AddProjectWrapper,
  ProjectLeadWrapper,
  ProjectLeadInputWrapper,
  DetailsInfo,
  DetailWrapper,
  WrapperChild,
  Wrapper,
  Options,
  Description,
} from "./styles";
import MemberPhoto from "../../../tools/user/member-photo";
import { SubmitButton } from "../../addPerson/styles";
import { ProjectType } from "../../../../types";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import { BackButton, CancelButton } from "../optional/styles";
type BoardCreatePropsType = {
  onCreate: (project: ProjectType) => void;
  BackButton: () => void;
  onClose: () => void;
  userProject?: string;
  projectKey?: string;
};
type CreateProjectResponse = {
  message: string;
  newProject: ProjectType;
};

function BoardCreate(props: BoardCreatePropsType) {
  const [projectTitle, setProjectTitle] = useState("");
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
      const data = JSON.parse(event.data);
      if (data.projectKey) {
        setProjectKey(data.projectKey);
      }
    };

    return () => {
      websocket.close();
    };
  }, []);
  function handleChange(value: string) {
    setProjectTitle(value);
    ws?.send(JSON.stringify({ title: value }));
  }
  async function onSubmit() {
    const projectData = {
      title: projectTitle,
      userId: userId,
      projectKey: projectKey,
    };
    const response = await fetch(process.env.REACT_APP_API_URL + "project", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = (await response.json()) as CreateProjectResponse;
      console.log(data);
      props.onCreate(data.newProject);
      //props.onClose();
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
        <InfoTitle>New project</InfoTitle>
        <Wrapper>
          <WrapperChild>
            <FielsetWrapper>
              <AddProjectWrapper>
                <TitleforProject>Board name</TitleforProject>
                <InputStyle
                  type="text"
                  value={projectTitle}
                  onChange={(e) => handleChange(e.target.value)}
                  maxLength={64}
                />
              </AddProjectWrapper>
              <AddProjectWrapper>
                <TitleforProject>Project</TitleforProject>
                <InputStyle
                  type="text"
                  value={projectTitle}
                  onChange={(e) => handleChange(e.target.value)}
                  maxLength={64}
                />
                <Description>
                  Select one or more projects to include in this board
                </Description>
              </AddProjectWrapper>
              <ProjectLeadWrapper>
                <TitleforProject>Project lead</TitleforProject>
                <ProjectLeadInputWrapper>
                  <InputforProjectLead>
                    <MemberPhoto
                      $userPhotoWidth="19px"
                      $userPhotoHeight="19px"
                      $userPhotoFontSize="7px"
                      $userBorderadius="50px"
                      $userBorder={props.userProject}
                    />
                    {user?.fullName}
                  </InputforProjectLead>
                </ProjectLeadInputWrapper>
              </ProjectLeadWrapper>
            </FielsetWrapper>
          </WrapperChild>
          <DetailWrapper>
            <DetailTitle>Creating a board</DetailTitle>
            <DetailsInfo>
              A board will be created with your board, and will be named after
              your project. You can rename your project in the project settings
              screen.
            </DetailsInfo>
          </DetailWrapper>
        </Wrapper>
        <Options>
          <BackButton onClick={props.BackButton}>Back</BackButton>
          <SubmitButton type="submit">Create Project</SubmitButton>
          <CancelButton onClick={props.onClose}>Cancel</CancelButton>
          {/* // <CancelButton onClick={props.onClose}>Cancel</CancelButton> */}
        </Options>
      </GeneralWrapper>
    </Container>
  );
}
export default BoardCreate;
