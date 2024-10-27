import * as Form from "@radix-ui/react-form";
import {
  FormRoot,
  FormField,
  FormLabel,
  FormMessage,
  InputForm,
  TextareaForm,
  ButtonForm,
  InfoTitle,
  TitleWrapper,
  Title,
  FormLabelRequie,
  ButtonWrapper,
  ButtonCancel,
} from "./styles";

type FormDemoType = {
  onClose: () => void;
};

const FormDemo = (props: FormDemoType) => (
  <FormRoot>
    <TitleWrapper>
      <Title>Edit sprint: Board Sprint 1</Title>
    </TitleWrapper>
    <InfoTitle>Required fields are marked with an asterisk</InfoTitle>
    <FormField name="sprint-name">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <FormLabelRequie>Sprint name</FormLabelRequie>
      </div>
      <Form.Control asChild>
        <InputForm type="text" />
      </Form.Control>
    </FormField>
    <FormField name="duration">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <FormLabel>Duration</FormLabel>
      </div>
      <Form.Control asChild>
        <InputForm type="email" />
      </Form.Control>
    </FormField>
    <FormField name="start-date">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <FormLabel>Start date</FormLabel>
      </div>
      <Form.Control asChild>
        <InputForm type="date" min="2024-01-01" max="2024-12-30" />
      </Form.Control>
    </FormField>
    <FormField name="end-date">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <FormLabel>End date</FormLabel>
      </div>
      <Form.Control asChild>
        <InputForm type="date" min="2024-01-01" max="2024-12-30" />
      </Form.Control>
    </FormField>
    <FormField name="question">
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
        }}
      >
        <FormLabel>Sprint goal</FormLabel>
      </div>
      <Form.Control asChild>
        <TextareaForm />
      </Form.Control>
    </FormField>
    <Form.Submit asChild>
      <ButtonWrapper>
        <ButtonCancel onClick={props.onClose}>Cancel</ButtonCancel>
        <ButtonForm>Update</ButtonForm>
      </ButtonWrapper>
    </Form.Submit>
  </FormRoot>
);

export default FormDemo;
