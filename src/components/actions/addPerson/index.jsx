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
  const [emailforAddPerson, setEmailforAddPerson] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleChange(event) {
    setEmailforAddPerson(event.target.value);
  }

  function openModal(e) {
    setShowModal(true);
    e.preventDefault();
  }
  function closeModal() {
    setShowModal(false);
  }

  return (
    <Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <AddedPerson
            onClose={closeModal}
            emailforAddPerson={emailforAddPerson}
          />
        </Modal>
      )}
      <GenerelWrapper>
        <FielsetWrapper>
          <TitleWrapper>
            <Title>Add People</Title>
          </TitleWrapper>
          <FormWrapper>
            <MailWrapper>
              <LabelTitle for="email">Names or emails</LabelTitle>
              <MailInput
                onChange={handleChange}
                value={emailforAddPerson}
                name="email"
                placeholder="e.g., Maria, maria@company.com"
              ></MailInput>
            </MailWrapper>
            {/* <RoleWrapper>
              <LabelTitle for="role">Role</LabelTitle>
              <RoleCheckbox></RoleCheckbox>
            </RoleWrapper> */}
            <ButtonWrapper>
              <CancelButton onClick={props.closeModal}>Cancel</CancelButton>
              <SubmitButton onClick={openModal}>Add</SubmitButton>
            </ButtonWrapper>
          </FormWrapper>
        </FielsetWrapper>
      </GenerelWrapper>
    </Container>
  );
}
export default AddPerson;
