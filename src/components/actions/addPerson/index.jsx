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

function AddPerson(props) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
          <FormWrapper onSubmit={handleSubmit}>
            <MailWrapper>
              <LabelTitle for="email">Names or emails</LabelTitle>
              <MailInput
                onChange={props.handleChange}
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
