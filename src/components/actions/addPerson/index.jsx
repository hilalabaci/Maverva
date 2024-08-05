import React, { useState } from "react";
//import { formatDistanceToNow } from "date-fns";
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
  //const [boardTitle, setBoardTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  //const [clickTime, setClickTime] = useState(null);

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    /**const now = new Date();
    setClickTime(now);
    const timeForAddPerson = formatDistanceToNow(clickTime, {
      addSuffix: true,
    });
    console.log(timeForAddPerson);**/

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
            onClose={closeModal}
            emailforAddPerson={props.emailforAddPerson}
          />
        </Modal>
      )}
      <GenerelWrapper>
        <FielsetWrapper>
          <TitleWrapper>
            <Title>Add People</Title>
          </TitleWrapper>
          <FormWrapper onSubmit={handleSubmit} >
            <MailWrapper>
              <LabelTitle for="email">Names or emails</LabelTitle>
              <MailInput
                onChange={props.handleChange}
                value={props.emailforAddPerson}
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
              <SubmitButton type="submit">Add</SubmitButton>
            </ButtonWrapper>
          </FormWrapper>
        </FielsetWrapper>
      </GenerelWrapper>
    </Container>
  );
}
export default AddPerson;
