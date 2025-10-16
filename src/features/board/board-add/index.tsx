import MemberPhoto from "../../../features/user/member-photo";
import { useEffect, useState, useRef, useCallback } from "react";
import { BackButton, CancelButton } from "../optional/styles";
import { useParams } from "react-router-dom";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import { useUserContext } from "../../../contexts/UserContext";
import { DropdownSelectMenu } from "../../../components/ui/Select";
import {
  Container,
  GeneralWrapper,
  InfoTitle,
  GlobalStyle,
  TitleforProject,
  DetailTitle,
  FielsetWrapper,
  AddProjectWrapper,
  ProjectLeadWrapper,
  DetailsInfo,
  DetailWrapper,
  WrapperChild,
  Wrapper,
  Options,
  Description,
  InputWrapperwithIcon,
  IconDown,
  InputforProjectDropDown,
  SubmitButton,
} from "./styles";
import { addBoard, getBoards } from "../../../api/board-api";
import { getProjects } from "../../../api/project-api";
import InputRectangle from "../../../components/ui/Input/rectangle";
import { BoardType, ProjectType } from "../../../types/user.types";
type BoardCreatePropsType = {
  onCreate: (project: BoardType) => void;
  BackButton: () => void;
  onClose: () => void;
  userProject?: string;
  projectKey?: string;
};

type URLParams = {
  projectKey: string;
};

function BoardCreate(props: BoardCreatePropsType) {
  const hasFetchedProjects = useRef(false);
  const { projectKey } = useParams<URLParams>();
  const [boardTitle, setBoardTitle] = useState("");
  const { projects, setProjects, setSelectedProject } = useApplicationContext();
  const { user, token } = useUserContext();
  const userId = user?.Id;
  const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>([]);
  if (!user) {
    throw new Error("User context is not available");
  }

  function handleChange(value: string) {
    setBoardTitle(value);
  }
  async function onSubmit() {
    if (!userId || !token) return;
    const projectKeys = selectedProjects.map((project) => project.Key);
    const boardData = {
      title: boardTitle,
      userId: userId,
      projectKeys: projectKeys,
    };
    if (!projectKey) {
      const errorMessage = "Project key is required to create a board.";
      console.error(errorMessage);
      return;
    }
    const { ok, data } = await addBoard(boardData, projectKey, token);
    if (ok && data) {
      props.onCreate(data.newProject);

      if (projectKey) {
        const { ok, data } = await getBoards(projectKey, userId, token);
        if (ok && data)
          setSelectedProject((prev: ProjectType | null) =>
            prev ? { ...prev, Boards: data } : prev
          );
      }
    }
  }
  const loadProjects = useCallback(async () => {
    if (userId && token) {
      const { ok, data } = await getProjects(userId, token);
      if (ok && data) {
        setProjects(data);
      }
    }
  }, [userId, token, setProjects]);
  useEffect(() => {
    if (hasFetchedProjects.current) return;
    hasFetchedProjects.current = true;
    loadProjects();
  }, [loadProjects]);
  return (
    <Container>
      <GeneralWrapper
        onSubmit={async (e) => {
          if (!!selectedProjects.length && boardTitle) {
            e.preventDefault();
            await onSubmit();
            props.onClose();
          }
          e.preventDefault();
        }}
      >
        <GlobalStyle />
        <InfoTitle>Name this board</InfoTitle>
        <Wrapper>
          <WrapperChild>
            <FielsetWrapper>
              <AddProjectWrapper>
                <InputRectangle
                  onChange={(value) => handleChange(value)}
                  value={boardTitle}
                  labelValue="Board name"
                  type="text"
                  size={8}
                />
              </AddProjectWrapper>
              <AddProjectWrapper>
                <TitleforProject>Project</TitleforProject>
                <DropdownSelectMenu
                  triggerWidth={true}
                  title="Project"
                  trigger={
                    <InputWrapperwithIcon>
                      <InputforProjectDropDown
                        type="text"
                        value={selectedProjects
                          .map((p) => ({ title: p.Name, key: p.Key }))
                          .reduce(
                            (acc, project) =>
                              acc + `${project.title}(${project.key}) `,
                            ""
                          )}
                        maxLength={64}
                      />
                      <IconDown />
                    </InputWrapperwithIcon>
                  }
                  items={projects.map((project) => {
                    return {
                      key: project.Id,
                      label: project.Name + " (" + project.Key + ")",
                      selected: !!selectedProjects.find(
                        (p) => p.Id === project.Id
                      ),
                      action: () => {
                        const selected = selectedProjects.find(
                          (p) => p.Id === project.Id
                        );
                        if (selected)
                          setSelectedProjects(
                            selectedProjects.filter((p) => p.Id !== selected.Id)
                          );
                        else
                          setSelectedProjects([...selectedProjects, project]);
                      },
                    };
                  })}
                />
                <Description>
                  Select one or more projects to include in this board
                </Description>
              </AddProjectWrapper>
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
          <SubmitButton
            $isFilled={!!selectedProjects.length && !!boardTitle}
            type="submit"
          >
            Create Project
          </SubmitButton>
          <CancelButton onClick={props.onClose}>Cancel</CancelButton>
          {/* // <CancelButton onClick={props.onClose}>Cancel</CancelButton> */}
        </Options>
      </GeneralWrapper>
    </Container>
  );
}
export default BoardCreate;
