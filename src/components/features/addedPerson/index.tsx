import React from "react";
import { Container, SubmitButton } from "../addPerson/styles";
import {
  GenerelWrapper,
  Title,
  TitleWrapper,
  IconAddedPerson,
  PersonInfoWrapper,
  MailWrapper,
  Info,
  Maildetail,
  ButtonWrapper,
  Maildetailsmall,
} from "./styles";
import { ButtonStylesforIconPerson, IconPerson } from "../top-menu/styles";

interface AddedPersonProps {
  projectTitle: string;
  emailforAddPerson: string;
  onClose: () => void;
}
function AddedPerson(props: AddedPersonProps) {
  return (
    <Container>
      <GenerelWrapper>
        <TitleWrapper>
          <IconAddedPerson />
          <Title>
            Added people to <span>{props.projectTitle}</span>{" "}
          </Title>
        </TitleWrapper>
        <Info>
          You have added 1 person to your project and 1 new license has been
          added to Process.
        </Info>
        <PersonInfoWrapper>
          <ButtonStylesforIconPerson style={{ margin: 0 }}>
            <IconPerson />
          </ButtonStylesforIconPerson>
          <MailWrapper>
            <Maildetail>{props.emailforAddPerson}</Maildetail>
            <Maildetailsmall>{props.emailforAddPerson}</Maildetailsmall>
          </MailWrapper>
        </PersonInfoWrapper>
        <ButtonWrapper>
          <SubmitButton onClick={props.onClose}>Ok</SubmitButton>
        </ButtonWrapper>
      </GenerelWrapper>
    </Container>
  );
}
export default AddedPerson;
