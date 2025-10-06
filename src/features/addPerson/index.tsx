import { useEffect, useState, useRef, useCallback } from "react";
import AddedPerson from "../addedPerson";
import { BoardType, ApiError } from "../../types/user.types";
import { useUserContext } from "../../contexts/UserContext";
import { DropdownSelectMenu } from "../../components/ui/Select";
import Modal from "../../components/ui/Modal";
import InputRectangle from "../../components/ui/Input/rectangle";
import {
  ButtonWrapper,
  Container,
  GenerelWrapper,
  FielsetWrapper,
  FormWrapper,
  MailWrapper,
  Title,
  TitleWrapper,
  CancelButton,
  SubmitButton,
  AddProjectWrapper,
  IconDown,
  InputforProjectDropDown,
  InputWrapperwithIcon,
  TitleforProject,
  RoleWrapper,
} from "./styles";
import { addUsertoBoard, getBoards } from "../../api/board-api";
import { useParams } from "react-router-dom";
type AddPersonPropsType = {
  projectTitle: string;
  closeModal: () => void;
  projectKey: string;
  projectId: string;
};

type URLParams = {
  boardId: string;
};
function AddPerson({
  projectKey,
  projectId,
  projectTitle,
}: AddPersonPropsType) {
  const hasFetchedBoards = useRef(false);
  const { boardId } = useParams<URLParams>();
  const [showModal, setShowModal] = useState(false);
  const [emailforAddPerson, setEmailforAddPerson] = useState("");
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<BoardType[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showAddedPerson, setShowAddedPerson] = useState(false);
  const { user, token } = useUserContext();
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function handleSubmit() {
    const result = await addUserToBoard();
    if (result) {
      openModal();
    }
  }
  const loadBoards = useCallback(async () => {
    if (!user || !token) return;
    const { ok, data } = await getBoards(projectKey, user.Id, token);
    if (ok && data) {
      setBoards(data);
    }
  }, [projectKey, user, token]);

  useEffect(() => {
    if (hasFetchedBoards.current) return;
    hasFetchedBoards.current = true;
    if (!projectKey || !projectId) return;
    if (!user) return;
    loadBoards();
  }, [projectKey, projectId, user, loadBoards]);

  function handleInputChange(value: string, name: string): void {
    if (name === "email") {
      setEmailforAddPerson(value);
    }
  }
  async function addUserToBoard() {
    if (!projectKey || !boardId || !token) return;
    const boardIds = selectedBoards.map((board) => board.Id);
    const projectData = {
      projectId: projectId,
      boardIds: boardIds,
      email: emailforAddPerson,
      role: selectedRole,
      userId: user?.Id as string,
    };
    try {
      const { ok, data } = await addUsertoBoard(
        projectData,
        projectKey,
        boardId,
        token
      );
      if (ok && data) {
        setErrorMessage(null);
        setShowAddedPerson(true);
        return ok;
      } else {
        setErrorMessage((data as ApiError)?.message || "Failed to add user");
        setShowAddedPerson(false);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message || "Something went wrong");
      }
    }
    closeModal();
  }
  return (
    <Container>
      <GenerelWrapper>
        <FielsetWrapper>
          <TitleWrapper>
            <Title>Add People</Title>
          </TitleWrapper>

          <FormWrapper
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <MailWrapper>
              <InputRectangle
                type="email"
                onChange={(value: string) => handleInputChange(value, "email")}
                value={emailforAddPerson}
                placeholder="e.g., Maria, maria@company.com"
                labelValue="Names or emails"
                error={errorMessage}
              />
            </MailWrapper>
            <AddProjectWrapper>
              <TitleforProject>Project</TitleforProject>
              <DropdownSelectMenu
                triggerWidth={true}
                title="Boards"
                trigger={
                  <InputWrapperwithIcon>
                    <InputforProjectDropDown
                      type="text"
                      value={selectedBoards
                        .map((p) => ({ title: p.Name, key: projectKey }))
                        .reduce(
                          (acc, project) =>
                            acc + `${project.title}(${project.key}) `,
                          ""
                        )}
                      maxLength={64}
                    />
                    <IconDown />
                  </InputWrapperwithIcon>
                }
                items={boards.map((board) => {
                  return {
                    label: board.Name + " (" + projectKey + ")",
                    selected: !!selectedBoards.find((p) => p.Id === board.Id),
                    action: () => {
                      const selected = selectedBoards.find(
                        (p) => p.Id === board.Id
                      );
                      if (selected)
                        setSelectedBoards(
                          selectedBoards.filter((p) => p.Id !== selected.Id)
                        );
                      else setSelectedBoards([...selectedBoards, board]);
                    },
                  };
                })}
              />
            </AddProjectWrapper>
            <RoleWrapper>
              <TitleforProject>Role</TitleforProject>
              <DropdownSelectMenu
                triggerWidth={true}
                title="Role"
                trigger={
                  <InputWrapperwithIcon>
                    <InputforProjectDropDown
                      type="text"
                      value={selectedRole}
                      maxLength={64}
                    />
                    <IconDown />
                  </InputWrapperwithIcon>
                }
                items={[
                  {
                    label: "Admin",
                    action: () => {
                      setSelectedRole("Admin");
                    },
                  },
                  {
                    label: "Member",
                    action: () => {
                      setSelectedRole("Member");
                    },
                  },
                  {
                    label: "Viewer",
                    action: () => {
                      setSelectedRole("Viewer");
                    },
                  },
                ]}
              />
            </RoleWrapper>
            <ButtonWrapper>
              <CancelButton type="button" onClick={closeModal}>
                Cancel
              </CancelButton>
              <Modal
                trigger={<SubmitButton type="submit">Add</SubmitButton>}
                onClose={closeModal}
                open={showModal}
                onChange={setShowModal}
              >
                {showAddedPerson && (
                  <AddedPerson
                    onClose={closeModal}
                    projectTitle={projectTitle}
                    emailforAddPerson={emailforAddPerson}
                  />
                )}
              </Modal>
            </ButtonWrapper>
          </FormWrapper>
        </FielsetWrapper>
      </GenerelWrapper>
    </Container>
  );
}
export default AddPerson;
