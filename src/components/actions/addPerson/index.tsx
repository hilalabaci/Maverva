import React, { useEffect, useState } from "react";
import {
  ButtonWrapper,
  Container,
  GenerelWrapper,
  FielsetWrapper,
  FormWrapper,
  LabelTitle,
  MailInput,
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
} from "./styles";
import Modal from "../modal";
import AddedPerson from "../addedPerson";
import { DropdownSelectMenu } from "../../tools/select";
import { BoardType } from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
type AddPersonPropsType = {
  projectTitle: string;
  closeModal: () => void;
  projectKey: string;
  projectId: string;
};

function AddPerson(props: AddPersonPropsType) {
  const [showModal, setShowModal] = useState(false);
  const [emailforAddPerson, setEmailforAddPerson] = useState("");
  const [boards, setBoards] = useState<BoardType[]>([]);
  const [selectedBoards, setSelectedBoards] = useState<BoardType[]>([]);
  const { user } = useUserContext();

  async function loadBoards() {
    const response = await fetch(
      process.env.REACT_APP_API_URL +
        "board?projectKey=" +
        props.projectKey +
        "&userId=" +
        user?._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as BoardType[];
      setBoards(data);
    }
  }
  useEffect(
    () => {
      loadBoards();
    },
    [
      /**DO:board ekledikten sonra kartlari guncelle**/
    ]
  );

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  function handleChange(value: string) {
    setEmailforAddPerson(value);
  }
  async function handleSubmit() {
    const result = await onSubmit();
    if (result) {
      openModal();
    }
  }

  async function onSubmit() {
    const projectId = props.projectId;
    const boardIds = selectedBoards.map((board) => board._id);
    const projectData = {
      projectId: projectId,
      boardIds: boardIds,
      email: emailforAddPerson,
    };
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project/boards/add-user",
      {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.ok;
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
              <LabelTitle htmlFor="email">Names or emails</LabelTitle>
              <MailInput
                onChange={(e) => handleChange(e.target.value)}
                value={emailforAddPerson}
                name="email"
                placeholder="e.g., Maria, maria@company.com"
              ></MailInput>
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
                        .map((p) => ({ title: p.title, key: props.projectKey }))
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
                    label: board.title + " (" + props.projectKey + ")",
                    isSelected: !!selectedBoards.find(
                      (p) => p._id === board._id
                    ),
                    action: () => {
                      const selected = selectedBoards.find(
                        (p) => p._id === board._id
                      );
                      if (selected)
                        setSelectedBoards(
                          selectedBoards.filter((p) => p._id !== selected._id)
                        );
                      else setSelectedBoards([...selectedBoards, board]);
                    },
                  };
                })}
              />
            </AddProjectWrapper>
            {/*<WarningMessage>user not found</WarningMessage>*/}
            {/* <RoleWrapper>
              <LabelTitle for="role">Role</LabelTitle>
              <RoleCheckbox></RoleCheckbox>
            </RoleWrapper> */}
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
