import { useEffect, useState } from "react";
import MemberPhoto from "../../../features/user/member-photo";
import { CancelButton } from "../../../features/addPerson/styles";
import { BackButton } from "../../board/optional/styles";
import { ProjectType, ApiError } from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
import {
  Container,
  GeneralWrapper,
  InfoTitle,
  GlobalStyle,
  DetailTitle,
  FielsetWrapper,
  AddProjectWrapper,
  ProjectLeadWrapper,
  DetailsInfo,
  DetailWrapper,
  WrapperChild,
  Wrapper,
  Options,
  SubmitButton,
} from "./styles";
import {
  addProject,
  createProjectKey as createProjectKeyApi,
} from "../../../api/project-api";
import InputRectangle from "../../../components/ui/Input/rectangle";

type ProjectCreatePropsType = {
  onCreate: (project: ProjectType) => void;
  onClose: () => void;
  userProject?: string;
  projectKey?: string;
  isOptional?: boolean;
  BackButton: () => void;
};

let debounceTimer: NodeJS.Timeout | undefined;

function ProjectCreate(props: ProjectCreatePropsType) {
  const [projectTitle, setProjectTitle] = useState("");
  const [projectKey, setProjectKey] = useState("");
  const { user, token } = useUserContext();
  const [boardTitle, setBoardTitle] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  if (!user) {
    throw new Error("User context is not available");
  }

  async function createProjectKey(title: string) {
    try {
      if (!token) return;
      const response = await createProjectKeyApi(title, token);
      if (response.ok && response.data) {
        setProjectKey(response.data);
        setErrorMessage(null);
      } else {
        setErrorMessage(
          (response.data as ApiError)?.message ||
            "Failed to create project key. Please try again."
        );
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message || "Something went wrong");
      }
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
    if (!token) return;
    const response = await addProject(
      projectTitle,
      user,
      projectKey,
      boardTitle,
      token
    );
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
                <InputRectangle
                  onChange={(value) => handleChange(value)}
                  value={projectTitle}
                  labelValue="Project name"
                  error={errorMessage}
                  size={8}
                />
              </AddProjectWrapper>
              <AddProjectWrapper>
                <InputRectangle
                  onChange={(value) => handleChange(value)}
                  value={projectKey}
                  labelValue="Key"
                  specialBackground={true}
                  size={8}
                />
              </AddProjectWrapper>
              {props.isOptional && (
                <AddProjectWrapper>
                  <InputRectangle
                    onChange={(value) => handleChangeforBoard(value)}
                    value={boardTitle}
                    labelValue="Board name"
                    size={8}
                  />
                </AddProjectWrapper>
              )}
              <ProjectLeadWrapper>
                <InputRectangle
                  value={user?.FullName}
                  labelValue="Project lead"
                  size={8}
                  specialBackground={true}
                >
                  <MemberPhoto
                    $userPhotoWidth="19px"
                    $userPhotoHeight="19px"
                    $userPhotoFontSize="7px"
                    $userBorderadius="50px"
                    $userBorder={props.userProject}
                  />
                </InputRectangle>
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
