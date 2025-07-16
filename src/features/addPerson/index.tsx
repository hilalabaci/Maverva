import { useEffect, useState } from "react";
import AddedPerson from "../addedPerson";
import { BoardType } from "../../types";
import { useUserContext } from "../../contexts/UserContext";
import { DropdownSelectMenu } from "../../components/common/select";
import Modal from "../../components/common/modal";
import InputRectangle from "../../components/common/input/rectangle";
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
import { addUsertoBoard, getBoards } from "../../api/boardApi";
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
type ApiError = {
  message: string;
};

function AddPerson({
  projectKey,
  projectId,
  projectTitle,
}: AddPersonPropsType) {
  const { boardId } = useParams<URLParams>();
  const [showModal, setShowModal] = useState(false);
  const [emailforAddPerson, setEmailforAddPerson] = useState("");
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<BoardType[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showAddedPerson, setShowAddedPerson] = useState(false);
  const { user } = useUserContext();
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
  async function loadBoards() {
    if (!user) return;
    const { ok, data } = await getBoards(projectKey, user.Id);
    if (ok && data) {
      setBoards(data);
    }
  }
  useEffect(() => {
    loadBoards();
  }, [projectKey, projectId]);

  function handleInputChange(value: string, name: string): void {
    if (name === "email") {
      setEmailforAddPerson(value);
    }
  }
  async function addUserToBoard() {
    if (!projectKey || !boardId) return;
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
        boardId
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
                title="email"
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
              <CancelButton
                type="button"
                onClick={() => {
                  closeModal();
                }}
              >
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
                    onClose={() => {
                      closeModal();
                    }}
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
