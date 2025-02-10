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
  InputWrapperwithIcon,
  IconDown,
  InputforProjectDropDown,
  SubmitButton,
} from "./styles";
import MemberPhoto from "../../../features/user/member-photo";
import { useEffect, useState } from "react";
import { BackButton, CancelButton } from "../optional/styles";
import { useParams } from "react-router-dom";
import { BoardType, ProjectType } from "../../../types";
import { useApplicationContext } from "../../../contexts/ApplicationContext";
import { useUserContext } from "../../../contexts/UserContext";
import apiHelper from "../../../api/apiHelper";
import { DropdownSelectMenu } from "../../../components/common/select";
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
  const { projectKey } = useParams<URLParams>();
  const [boardTitle, setBoardTitle] = useState("");
  const { projects, setProjects, setBoards } = useApplicationContext();
  const { user } = useUserContext();
  const userId = user?.Id;
  const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>([]);

  function handleChange(value: string) {
    setBoardTitle(value);
  }
  async function onSubmit() {
    if (!userId) return;
    const projectKeys = selectedProjects.map((project) => project.Key);
    const boardData = {
      title: boardTitle,
      userId: userId,
      projectKeys: projectKeys,
    };

    const { ok, data } = await apiHelper.addBoard(boardData);
    if (ok && data) {
      props.onCreate(data.newProject);

      if (projectKey) {
        const { ok, data } = await apiHelper.getBoards(projectKey, userId);
        if (ok && data) setBoards(data);
      }
    }
  }
  async function loadProjects() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project?userId=" + user?.Id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as ProjectType[];
      setProjects(data);
    }
  }
  useEffect(() => {
    loadProjects();
  }, []);
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
                <TitleforProject>Board name</TitleforProject>
                <InputStyle
                  type="text"
                  value={boardTitle}
                  onChange={(e) => handleChange(e.target.value)}
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
                      label: project.Name + " (" + project.Key + ")",
                      isSelected: !!selectedProjects.find(
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
                <TitleforProject>Project lead</TitleforProject>
                <ProjectLeadInputWrapper>
                  <InputforProjectLead>
                    <MemberPhoto
                      $userPhotoWidth="20px"
                      $userPhotoHeight="20px"
                      $userPhotoFontSize="7px"
                      $userBorderadius="50px"
                      $userBorder={props.userProject}
                    />
                    {user?.FullName}
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
