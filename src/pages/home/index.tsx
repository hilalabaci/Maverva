import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../components/actions/card/card-list/index";
import TopMenu from "../../components/actions/top-menu";
import { ProjectType, CardType, BoardType } from "../../types";
import Layout from "../templates/layout";
import { Wrapper, Main, MainContainer, ProjectMenuAndSideBar } from "./styles";
import { useParams } from "react-router-dom";
import ProjectMenu from "../../components/actions/project/project-menu";
import SideBar from "../../components/tools/sideBar";

type URLParams = {
  projectKey: string;
  boardId?: string;
};
function Home() {
  const { projectKey, boardId } = useParams<URLParams>();
  const [cards, setCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  const [selectedBoard, setSelectedBoard] = useState<BoardType>();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  async function loadSelectedProject() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/${projectKey}`, // Backend endpoint
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const projectData = await response.json();
        setSelectedProject(projectData); // Projeyi state'e kaydediyoruz
      } else {
        console.error("Failed to fetch project. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  async function loadSelectedBoard() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}projects/${projectKey}/boards/${boardId}`, // Backend endpoint
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const boardData = (await response.json()) as BoardType;
        setSelectedBoard(boardData); // Projeyi state'e kaydediyoruz
      } else {
        console.error("Failed to fetch board. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }

  async function loadCards(project: ProjectType) {
    setSelectedProject(project);
    try {
      const response = await fetch(
        // `${process.env.REACT_APP_API_URL}projects/${projectKey}/boards/${boardId}`,
        process.env.REACT_APP_API_URL + "card?boardId=" + boardId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(`this is a data: ${data}`);
        setCards(data);
      }
    } catch (error: any) {
      console.error("Fetch error:", error);
    }
  }

  function deleteCard(id: string) {
    setCards(cards.filter((card) => card._id !== id));
  }

  function updateCard(card: CardType) {
    const index = cards.findIndex((b) => b._id === card._id);
    const newCards = [...cards];
    newCards[index] = card;
    setCards(newCards);
    /*    setCards([...cards.filter((card) => card._id !== id), card]); */
  }

  useEffect(() => {
    if (selectedProject) {
      loadCards(selectedProject);
    }
  }, [selectedProject, boardId]);
  useEffect(() => {
    if (projectKey) {
      loadSelectedProject();
    }
  }, [projectKey]);

  useEffect(() => {
    if (!boardId) {
      setSelectedBoard(undefined);
      return;
    }
    loadSelectedBoard();
  }, [boardId]);

  useEffect(() => {
    setFilteredCards(
      cards.filter((card) => card.content.includes(searchInput))
    );
  }, [searchInput, cards]);

  function addedCard(card: CardType) {
    setCards([...cards, card]);
  }

  return (
    <Layout onProjectCrate={(project) => {}}>
      <Wrapper>
        <ProjectMenuAndSideBar
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <ProjectMenu
            projectKey={projectKey as string}
            projectId={selectedProject?._id as string}
            hideMenu={hideMenu}
            ProjectTitle={selectedProject?.title as string}
          />
          <SideBar
            hideMenu={hideMenu}
            setHideMenu={setHideMenu}
            isHovered={isHovered}
          />
        </ProjectMenuAndSideBar>
        <MainContainer>
          {selectedProject && (
            <TopMenu
              selectedBoardId={selectedBoard?._id as string}
              selectedBoardTitle={selectedBoard?.title as string}
              projectKey={projectKey as string}
              onProjectUpdate={() => {}}
              projectId={selectedProject?._id as string}
              topMenuTitle={selectedProject?.title as string}
              user={selectedProject?.userId}
              setSearchInput={setSearchInput}
            />
          )}
          <Main>
            {selectedBoard ? (
              <DndProvider backend={HTML5Backend}>
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="TO DO"
                  numberOfFilteredCards={
                    filteredCards.filter((card) => card.status === 1).length
                  }
                  numberOfCards={
                    cards.filter((card) => card.status === 1).length
                  }
                  projectKey={projectKey as string}
                  cards={filteredCards.filter((card) => card.status === 1)}
                  status={1}
                  boardId={selectedBoard._id}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="IN PROGRESS"
                  numberOfFilteredCards={
                    filteredCards.filter((card) => card.status === 2).length
                  }
                  numberOfCards={
                    cards.filter((card) => card.status === 2).length
                  }
                  projectKey={projectKey as string}
                  cards={filteredCards.filter((card) => card.status === 2)}
                  status={2}
                  boardId={selectedBoard._id}
                />
                <CardList
                  onUpdate={updateCard}
                  onDelete={deleteCard}
                  addedCard={addedCard}
                  title="DONE"
                  numberOfFilteredCards={
                    filteredCards.filter((card) => card.status === 3).length
                  }
                  numberOfCards={
                    cards.filter((card) => card.status === 3).length
                  }
                  projectKey={projectKey as string}
                  cards={filteredCards.filter((card) => card.status === 3)}
                  status={3}
                  boardId={selectedBoard._id}
                />
              </DndProvider>
            ) : undefined}
          </Main>
        </MainContainer>
      </Wrapper>
    </Layout>
  );
}
export default Home;
