import { useEffect, useState } from "react";
import TopMenu from "../../components/actions/top-menu";
import { ProjectType, CardType, BoardType } from "../../types";
import Layout from "../templates/layout";
import { useLocation, useParams } from "react-router-dom";
import MainContainerLayout from "../templates/mainContainerLayout";
import apiHelper from "../../api/apiHelper";
import { Main, MainContainer } from "./styles";
import Backlog from "../contents/backlog";
import ActiveSprints from "../contents/active-sprints";
import Scroll from "../../components/tools/scroll";

type URLParams = {
  projectKey: string;
  boardId?: string;
};
function DynamicContentLoader() {
  const location = useLocation();
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
      if (!projectKey) {
        console.log(`projectKey not found ${projectKey}`);
        return;
      }
      const { ok, data } = await apiHelper.getSelectedProject(projectKey);
      if (ok && data) {
        if (!data) {
          console.log(`this is data: ${data}`);
        }
        setSelectedProject(data);
        console.log(selectedProject);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  async function loadSelectedBoard() {
    try {
      if (!projectKey) {
        console.log(`projectKey not found ${projectKey}`);
        return;
      } else if (!boardId) {
        console.log(`boardId not found ${boardId}`);
        return;
      }
      const { ok, data } = await apiHelper.getSelectedBoard(
        projectKey,
        boardId
      );
      if (ok && data) {
        setSelectedBoard(data);
      } else {
        console.error("Failed to fetch board. Status:");
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }
  async function loadCards(project: ProjectType) {
    setSelectedProject(project);
    if (!boardId) {
      console.log(`boardId not found ${boardId}`);
      return;
    }
    try {
      const { ok, data } = await apiHelper.getCards(boardId);
      if (ok && data) setCards(data);
    } catch (error) {
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
      <MainContainerLayout
        projectKey={projectKey as string}
        projectId={selectedProject?._id as string}
        projectTitle={selectedProject?.title as string}
        selectedBoardTitle={selectedBoard?.title as string}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        hideMenu={hideMenu}
        setHideMenu={setHideMenu}
        isHovered={isHovered}
        selectedBoardId={selectedBoard?._id as string}
      >
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
              boardId={boardId}
            />
          )}
          <Scroll
            children={
              <Main>
                {location.pathname.includes("/backlog") ? (
                  <Backlog />
                ) : (
                  <ActiveSprints
                    selectedBoard={selectedBoard}
                    onUpdate={updateCard}
                    onDelete={deleteCard}
                    addedCard={addedCard}
                    filteredCards={filteredCards}
                    cards={filteredCards}
                    projectKey={projectKey}
                  />
                )}
              </Main>
            }
            scrollHeight="500px"
          ></Scroll>
        </MainContainer>
      </MainContainerLayout>
    </Layout>
  );
}
export default DynamicContentLoader;
