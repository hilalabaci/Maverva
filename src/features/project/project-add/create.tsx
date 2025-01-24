import { useEffect, useState } from "react";

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
import MemberPhoto from "../../../features/user/member-photo";
import { CancelButton } from "../../../features/addPerson/styles";
import { BackButton } from "../../board/optional/styles";
import { ProjectType } from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
import apiHelper from "../../../api/apiHelper";

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
let debounceTimer: NodeJS.Timeout | undefined;

function ProjectCreate(props: ProjectCreatePropsType) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectKey, setProjectKey] = useState("");
  const { user } = useUserContext();
  const [boardTitle, setBoardTitle] = useState("");

  async function createProjectKey(title: string) {
    const response = await apiHelper.createProjectKey(title);
    if (response.ok && response.data) {
      setProjectKey(response.data);
    } else {
      console.error("Failed to creating project key:", response);
    }
  }
  useEffect(() => {}, [projectTitle, projectKey]);

  function handleChange(value: string) {
    setProjectTitle(value);
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      createProjectKey(value);
    }, 300);
  }
  function handleChangeforBoard(value: string) {
    setBoardTitle(value);
  }
  async function onSubmit() {
    const response = await apiHelper.addProject(
      projectTitle,
      user,
      projectKey,
      boardTitle
    );
    console.log(projectTitle);
    if (response.ok && response.data) {
      props.onCreate(response.data.project);
      props.onClose();
    } else {
      console.error("Failed to creating project", response);
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
