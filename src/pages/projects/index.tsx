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
} from "./styles";
import Search from "../../components/tools/search";
import { useUserContext } from "../../contexts/UserContext";
import { BoardType } from "../../types";
import MemberPhoto from "../../components/tools/user/member-photo";

type ProjectsPropsType = {
  onBoardChange: (board: BoardType) => void;
};

function Projects(props: ProjectsPropsType) {
  const { user } = useUserContext();
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);

  useEffect(() => {
    if (!user) return;
    loadBoards();
    // eslint-disable-next-line
  }, [user]);

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
              onSearch={function (value: string): void {
                throw new Error("Function not implemented.");
              }}
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
                  <Titles>Lead</Titles>
                  <Titles>Project URL</Titles>
                  <Titles>More action</Titles>
                </TableTitleWrapper>
              </TableHead>
              <TableBody>
                {boards.map((board, index) => (
                  <DataWrapper>
                    <IconWrapper>
                      <FavIcon />
                    </IconWrapper>
                    <DataLeadName>{board.title}</DataLeadName>
                    <DataProjectsName>
                      <MemberPhoto
                        $userPhotoWidth="25px"
                        $userPhotoHeight="25px"
                        $userPhotoFontSize="10px"
                        $userBorderadius="50px"
                        //$userBorder={props.$userBorder}
                        $fontWeight="600"
                      />
                      {user?.fullName}
                    </DataProjectsName>
                    <IconWrapper />
                    <IconWrapper>
                      <MoreIcon />
                    </IconWrapper>
                  </DataWrapper>
                ))}
              </TableBody>
            </Tables>
          </DataContainer>
          {showModalforCreateButton && (
            <Modal onClose={() => setShowModalforCreateButton(false)}>
              <BoardCreate
                onCreate={() => {}}
                onClose={() => setShowModalforCreateButton(false)}
              />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default Projects;
