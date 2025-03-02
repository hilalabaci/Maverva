import { useState } from "react";
import { IssueType } from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
import { Container, Textarea } from "./styles";
import { addIssue } from "../../../api/issueApi";

type AddIssuePropsType = {
  projectKey: string;
  status: number;
  onClose: () => void;
  addedCard: (card: IssueType) => void;
  boardId?: string;
  sprintId?: string;
};

function AddIssue(props: AddIssuePropsType) {
  const [content, setContent] = useState("");
  const { user } = useUserContext();
  const userId = user?.Id;
  function handleChange(value: string) {
    setContent(value);
  }
  async function submitNote() {
    try {
      const issueData = {
        userId: userId,
        content: content,
        projectKey: props.projectKey,
        status: props.status,
        boardId: props.boardId,
        sprintId: props.sprintId,
      };

      const { ok, data } = await addIssue(issueData);
      if (ok && data) {
        console.log(`added issue:`, data);
      }
      setContent("");
      props.addedCard(data as IssueType);
      props.onClose();
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  }
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        submitNote();
        setInterval(() => {
          props.onClose();
        }, 1000);
      }}
    >
      <Textarea
        name="addCardArea"
        value={content}
        onChange={(e) => handleChange(e.target.value)}
        id="w3review"
        placeholder="What needs to be done?"
      ></Textarea>
    </Container>
  );
}
export default AddIssue;
