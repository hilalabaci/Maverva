import { useEffect, useState } from "react";
import Layout from "../templates/layout";
import Modal from "../../components/actions/modal";
import BoardCreate from "../../components/actions/boards/board-add/create";
import {
  CreateButton,
  CreateWrapper,
} from "../../components/tools/navbar/styles";
import {
  Container,
  Header,
  HeaderAndCreateWrapper,
  HeaderWrapper,
  Wrapper,
  SearchWrapper,
  DataWrapper,
  Tables,
  TableTitleWrapper,
  Titles,
  TableBody,
  DataContainer,
  DataProjectsName,
  DataLeadName,
  TableHead,
  OrderIcon,
  FavIcon,
  MoreIcon,
  FilletStar,
  IconWrapper,
  MoreIconButton,
  LinkforProjects,
  DataKey,
} from "./styles";
import Search from "../../components/tools/search";
import { useUserContext } from "../../contexts/UserContext";
import { BoardType } from "../../types";
import MemberPhoto from "../../components/tools/user/member-photo";
import { DropdownMenu } from "../../components/tools/dropdownMenu/index";
import CloseBoardMenu from "../../components/actions/boards/close-board-menu";

type ProjectsPropsType = {
  onBoardChange: (board: BoardType) => void;
};

function Projects(props: ProjectsPropsType) {
  const { user } = useUserContext();
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<BoardType | undefined>();
  const [filteredBoard, setFilteredBoard] = useState<BoardType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);
  const [showModalforDeleteBoard, setShowModalforDeleteBoard] = useState(false);

  async function loadBoards() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "board?userId=" + user?._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as BoardType[];
      setBoards(data);
    }
  }

  function onDelete(id: string) {
    setBoards(boards.filter((board) => board._id !== id));
  }

  async function deleteItem(id: string) {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "board?id=" + id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      onDelete(id);
    }
  }

  useEffect(() => {
    if (!user) return;
    loadBoards();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    const filtered = boards.filter((board) =>
      board.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredBoard(filtered);
  }, [searchInput, boards]);

  function openModal(board: BoardType) {
    setShowModalforDeleteBoard(true);
    setSelectedBoard(board);
  }
  function closeModal() {
    setShowModalforDeleteBoard(false);
    setSelectedBoard(undefined);
  }
  function addBoard(board: BoardType) {
    setBoards([...boards, board]);
  }

  return (
    <Layout onBoardCrate={() => {}}>
      <Container>
        <Wrapper>
          <HeaderAndCreateWrapper>
            <HeaderWrapper>
              <Header>Projects</Header>
              <CreateWrapper>
                <CreateButton onClick={() => setShowModalforCreateButton(true)}>
                  Create Projects
                </CreateButton>
              </CreateWrapper>
            </HeaderWrapper>
          </HeaderAndCreateWrapper>
          <SearchWrapper>
            <Search
              placeHolderForSearchButton="Search Projects"
              onSearch={setSearchInput}
            />
          </SearchWrapper>
          <DataContainer>
            <Tables>
              <TableHead>
                <TableTitleWrapper>
                  <IconWrapper>
                    <FilletStar />
                  </IconWrapper>
                  <Titles>
                    Name <OrderIcon />
                  </Titles>
                  <Titles>Key</Titles>
                  <Titles>Lead</Titles>
                  <Titles>Project URL</Titles>
                  <Titles>More action</Titles>
                </TableTitleWrapper>
              </TableHead>
              <TableBody>
                {filteredBoard.map((board, index) => (
                  <DataWrapper>
                    <IconWrapper>
                      <FavIcon />
                    </IconWrapper>
                    <DataProjectsName>
                      <LinkforProjects to={`/projects/${board.projectKey}`}>
                        {board.title}
                      </LinkforProjects>
                    </DataProjectsName>
                    <DataKey>{board.projectKey}</DataKey>
                    <DataLeadName>
                      <MemberPhoto
                        $userPhotoWidth="25px"
                        $userPhotoHeight="25px"
                        $userPhotoFontSize="10px"
                        $userBorderadius="50px"
                        //$userBorder={props.$userBorder}
                        $fontWeight="600"
                      />
                      {user?.fullName}
                    </DataLeadName>
                    <IconWrapper />
                    <IconWrapper>
                      <DropdownMenu
                        trigger={
                          <MoreIconButton className="dropdown-trigger">
                            <MoreIcon />
                          </MoreIconButton>
                        }
                        items={[
                          {
                            label: "Move to trash",
                            action: () => openModal(board),
                          },
                          {
                            label: "Archive",
                            action: () => console.log("Go to settings"),
                          },
                        ]}
                      />
                    </IconWrapper>
                  </DataWrapper>
                ))}
              </TableBody>
            </Tables>
          </DataContainer>
          {showModalforCreateButton && (
            <Modal onClose={() => setShowModalforCreateButton(false)}>
              <BoardCreate
                onCreate={addBoard}
                onClose={() => setShowModalforCreateButton(false)}
                projectKey={selectedBoard?.projectKey}
              />
            </Modal>
          )}
          {showModalforDeleteBoard && selectedBoard && (
            <Modal onClose={closeModal}>
              <CloseBoardMenu
                onDelete={() => {
                  deleteItem(selectedBoard._id);
                  closeModal();
                }}
                onClose={closeModal}
                boardName={selectedBoard.title}
              />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default Projects;
