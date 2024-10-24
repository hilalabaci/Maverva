import { useEffect, useState } from "react";
import Layout from "../templates/layout";
import Modal from "../../components/actions/modal";
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
  MoreIcon,
  IconWrapper,
  MoreIconButton,
  LinkforProjects,
  DataKey,
  IconFav,
  FilledIconFav,
  FavIconTable,
} from "./styles";
import Search from "../../components/tools/search";
import { useUserContext } from "../../contexts/UserContext";
import { ProjectType } from "../../types";
import MemberPhoto from "../../components/tools/user/member-photo";
import { DropdownMenu } from "../../components/tools/dropdownMenu/index";
import CloseProjectMenu from "../../components/actions/project/close-project-menu";
import ProjectCreate from "../../components/actions/project/project-add/create";
import ProjectAvatar from "../../components/tools/user/project-avatar";
import Toggle from "../../components/tools/toggle";

type ProjectsPropsType = {
  onProjectChange: (project: ProjectType) => void;
};

function Projects(props: ProjectsPropsType) {
  const { user } = useUserContext();
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >();
  const [filteredProject, setFilteredProject] = useState<ProjectType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [showModalforCreateButton, setShowModalforCreateButton] =
    useState(false);
  const [showModalforDeleteProject, setShowModalforDeleteProject] =
    useState(false);

  async function loadProjects() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project?userId=" + user?._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as ProjectType[];
      setProjects(data);
    }
  }

  function onDelete(id: string) {
    setProjects(projects.filter((project) => project._id !== id));
  }

  async function deleteItem(id: string) {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project?id=" + id,
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
    loadProjects();
    // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProject(filtered);
  }, [searchInput, projects]);

  function openModal(project: ProjectType) {
    setShowModalforDeleteProject(true);
    setSelectedProject(project);
  }
  function closeModal() {
    setShowModalforDeleteProject(false);
    setSelectedProject(undefined);
  }
  function addProject(project: ProjectType) {
    setProjects([...projects, project]);
  }

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
                    projectKey={selectedProject?.projectKey}
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
                    Name <OrderIcon />
                  </Titles>
                  <Titles>Key</Titles>
                  <Titles>Lead</Titles>
                  <Titles>Project URL</Titles>
                  <Titles>More action</Titles>
                </TableTitleWrapper>
              </TableHead>
              <TableBody>
                {filteredProject.map((project, index) => (
                  <DataWrapper>
                    <IconWrapper>
                      <Toggle
                        activeIcon={<FilledIconFav />}
                        icon={<IconFav />}
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
                        projectId={project._id}
                      />
                      <LinkforProjects to={`/projects/${project.projectKey}`}>
                        {project.title}
                      </LinkforProjects>
                    </DataProjectsName>
                    <DataKey>{project.projectKey}</DataKey>
                    <DataLeadName>
                      <MemberPhoto
                        $userPhotoWidth="30px"
                        $userPhotoHeight="30px"
                        $userPhotoFontSize="10px"
                        $userBorderadius="50px"
                        //$userBorder={props.$userBorder}
                        $fontWeight="600"
                        user={project.leadUser}
                      />
                      {project.leadUser.fullName}
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
                  deleteItem(selectedProject._id);
                  closeModal();
                }}
                onClose={closeModal}
                projectName={selectedProject.title}
              />
            </Modal>
          )}
        </Wrapper>
      </Container>
    </Layout>
  );
}
export default Projects;
