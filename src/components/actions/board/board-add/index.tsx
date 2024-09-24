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
import MemberPhoto from "../../../tools/user/member-photo";
import { BoardType, ProjectType } from "../../../../types";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import { BackButton, CancelButton } from "../optional/styles";
import { DropdownSelectMenu } from "../../../tools/select";
type BoardCreatePropsType = {
  onCreate: (project: BoardType) => void;
  BackButton: () => void;
  onClose: () => void;
  userProject?: string;
  projectKey?: string;
};
type CreateBoardResponse = {
  message: string;
  newProject: BoardType;
};

function BoardCreate(props: BoardCreatePropsType) {
  const [boardTitle, setBoardTitle] = useState("");
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const { user } = useUserContext();
  const userId = user?._id;
  const [selectedProjects, setSelectedProjects] = useState<ProjectType[]>([]);

  function handleChange(value: string) {
    setBoardTitle(value);
  }
  async function onSubmit() {
    const projectIds = selectedProjects.map((project) => project._id);
    console.log(projectIds);
    const boardData = {
      title: boardTitle,
      userId: userId,
      projectIds: projectIds,
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
      props.onCreate(data.newProject);
      props.onClose();
    }
  }
  async function loadProjects() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project?userId=" + user?._id,
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
                          .map((p) => ({ title: p.title, key: p.projectKey }))
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
                      label: project.title + " (" + project.projectKey + ")",
                      isSelected: !!selectedProjects.find(
                        (p) => p._id === project._id
                      ),
                      action: () => {
                        const selected = selectedProjects.find(
                          (p) => p._id === project._id
                        );
                        if (selected)
                          setSelectedProjects(
                            selectedProjects.filter(
                              (p) => p._id !== selected._id
                            )
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
