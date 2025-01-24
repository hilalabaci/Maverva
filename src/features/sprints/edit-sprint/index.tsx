import * as Form from "@radix-ui/react-form";
import {
  FormRoot,
  FormField,
  FormLabel,
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
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import apiHelper from "../../../api/apiHelper";

type FormDemoType = {
  onClose: () => void;
};

type URLParams = {
  boardId: string;
};

const FormDemo = (props: FormDemoType) => {
  const { boardId } = useParams<URLParams>();
  const { user } = useUserContext();
  const [sprintName, setSprintName] = useState(`Board Sprint `);
  const [sprintGoal, setSprintGoal] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  async function submitSprint() {
    try {
      const sprintData = {
        name: sprintName,
        sprintGoal: sprintGoal,
        startDate: startDate,
        endDate: endDate,
        boardId: boardId,
        userId: user?._id,
      };

      const { ok, data } = await apiHelper.addSprint(sprintData);
      if (ok && data) {
      }
      setSprintName("");
      setSprintGoal("");
      props.onClose();
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  return (
    <FormRoot
      onSubmit={(e) => {
        e.preventDefault();
        submitSprint();
      }}
    >
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
          <InputForm
            type="text"
            value={sprintName}
            onChange={(e) => setSprintName(e.target.value)}
            placeholder="Board Sprint"
          />
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
          <InputForm
            value={startDate ? startDate.toISOString().split("T")[0] : ""}
            onChange={(e) =>
              setStartDate(
                e.target.value ? new Date(e.target.value) : new Date("")
              )
            }
            type="date"
            min="2024-01-01"
            max="2024-12-30"
          />
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
          <InputForm
            value={endDate ? endDate.toISOString().split("T")[0] : ""}
            onChange={(e) =>
              setEndDate(
                e.target.value ? new Date(e.target.value) : new Date("")
              )
            }
            type="date"
            min="2024-01-01"
            max="2024-12-30"
          />
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
          <TextareaForm
            value={sprintGoal}
            onChange={(e) => setSprintGoal(e.target.value)}
            placeholder="Enter sprint goal"
          />
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
};

export default FormDemo;
