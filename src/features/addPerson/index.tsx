import React, { useEffect, useState } from "react";
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
  WarningMessage,
  RoleWrapper,
  RoleCheckbox,
} from "./styles";
import AddedPerson from "../addedPerson";
import { useApplicationContext } from "../../contexts/ApplicationContext";
import { BoardType } from "../../types";
import { useUserContext } from "../../contexts/UserContext";
import apiHelper from "../../api/apiHelper";
import { DropdownSelectMenu } from "../../components/common/select";
import Modal from "../../components/common/modal";
import InputRectangle from "../../components/common/input/rectangle";
import { LabelTitle } from "../../components/common/input/rectangle/styles";
type AddPersonPropsType = {
  projectTitle: string;
  closeModal: () => void;
  projectKey: string;
  projectId: string;
};

function AddPerson(props: AddPersonPropsType) {
  const [showModal, setShowModal] = useState(false);
  const [emailforAddPerson, setEmailforAddPerson] = useState("");
  const { boards, setBoards } = useApplicationContext();
  const [selectedBoards, setSelectedBoards] = useState<BoardType[]>([]);
  const [selectedRole, setSelectedRole] = useState("");
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
    const { ok, data } = await apiHelper.getBoards(props.projectKey, user.Id);
    if (ok && data) {
      setBoards(data);
    }
  }
  useEffect(() => {
    loadBoards();
  }, []);

  function handleInputChange(value: string, name: string): void {
    if (name === "email") {
      setEmailforAddPerson(value);
    }
  }
  async function addUserToBoard() {
    const projectId = props.projectId;
    const boardIds = selectedBoards.map((board) => board.Id);
    const projectData = {
      projectId: projectId,
      boardIds: boardIds,
      email: emailforAddPerson,
    };
    const { ok, data } = await apiHelper.addUsertoBoard(projectData);
    if (ok && data) return ok;
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
                //onChange={(e) => handleInputChange(e.target.value, "email")}
                onChange={(value: string) => handleInputChange(value, "email")}
                value={emailforAddPerson}
                placeholder="e.g., Maria, maria@company.com"
                labelValue="Names or emails"
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
                        .map((p) => ({ title: p.Name, key: props.projectKey }))
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
                    label: board.Name + " (" + props.projectKey + ")",
                    isSelected: !!selectedBoards.find((p) => p.Id === board.Id),
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
                title="Boards"
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
                    label: "Editor",
                    action: () => {
                      setSelectedRole("Editor");
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
              <CancelButton onClick={props.closeModal}>Cancel</CancelButton>
              <Modal
                trigger={<SubmitButton type="submit">Add</SubmitButton>}
                onClose={closeModal}
                open={showModal}
                onChange={setShowModal}
              >
                <AddedPerson
                  onClose={() => {
                    closeModal();
                    props.closeModal();
                  }}
                  projectTitle={props.projectTitle}
                  emailforAddPerson={emailforAddPerson}
                />
              </Modal>
            </ButtonWrapper>
          </FormWrapper>
        </FielsetWrapper>
      </GenerelWrapper>
    </Container>
  );
}
export default AddPerson;
