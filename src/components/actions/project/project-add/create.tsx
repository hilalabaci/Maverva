import { useEffect, useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
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
  SubmitButton,
} from "./styles";
import MemberPhoto from "../../../tools/user/member-photo";
import { CancelButton } from "../../addPerson/styles";
import { ProjectType } from "../../../../types";
import { BackButton } from "../../board/optional/styles";
type ProjectCreatePropsType = {
  onCreate: (project: ProjectType) => void;
  onClose: () => void;
  userProject?: string;
  projectKey?: string;
  isOptional?: boolean;
  BackButton: () => void;
};
type CreateProjectResponse = {
  message: string;
  project: ProjectType;
};

function ProjectCreate(props: ProjectCreatePropsType) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectKey, setProjectKey] = useState("");
  const [ws, setWs] = useState<WebSocket | null>(null);
  const { user } = useUserContext();
  const userId = user?._id;
  const [boardTitle, setBoardTitle] = useState("");

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
  function handleChangeforBoard(value: string) {
    setBoardTitle(value);
    // ws?.send(JSON.stringify({ title: value }));
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
      props.onCreate(data.project);
      props.onClose();
    }
  }

  return (
    <Container>
      <GeneralWrapper
        onSubmit={async (e) => {
          if (!!projectKey && projectTitle) {
            e.preventDefault();
            await onSubmit();
          }
          e.preventDefault();
        }}
      >
        <GlobalStyle />
        <InfoTitle>New project</InfoTitle>
        <Wrapper>
          <WrapperChild>
            <FielsetWrapper>
              <AddProjectWrapper>
                <TitleforProject>Project name</TitleforProject>
                <InputStyle
                  type="text"
                  value={projectTitle}
                  onChange={(e) => handleChange(e.target.value)}
                  maxLength={64}
                />
              </AddProjectWrapper>
              <AddProjectWrapper>
                <TitleforProject>Key</TitleforProject>
                <InputforProjectLead>{projectKey}</InputforProjectLead>
              </AddProjectWrapper>
              {props.isOptional && (
                <AddProjectWrapper>
                  <TitleforProject>Board name</TitleforProject>
                  <InputStyle
                    type="text"
                    value={boardTitle}
                    onChange={(e) => handleChangeforBoard(e.target.value)}
                  />
                </AddProjectWrapper>
              )}
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
            <DetailTitle>Creating a project</DetailTitle>
            <DetailsInfo>
              A project will be created with your project, and will be named
              after your project. You can rename your project in the project
              settings screen.
            </DetailsInfo>
          </DetailWrapper>
        </Wrapper>
        <Options>
          {props.isOptional && (
            <BackButton onClick={props.BackButton}>Back</BackButton>
          )}
          <SubmitButton
            $isFilled={!!projectKey && !!projectTitle}
            type="submit"
          >
            Create Project
          </SubmitButton>
          <CancelButton onClick={props.onClose}>Cancel</CancelButton>
        </Options>
      </GeneralWrapper>
    </Container>
  );
}
export default ProjectCreate;
