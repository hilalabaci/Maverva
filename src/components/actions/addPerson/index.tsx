import React, { useState } from "react";
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
} from "./styles";
import Modal from "../modal";
import AddedPerson from "../addedPerson";
type AddPersonPropsType = {
  boardTitle: string;
  emailforAddPerson: string;
  closeModal: () => void;
  onSubmit: () => Promise<boolean>;
  handleChange: (value: string) => void;
};

function AddPerson(props: AddPersonPropsType) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function handleSubmit() {
    const result = await props.onSubmit();
    if (result) {
      openModal();
    }
  }

  return (
    <Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <AddedPerson
            onClose={() => {
              closeModal();
              props.closeModal();
            }}
            boardTitle={props.boardTitle}
            emailforAddPerson={props.emailforAddPerson}
          />
        </Modal>
      )}
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
                onChange={(e) => props.handleChange(e.target.value)}
                value={props.emailforAddPerson}
                name="email"
                placeholder="e.g., Maria, maria@company.com"
              ></MailInput>
            </MailWrapper>
            {/*<WarningMessage>user not found</WarningMessage>*/}
            {/* <RoleWrapper>
              <LabelTitle for="role">Role</LabelTitle>
              <RoleCheckbox></RoleCheckbox>
            </RoleWrapper> */}
            <ButtonWrapper>
              <CancelButton onClick={props.closeModal}>Cancel</CancelButton>
              <SubmitButton type="submit">Add</SubmitButton>
            </ButtonWrapper>
          </FormWrapper>
        </FielsetWrapper>
      </GenerelWrapper>
    </Container>
  );
}
export default AddPerson;
