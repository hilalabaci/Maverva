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
      {showModal && (
        <Modal onClose={closeModal}>
          <AddPerson
            closeModal={closeModal}
            onSubmit={onSubmit}
            projectTitle={projectTitle}
            emailforAddPerson={emailforAddPerson}
            handleChange={handleChange}
          />
        </Modal>
      )}
      <TitleWrapper>
        <PathInfo>
          <PathList>
            <Pathitem>
              <PathLink to={"/projects"}>Projects</PathLink> /{" "}
            </Pathitem>
            <Pathitem>
              <PathLink to={"projects"}>{projectTitle}</PathLink>
            </Pathitem>
          </PathList>
        </PathInfo>
        <Title>
          {editProjectTitle ? (
            <EditProjectTitle
              value={props.projectKey + " " + "board"}
              onChange={(e) => {
                setProjectTitle(e.target.value);
              }}
            />
          ) : (
            <ProjectTitle onClick={openEditProjectTitle}>
              {props.projectKey} board
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
          <ButtonStylesforPersonAdd onClick={openModal}>
            <IconPersonAdd />
          </ButtonStylesforPersonAdd>
        </AssignMemberContainer>
      </SearchAndAssignMemberContainer>
    </Container>
  );
}
export default TopMenu;
