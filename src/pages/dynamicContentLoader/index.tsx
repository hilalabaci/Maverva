import { useCallback, useContext, useEffect, useState } from "react";
import TopMenu from "../../components/actions/top-menu";
import { ProjectType, CardType, BoardType, SprintType } from "../../types";
import Layout from "../templates/layout";
import { useLocation, useParams } from "react-router-dom";
import MainContainerLayout from "../templates/mainContainerLayout";
import apiHelper from "../../api/apiHelper";
import { Main, MainContainer } from "./styles";
import Backlog from "../contents/backlog";
import Scroll from "../../components/tools/scroll";
import ActiveSprint from "../contents/active-sprint";
import { useApplicationContext } from "../../contexts/ApplicationContext";

type URLParams = {
  projectKey: string;
  boardId?: string;
};
function DynamicContentLoader() {
  const location = useLocation();
  const { projectKey, boardId } = useParams<URLParams>();
  const [activeSprint, setActiveSprint] = useState<SprintType>();
  const [cards, setCards] = useState<CardType[]>();
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  const [hideMenu, setHideMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  async function loadSelectedProject() {
    try {
      if (!projectKey) {
        return;
      }
      const { ok, data } = await apiHelper.getSelectedProject(projectKey);
      if (ok && data) {
        if (!data) {
        }
        setSelectedProject(data);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }

  const loadActiveSprint = useCallback(async () => {
    try {
      if (!projectKey) {
        console.log(`projectKey not found ${projectKey}`);
        return;
      } else if (!boardId) {
        console.log(`boardId not found ${boardId}`);
        return;
      }
      const { ok, data } = await apiHelper.getActiveSprint(projectKey, boardId);

      if (ok && data) {
        setActiveSprint(data);
        setCards(data.cardIds);
      } else {
        console.error("Failed to fetch board. Status:");
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }, [projectKey, boardId]);

  useEffect(() => {
    loadActiveSprint();
    console.log(activeSprint?.boardId);
    console.log(activeSprint?.boardName);
  }, [loadActiveSprint]);

  function deleteCard(id: string) {
    setCards(cards?.filter((card) => card._id !== id));
  }

  function updateCard(card: CardType) {
    if (!cards) return;
    const index = cards.findIndex((b) => b._id === card._id);
    const newCards = [...cards];
    newCards[index] = card;
    setCards(newCards);
    /*    setCards([...cards.filter((card) => card._id !== id), card]); */
  }

  useEffect(() => {
    if (projectKey) {
      loadSelectedProject();
    }
  }, [projectKey]);

  useEffect(() => {
    if (!cards) return;
    setFilteredCards(
      cards.filter((card) => card.content.includes(searchInput))
    );
  }, [searchInput, cards]);

  function addedCard(card: CardType) {
    if (!cards) return;
    setCards([...cards, card]);
  }

  return (
    <Layout onProjectCrate={(project) => {}}>
      <MainContainerLayout
        projectKey={projectKey as string}
        projectId={selectedProject?._id as string}
        projectTitle={selectedProject?.title as string}
        selectedBoardTitle={activeSprint?.boardId?.title as string}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        hideMenu={hideMenu}
        setHideMenu={setHideMenu}
        isHovered={isHovered}
        selectedBoardId={boardId as unknown as BoardType}
      >
        <MainContainer>
          {selectedProject && (
            <TopMenu
              selectedBoardId={boardId as string}
              selectedBoardTitle={activeSprint?.boardId?.title as string}
              projectKey={projectKey as string}
              onProjectUpdate={() => {}}
              projectId={selectedProject?._id as string}
              topMenuTitle={selectedProject?.title as string}
              user={selectedProject?.userId}
              setSearchInput={setSearchInput}
              boardId={boardId as BoardType | undefined}
            />
          )}
          <Scroll
            children={
              <Main>
                {location.pathname.includes("/backlog") ? (
                  <Backlog />
                ) : (
                  <ActiveSprint
                    activeSprint={activeSprint}
                    boardId={activeSprint?.boardId as string | undefined}
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
