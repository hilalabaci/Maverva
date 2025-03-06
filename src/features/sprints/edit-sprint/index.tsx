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
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";
import { addSprint } from "../../../api/sprintApi";

type FormDemoType = {
  onClose: () => void;
  sprintNameProps?: string;
  startSprintDate?: Date;
  endSprintDate?: Date;
  sprintTitle?: string;
};

type URLParams = {
  boardId: string;
};

const SprintDemo = ({
  onClose,
  sprintNameProps,
  startSprintDate,
  endSprintDate,
  sprintTitle,
}: FormDemoType) => {
  const { boardId } = useParams<URLParams>();
  const { user } = useUserContext();
  const [sprintName, setSprintName] = useState(
    sprintNameProps || "Board Sprint"
  );
  const [sprintGoal, setSprintGoal] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(
    startSprintDate ? new Date(startSprintDate) : new Date()
  );
  const [endDate, setEndDate] = useState<Date | null>(
    endSprintDate ? new Date(endSprintDate) : new Date()
  );
  const inputRef = useRef<HTMLInputElement | null>(null);
  const today = new Date();
  const nextYear = new Date(today);
  nextYear.setFullYear(today.getFullYear() + 1);
  const minDate =
    startSprintDate instanceof Date && !isNaN(startSprintDate.getTime())
      ? startSprintDate
      : today;

  const maxDate =
    endSprintDate instanceof Date && !isNaN(endSprintDate.getTime())
      ? endSprintDate
      : nextYear;
  async function submitSprint() {
    try {
      const sprintData = {
        name: sprintName,
        sprintGoal: sprintGoal,
        startDate: startDate,
        endDate: endDate,
        boardId: boardId,
        userId: user?.Id,
      };

      const { ok, data } = await addSprint(sprintData);
      if (ok && data) {
      }
      setSprintName("");
      setSprintGoal("");
      onClose();
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  useEffect(() => {
    if (sprintNameProps) {
      setSprintName(sprintNameProps);
    }
  }, [sprintNameProps]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <FormRoot
      onSubmit={(e) => {
        e.preventDefault();
        submitSprint();
      }}
    >
      <TitleWrapper>
        <Title>
          Edit sprint:
          {sprintTitle ? ` ${sprintTitle} ` : " Board Sprint 1"}
        </Title>
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
            ref={inputRef}
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
            min={minDate.toISOString().split("T")[0]}
            max={maxDate.toISOString().split("T")[0]}
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
            min={minDate.toISOString().split("T")[0]}
            max={maxDate.toISOString().split("T")[0]}
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
          <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
          <ButtonForm>Update</ButtonForm>
        </ButtonWrapper>
      </Form.Submit>
    </FormRoot>
  );
};

export default SprintDemo;
