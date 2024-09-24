import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CardList from "../../components/actions/card/card-list/index";
import TopMenu from "../../components/actions/top-menu";
import { ProjectType, CardType } from "../../types";
import Layout from "../templates/layout";
import { Wrapper, Main, MainContainer, ProjectMenuAndSideBar } from "./styles";
import { useParams } from "react-router-dom";
import ProjectMenu from "../../components/actions/project/project-menu";
import SideBar from "../../components/tools/sideBar";

function Home() {
  const { projectKey } = useParams<{ projectKey: string }>();
  const [cards, setCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectType>();
  const [hideMenu, setHideMenu] = useState(false);

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

  async function loadCards(project: ProjectType) {
    setSelectedProject(project);
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "card?projectKey=" + projectKey,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
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
  }, [selectedProject]);
  useEffect(() => {
    if (projectKey) {
      loadSelectedProject();
    }
  }, [projectKey]);

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
        <ProjectMenuAndSideBar>
          <ProjectMenu
            projectKey={selectedProject?.projectKey as string}
            hideMenu={hideMenu}
            ProjectTitle={selectedProject?.title as string}
          />
          <SideBar hideMenu={hideMenu} setHideMenu={setHideMenu} />
        </ProjectMenuAndSideBar>
        <MainContainer>
          {selectedProject && (
            <TopMenu
              projectKey={selectedProject.projectKey}
              onProjectUpdate={() => {}}
              projectId={selectedProject?._id as string}
              topMenuTitle={selectedProject?.title as string}
              user={selectedProject?.userId}
              setSearchInput={setSearchInput}
            />
          )}
          <Main>
            {selectedProject ? (
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
                  projectKey={selectedProject.projectKey}
                  cards={filteredCards.filter((card) => card.status === 1)}
                  status={1}
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
                  projectKey={selectedProject.projectKey}
                  cards={filteredCards.filter((card) => card.status === 2)}
                  status={2}
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
                  projectKey={selectedProject.projectKey}
                  cards={filteredCards.filter((card) => card.status === 3)}
                  status={3}
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
