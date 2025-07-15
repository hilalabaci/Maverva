import { useState } from "react";
import {
  ActionWrapper,
  ButtomWrapper,
  Container,
  DescriptionText,
  DescriptionTextWrapper,
  DescriptionTitle,
  DescriptionWrapper,
  EditTextArea,
  EditWrapper,
  IssueEdit,
  IssueEditWrapper,
  IssueInfo,
  IssueTitle,
  IssueWrapper,
} from "./styles";
import ActionButton from "../../../components/common/button/action-button";
type IssueDetailsProps = {
  issueContent: string;
  setIssueContent: (content: string) => void;
  issueKey: string;
  onCloseIssueEdit: () => void;
  onUpdateContent: (newContent: string) => void;
};

function IssueDetails({
  issueContent,
  issueKey,
  onCloseIssueEdit,
  onUpdateContent,
}: IssueDetailsProps) {
  const [editTextDisplay, setEditTextDisplay] = useState(false);
  const [tempContent, setTempContent] = useState(issueContent);

  return (
    <Container>
      <IssueEditWrapper>
        <IssueInfo>{issueKey}</IssueInfo>
        <ActionWrapper>
          <ActionButton icon={"more"} toolTipText="More" />
          <ActionButton
            icon={"close"}
            toolTipText="Close"
            onClick={onCloseIssueEdit}
          />
        </ActionWrapper>
      </IssueEditWrapper>
      <IssueWrapper>
        {editTextDisplay ? (
          <EditWrapper>
            <EditTextArea
              value={tempContent}
              onChange={(e) => setTempContent(e.target.value)}
            />
            <ButtomWrapper>
              <ActionButton
                icon={"close"}
                onClick={() => setEditTextDisplay(false)}
              />
              <ActionButton
                icon={"done"}
                onClick={() => {
                  onUpdateContent(tempContent);
                  setEditTextDisplay(false);
                }}
              />
            </ButtomWrapper>
          </EditWrapper>
        ) : (
          <IssueEdit onClick={() => setEditTextDisplay(true)}>
            <IssueTitle>{tempContent}</IssueTitle>
          </IssueEdit>
        )}
      </IssueWrapper>
      <DescriptionWrapper>
        <DescriptionTitle>Description</DescriptionTitle>
        <DescriptionTextWrapper> 
          <DescriptionText rows={4} cols={50} placeholder="Description" />
        </DescriptionTextWrapper>
      </DescriptionWrapper>
    </Container>
  );
}
export default IssueDetails;
