import React, { useEffect, useState } from "react";
import {
  Container,
  ProjectTitle,
  EditProjectTitle,
  AssignMemberContainer,
  ButtonStylesforPersonAdd,
  IconPersonAdd,
  HostMemberContainer,
  ButtonStylesforIconPerson,
  TitleWrapper,
  Title,
  SearchAndAssignMemberContainer,
  PathInfo,
  PathLink,
  PathList,
  Pathitem,
} from "./styles";
import MemberPhoto from "../../tools/user/member-photo";
import Modal from "../modal";
import AddPerson from "../addPerson";
import { useUserContext } from "../../../contexts/UserContext";
import { ProjectType, UserType } from "../../../types";
import Search from "../../tools/search";
type TopMenuPropsType = {
  topMenuTitle: string;
  projectId: string;
  projectKey: string;
  onProjectUpdate: (project: ProjectType) => void;
  user?: UserType;
  setSearchInput: (value: string) => void;
  selectedBoardTitle: string;
  selectedBoardId: string;
};

function TopMenu(props: TopMenuPropsType) {
  const [projectTitle, setProjectTitle] = useState(props.topMenuTitle);
  const { user } = useUserContext();
  const [emailforAddPerson, setEmailforAddPerson] = useState("");

  function handleChange(value: string) {
    setEmailforAddPerson(value);
  }

  useEffect(() => {
    setProjectTitle(props.topMenuTitle);
  }, [props.topMenuTitle]);

  async function updateTitle() {
    const id = props.projectId;
    const title = projectTitle;
    const body = { title, id };
    const response = await fetch(process.env.REACT_APP_API_URL + "project", {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = (await response.json()) as ProjectType;
      props.onProjectUpdate(data);
    }
  }

  const [editProjectTitle, setEditProjectTitle] = useState(false);
  function openEditProjectTitle() {
    setEditProjectTitle(true);
  }
  function closeEditProjectTitle() {
    setEditProjectTitle(false);
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
    const projectId = props.projectId;
    const projectData = {
      projectId: projectId,
      email: emailforAddPerson,
      userId: user?._id,
    };
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project/add-user",
      {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.ok;
  }
  const onSearch = (value: string) => {
    props.setSearchInput(value);
  };

  return (
    <Container onBlur={closeEditProjectTitle}>
      <TitleWrapper>
        <PathInfo>
          <PathList>
            <Pathitem>
              <PathLink to={"/projects"}>Projects</PathLink> /{"  "}
            </Pathitem>
            <Pathitem>
              <PathLink to={`/projects/${props.projectKey}`}>
                {projectTitle}
              </PathLink>{" "}
              /{" "}
            </Pathitem>
            <Pathitem>
              <PathLink to={`boards/${props.selectedBoardId}`}>
                {props.selectedBoardTitle}
              </PathLink>
            </Pathitem>
          </PathList>
        </PathInfo>
        <Title>
          {editProjectTitle ? (
            <EditProjectTitle
              value={props.selectedBoardTitle}
              onChange={(e) => {
                setProjectTitle(e.target.value);
              }}
            />
          ) : (
            <ProjectTitle onClick={openEditProjectTitle}>
              {props.selectedBoardTitle}
            </ProjectTitle>
          )}
        </Title>
      </TitleWrapper>
      <SearchAndAssignMemberContainer>
        <Search onSearch={onSearch} placeHolderForSearchButton="Search Card" />
        <AssignMemberContainer>
          <HostMemberContainer>
            <MemberPhoto
              $userPhotoWidth="40px"
              $userPhotoHeight="40px"
              $userPhotoFontSize="15px"
              $userBorderadius="50px"
              $userBorder="2px solid rgba(143,180,230,255)"
              user={props.user}
            />
          </HostMemberContainer>

          <ButtonStylesforIconPerson>
            <MemberPhoto
              $userPhotoWidth="40px"
              $userPhotoHeight="40px"
              $userPhotoFontSize="15px"
              $userBorderadius="50px"
              user={props.user}
            />
          </ButtonStylesforIconPerson>
          <Modal
            trigger={
              <ButtonStylesforPersonAdd onClick={openModal}>
                <IconPersonAdd />
              </ButtonStylesforPersonAdd>
            }
            open={showModal}
            onChange={setShowModal}
            onClose={closeModal}
          >
            <AddPerson
              closeModal={closeModal}
              onSubmit={onSubmit}
              projectTitle={projectTitle}
              emailforAddPerson={emailforAddPerson}
              handleChange={handleChange}
            />
          </Modal>
        </AssignMemberContainer>
      </SearchAndAssignMemberContainer>
    </Container>
  );
}
export default TopMenu;
