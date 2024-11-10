import { useEffect, useState } from "react";
import {
  Container,
  ProjectTitle,
  EditProjectTitle,
  AssignMemberContainer,
  ButtonStylesforPersonAdd,
  IconPersonAdd,
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
import Modal from "../../tools/modal";
import AddPerson from "../addPerson";
import { BoardType, ProjectType, UserType } from "../../../types";
import Search from "../../tools/search";
import { ToolTip } from "../../tools/toolstip";
import { useLocation } from "react-router-dom";
type TopMenuPropsType = {
  topMenuTitle: string;
  projectId: string;
  projectKey: string;
  onProjectUpdate: (project: ProjectType) => void;
  user?: UserType;
  setSearchInput: (value: string) => void;
  selectedBoardTitle: string;
  selectedBoardId: string;
  boardId?: BoardType;
};

function TopMenu(props: TopMenuPropsType) {
  const location = useLocation();
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
              {location.pathname.includes("/backlog")
                ? "Backlog"
                : props.selectedBoardTitle}
            </ProjectTitle>
          )}
        </Title>
      </TitleWrapper>
      <SearchAndAssignMemberContainer>
        <Search onSearch={onSearch} placeHolderForSearchButton="Search" />
        <AssignMemberContainer>
          <ButtonStylesforIconPerson>
            {users.map((user, index) => (
              <ToolTip
                contentStyle={{ zIndex: users.length - index }}
                trigger={
                  <MemberPhoto
                    key={user._id}
                    $userPhotoWidth="40px"
                    $userPhotoHeight="40px"
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
              <ToolTip
                contentStyle={{ zIndex: 1 }}
                trigger={
                  <ButtonStylesforPersonAdd onClick={openModal}>
                    <IconPersonAdd />
                  </ButtonStylesforPersonAdd>
                }
                content="Add people"
              ></ToolTip>
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
