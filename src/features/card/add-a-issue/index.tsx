import { useState } from "react";
import { IssueType } from "../../../types";
import { useUserContext } from "../../../contexts/UserContext";
import { Container, Textarea } from "./styles";
import { addIssue } from "../../../api/issueApi";
import { useParams } from "react-router-dom";

type AddIssuePropsType = {
  projectKey: string;
  status: number;
  onClose: () => void;
  addedCard: (card: IssueType) => void;
  boardId?: string;
  sprintId?: string;
};
type URLParams = {
  projectKey: string;
  boardId: string;
  sprintId?: string;
};

function AddIssue(props: AddIssuePropsType) {
  const { projectKey, boardId, sprintId } = useParams<URLParams>();
  const [content, setContent] = useState("");
  const { user, token } = useUserContext();
  const userId = user?.Id;
  function handleChange(value: string) {
    setContent(value);
  }
  async function submitNote() {
    if (!projectKey || !boardId || !sprintId || !userId || !token) return;
    try {
      const issueData = {
        userId: userId,
        content: content,
        projectKey: props.projectKey,
        status: props.status,
        boardId: props.boardId,
        sprintId: props.sprintId,
      };

      const { ok, data } = await addIssue(issueData, token);
      if (ok && data) {
        setContent("");
        props.addedCard(data as IssueType);
        props.onClose();
      }
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
