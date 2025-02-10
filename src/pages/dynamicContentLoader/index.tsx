import { useCallback, useContext, useEffect, useState } from "react";
import TopMenu from "../../features/top-menu";
import {
  ProjectType,
  IssueType,
  BoardType,
  SprintType,
  IssueStatus,
} from "../../types";
import Layout from "../templates/layout";
import { useLocation, useParams } from "react-router-dom";
import MainContainerLayout from "../templates/mainContainerLayout";
import apiHelper from "../../api/apiHelper";
import {
  ActiveSprintWrapper,
  BacklogWrapper,
  Main,
  MainContainer,
} from "./styles";
import Backlog from "../backlog";
import Scroll from "../../components/common/scroll";
import ActiveSprint from "../active-sprint";

type URLParams = {
  projectKey: string;
  boardId?: string;
};
function DynamicContentLoader() {
  const location = useLocation();
  const { projectKey, boardId } = useParams<URLParams>();
  const [activeSprint, setActiveSprint] = useState<SprintType>();
  const [cards, setCards] = useState<IssueType[]>();
  const [filteredCards, setFilteredCards] = useState<IssueType[]>([]);
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
        setCards(data.IssueIds);
      } else {
        console.error("Failed to fetch board. Status:");
      }
    } catch (error) {
      console.error("Error fetching board:", error);
    }
  }, [projectKey, boardId]);

  useEffect(() => {
    loadActiveSprint();
    console.log(activeSprint?.BoardId);
    console.log(activeSprint?.Board);
  }, [loadActiveSprint]);

  function deleteCard(id: string) {
    setCards(cards?.filter((card) => card.Id !== id));
  }

  function updateCard(card: IssueType) {
    if (!cards) return;
    const index = cards.findIndex((b) => b.Id === card.Id);
    const newCards = [...cards];
    newCards[index] = card;
    setCards(newCards);
    /*    setCards([...cards.filter((card) => card.id !== id), card]); */
  }
  function onUpdateContent(card: IssueType) {
    if (!cards) return;
    loadActiveSprint();
  }

  useEffect(() => {
    if (projectKey) {
      loadSelectedProject();
    }
  }, [projectKey]);

  useEffect(() => {
    if (!cards) return;
    setFilteredCards(
      cards.filter((card) => card.Summary.includes(searchInput))
    );
  }, [searchInput, cards]);

  function addedCard(card: IssueType) {
    if (!cards) return;
    setCards([...cards, card]);
  }
  function updatedCardsAfterDeleteColumn(updateCards: IssueType[]) {
    if (!cards) return;
    const updatedCards = updateCards.map((card) => ({
      ...card,
      status: IssueStatus.Backlog,
    }));

    const updatedCardIds = updatedCards.map((card) => card.Id);
    const remainingCards = cards.filter(
      (card) => !updatedCardIds.includes(card.Id)
    );
    setCards([...updatedCards, ...remainingCards]);
  }

  return (
    <Layout onProjectCrate={(project) => {}}>
      <MainContainerLayout
        projectKey={projectKey as string}
        projectId={selectedProject?.Id as string}
        projectTitle={selectedProject?.Name as string}
        selectedBoardTitle={activeSprint?.BoardId?.Name as string}
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
              selectedBoardTitle={activeSprint?.BoardId?.Name as string}
              projectKey={projectKey as string}
              onProjectUpdate={() => {}}
              projectId={selectedProject?.Id as string}
              topMenuTitle={selectedProject?.Name as string}
              user={selectedProject?.LeadUser} //check here!!
              setSearchInput={setSearchInput}
              boardId={boardId as BoardType | undefined}
            />
          )}
          <Scroll
            children={
              <Main>
                {location.pathname.includes("/backlog") ? (
                  <BacklogWrapper>
                    <Backlog />
                  </BacklogWrapper>
                ) : (
                  <ActiveSprintWrapper>
                    <ActiveSprint
                      activeSprint={activeSprint}
                      boardId={activeSprint?.BoardId as string | undefined}
                      onUpdate={updateCard}
                      onUpdateContent={onUpdateContent}
                      onDelete={deleteCard}
                      addedCard={addedCard}
                      filteredCards={filteredCards}
                      cards={filteredCards}
                      projectKey={projectKey}
                      updatedCardsAfterDeleteColumn={
                        updatedCardsAfterDeleteColumn
                      }
                    />
                  </ActiveSprintWrapper>
                )}
              </Main>
            }
            scrollHeight="67vh"
            scrollWidth="81vw"
          ></Scroll>
        </MainContainer>
      </MainContainerLayout>
    </Layout>
  );
}
export default DynamicContentLoader;
