import { useEffect, useState } from "react";
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
import { ProjectType, UserType } from "../../../types";
import Search from "../../tools/search";
import { ToolTip } from "../../tools/toolstip";
type TopMenuPropsType = {
  topMenuTitle: string;
  projectId: string;
  projectKey: string;
  onProjectUpdate: (project: ProjectType) => void;
  user?: UserType;
  setSearchInput: (value: string) => void;
  selectedBoardTitle: string;
  selectedBoardId: string;
  boardId?: string;
};

function TopMenu(props: TopMenuPropsType) {
  const [projectTitle, setProjectTitle] = useState(props.topMenuTitle);
  const [editProjectTitle, setEditProjectTitle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  function openEditProjectTitle() {
    setEditProjectTitle(true);
  }
  function closeEditProjectTitle() {
    setEditProjectTitle(false);
    updateTitle();
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
  async function loadUsers() {
    const boardId = props.boardId;
    const response = await fetch(
      process.env.REACT_APP_API_URL + "users?boardId=" + boardId,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as UserType[];
      setUsers(data);
    }
  }
  useEffect(
    () => {
      loadUsers();
    },
    [
      /**DO:board ekledikten sonra kartlari guncelle**/
    ]
  );
  useEffect(() => {
    if (props.boardId) {
      loadUsers();
    }
  }, [props.boardId]); // boardId değiştiğinde loadUsers çağırılır

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
          {/* <HostMemberContainer>
            <MemberPhoto
              $userPhotoWidth="40px"
              $userPhotoHeight="40px"
              $userPhotoFontSize="15px"
              $userBorderadius="50px"
              $userBorder="2px solid rgba(143,180,230,255)"
              user={props.user}
            />
          </HostMemberContainer> */}
          <ButtonStylesforIconPerson>
            {users.map((user, index) => (
              <ToolTip
                contentStyle={{ zIndex: users.length - index }}
                trigger={
                  <MemberPhoto
                    key={user._id}
                    $userPhotoWidth="35px"
                    $userPhotoHeight="35px"
                    $userPhotoFontSize="12px"
                    $userBorderadius="50px"
                    $fontWeight="600"
                    $userBorder="2px solid white"
                    $marginLeft="-9px"
                    user={user}
                  />
                }
                content={user.fullName}
              ></ToolTip>
            ))}
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
              projectTitle={projectTitle}
              projectKey={props.projectKey}
              projectId={props.projectId}
            />
          </Modal>
        </AssignMemberContainer>
      </SearchAndAssignMemberContainer>
    </Container>
  );
}
export default TopMenu;
