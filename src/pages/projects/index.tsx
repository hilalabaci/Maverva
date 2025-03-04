import { useEffect, useState } from "react";
import Layout from "../templates/layout";
import Modal from "../../components/common/modal";
import {
  CreateButton,
  CreateWrapper,
} from "../../components/layout/navbar/navbar-project/styles";
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
  MoreIcon,
  IconWrapper,
  MoreIconButton,
  LinkforProjects,
  DataKey,
  IconFav,
  FilledIconFav,
  FavIconTable,
} from "./styles";
import Search from "../../components/common/search";
import { useUserContext } from "../../contexts/UserContext";
import { ProjectType } from "../../types";
import { DropdownMenu } from "../../components/common/dropdownMenu/index";
import CloseProjectMenu from "../../features/project/close-project-menu";
import ProjectCreate from "../../features/project/project-add/create";
import ProjectAvatar from "../../features/user/project-avatar";
import Toggle from "../../components/common/toggle";
import MemberPhoto from "../../features/user/member-photo";
import { HoverCardDemo } from "../../components/common/hoverCard";
import {
  deleteProject as deleteProjectApi,
  getProjects,
  updateProjectToFavourite,
} from "../../api/projectApi";
import { useApplicationContext } from "../../contexts/ApplicationContext";

function Projects() {
  const { user } = useUserContext();
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const { selectedProject, setSelectedProject, setSelectedBoard } =
    useApplicationContext();
  const [filteredProject, setFilteredProject] = useState<ProjectType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);
  const [showModalforDeleteProject, setShowModalforDeleteProject] =
    useState(false);

  async function loadProjects(userId: string) {
    try {
      const response = await getProjects(userId);
      if (response && response.data) {
        setProjects(response.data);
      } else {
        throw new Error("Failed to load projects");
      }
    } catch (error) {
      console.error("Failed to load projects:", error);
    }
  }

  function onDelete(id: string) {
    setProjects(projects.filter((project) => project.Id !== id));
  }

  async function deleteProject(projectId: string, userId: string) {
    try {
      const response = await deleteProjectApi(projectId, userId);
      if (response) {
        onDelete(projectId);
      } else {
        throw new Error("Failed to delete project");
      }
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  }

  useEffect(() => {
    if (!user) return;
    loadProjects(user?.Id);
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.Name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProject(filtered);
  }, [searchInput, projects]);

  // Handle project addition
  function addProject(project: ProjectType) {
    setProjects((prevProjects) => [...prevProjects, project]);
  }

  async function handleToggleFavourite(
    projectId: string,
    isFavourite: boolean
  ) {
    if (!user) return;
    try {
      const updatedProject = await updateProjectToFavourite(
        projectId,
        user.Id,
        isFavourite
      );
      if (updatedProject) {
        setProjects((prevProjects) =>
          prevProjects.map((p) =>
            p.Id === projectId ? { ...p, IsFavourite: isFavourite } : p
          )
        );
      }
    } catch (error) {
      console.error("Failed to update favourite status:", error);
    }
  }

  function openModal(project: ProjectType) {
    setShowModalforDeleteProject(true);
    setSelectedProject(project);
  }
  function closeModal() {
    setShowModalforDeleteProject(false);
  }
  useEffect(() => {
    if (projects.length > 0 && !selectedProject) {
      setSelectedProject(projects[0]);
      setSelectedBoard(projects[0].Boards[0]);
    }
  }, [projects]);

  if (!user) return;
  return (
    <Layout onProjectCrate={addProject}>
      <Container>
        <Wrapper>
          <HeaderAndCreateWrapper>
            <HeaderWrapper>
              <Header>Projects</Header>
              <CreateWrapper>
                <Modal
                  trigger={
                    <CreateButton
                      onClick={() => setShowModalforCreateButton(true)}
                    >
                      Create Project
                    </CreateButton>
                  }
                  open={showModalforCreateButton}
                  onChange={setShowModalforCreateButton}
                  onClose={() => setShowModalforCreateButton(false)}
                >
                  <ProjectCreate
                    isOptional={false}
                    onCreate={addProject}
                    onClose={() => setShowModalforCreateButton(false)}
                    projectKey={selectedProject?.Key}
                    BackButton={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </Modal>
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
                    <FavIconTable />
                  </IconWrapper>
                  <Titles>
                    Name
                    {/*  <OrderIcon /> */}
                  </Titles>
                  <Titles>Key</Titles>
                  <Titles>Lead</Titles>
                  <Titles>Project URL</Titles>
                  <Titles>More action</Titles>
                </TableTitleWrapper>
              </TableHead>
              <TableBody>
                {filteredProject.map((project) => (
                  <DataWrapper key={project.Id}>
                    <IconWrapper>
                      <Toggle
                        isActive={project.IsFavourite}
                        activeIcon={<FilledIconFav />}
                        icon={<IconFav />}
                        onToggle={(newState) => {
                          handleToggleFavourite(project.Id, newState);
                        }}
                      />
                    </IconWrapper>
                    <DataProjectsName>
                      <ProjectAvatar
                        $userPhotoWidth="25px"
                        $userPhotoHeight="25px"
                        $userPhotoFontSize="10px"
                        $userBorderadius="50px"
                        //$userBorder={props.$userBorder}
                        $fontWeight="600"
                        projectId={project.Id}
                      />
                      <LinkforProjects
                        to={`/projects/${project.Key}/boards/${project.Boards[0].Id}`}
                        onClick={() => {
                          setSelectedProject(project);
                          setSelectedBoard(project.Boards[0]);
                        }}
                      >
                        {project.Name}
                      </LinkforProjects>
                    </DataProjectsName>
                    <DataKey>{project.Key}</DataKey>
                    <DataLeadName>
                      <HoverCardDemo
                        src={project.LeadUser.ProfilePicture}
                        fullName={project.LeadUser.FullName}
                        email={project.LeadUser.Email}
                        trigger={
                          <MemberPhoto
                            $userPhotoWidth="30px"
                            $userPhotoHeight="30px"
                            $userPhotoFontSize="10px"
                            $userBorderadius="50px"
                            //$userBorder={props.$userBorder}
                            $fontWeight="600"
                            user={project.LeadUser}
                          />
                        }
                      />
                      {project.LeadUser.FullName}
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
                            action: () => openModal(project),
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
          {selectedProject && (
            <Modal
              trigger={<></>}
              onClose={closeModal}
              open={showModalforDeleteProject}
              onChange={setShowModalforDeleteProject}
            >
              <CloseProjectMenu
                onDelete={() => {
                  deleteProject(selectedProject.Id, user.Id);
                  closeModal();
                }}
                onClose={closeModal}
                projectName={selectedProject.Name}
              />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default Projects;
