import { useEffect, useState } from "react";
import {
  ActionWrapper,
  ButtomWrapper,
  Container,
  DescriptionText,
  DescriptionTextEditer,
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
import IconButton from "../../../components/common/button/iconButton";
import ActionButton from "../../../components/common/button/actionButton";
type IssueDetailsProps = {
  issueSummary: string;
  onUpdateSummary: (newSummary: string) => void;
  issueDescription?: string;
  onUpdateDescription: (newDescription: string) => void;
  issueKey: string;
  onCloseIssueEdit: () => void;
};

function IssueDetails({
  issueSummary,
  onUpdateSummary,
  issueDescription,
  onUpdateDescription,
  issueKey,
  onCloseIssueEdit,
}: IssueDetailsProps) {
  const [tempSummary, setTempSummary] = useState(issueSummary);
  const [tempDescription, setTempDescription] = useState(
    issueDescription || ""
  );
  const [editSummaryDisplay, setEditSummaryDisplay] = useState(false);
  const [editDescriptionDisplay, setEditDescriptionDisplay] = useState(false);

  useEffect(() => {
    setTempSummary(issueSummary);
    setTempDescription(issueDescription || "");
  }, [issueSummary, issueDescription]);
  return (
    <Container>
      <IssueEditWrapper>
        <IssueInfo>{issueKey}</IssueInfo>
        <ActionWrapper>
          <IconButton
            icon={"more"}
            toolTipText="More"
            ariaLabel="More options for issue"
          />
          <IconButton
            icon={"close"}
            toolTipText="Close"
            onClick={onCloseIssueEdit}
            ariaLabel="Close issue edit"
          />
        </ActionWrapper>
      </IssueEditWrapper>
      <IssueWrapper>
        {editSummaryDisplay ? (
          <EditWrapper>
            <EditTextArea
              value={tempSummary}
              onChange={(e) => setTempSummary(e.target.value)}
            />
            <ButtomWrapper>
              <IconButton
                icon={"close"}
                onClick={() => {
                  setTempSummary(issueSummary);
                  setEditSummaryDisplay(false);
                }}
                boxShadow={true}
                size="small"
                ariaLabel="Cancel editing issue summary"
              />
              <IconButton
                icon={"done"}
                onClick={() => {
                  onUpdateSummary(tempSummary);
                  setEditSummaryDisplay(false);
                }}
                boxShadow={true}
                size="small"
                ariaLabel="Save issue summary changes"
              />
            </ButtomWrapper>
          </EditWrapper>
        ) : (
          <IssueEdit onClick={() => setEditSummaryDisplay(true)}>
            <IssueTitle>{tempSummary}</IssueTitle>
          </IssueEdit>
        )}
      </IssueWrapper>
      <DescriptionWrapper onClick={() => setEditDescriptionDisplay(true)}>
        <DescriptionTitle>Description</DescriptionTitle>
        {editDescriptionDisplay ? (
          <DescriptionTextWrapper>
            <DescriptionTextEditer
              rows={4}
              cols={50}
              value={tempDescription}
              onChange={(e) => setTempDescription(e.target.value)}
            />
            <ButtomWrapper>
              <ActionButton
                children="Save"
                size="sm"
                ariaLabel="Save issue description changes"
                onClick={(e) => {
                  e.stopPropagation();
                  onUpdateDescription(tempDescription);
                  setEditDescriptionDisplay(false);
                }}
              />
              <ActionButton
                children="Cancel"
                size="sm"
                variant="secondary"
                ariaLabel="Cancel editing issue description"
                onClick={(e) => {
                  e.stopPropagation();
                  setTempDescription(issueDescription || "");
                  setEditDescriptionDisplay(false);
                }}
              />
            </ButtomWrapper>
          </DescriptionTextWrapper>
        ) : (
          <DescriptionText>
            {issueDescription
              ? tempDescription
              : "Add a more detailed description..."}
          </DescriptionText>
        )}
      </DescriptionWrapper>
    </Container>
  );
}
export default IssueDetails;
