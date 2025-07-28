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
  IssueDetailsInfoWrapper,
  IssueEdit,
  IssueEditContainer,
  ModalEditWrapper,
  IssueInfo,
  IssueInfoContainer,
  IssueTitle,
  IssueWrapper,
  IssueDetailsContainer,
  TitleforDetails,
  DataViewWrapper,
  LabelWrapper,
  DataWrapper,
  DataButtomWrapper,
} from "./styles";
import IconButton from "../../../components/common/button/iconButton";
import ActionButton from "../../../components/common/button/actionButton";
import { IssueStatus, IssueType } from "../../../types";
import { getStatusLabel } from "../../../utils/getStatus";
import MemberPhoto from "../../user/member-photo";
import { Status } from "../../backlogCard/styles";
import SelectDemo from "../../../components/common/selectDemo";
import { updateIssue } from "../../../api/issueApi";
import { formatDate } from "../../../utils/dateUtils";
type IssueDetailsProps = {
  issue: IssueType;
  onUpdateSummary: (newSummary: string) => void;
  onUpdateDescription: (newDescription: string) => void;
  onCloseIssueEdit: () => void;
};

function IssueDetails({
  issue,
  onUpdateSummary,
  onUpdateDescription,
  onCloseIssueEdit,
}: IssueDetailsProps) {
  const [tempSummary, setTempSummary] = useState(issue.Summary);
  const [tempDescription, setTempDescription] = useState(
    issue.Description || ""
  );
  const [editSummaryDisplay, setEditSummaryDisplay] = useState(false);
  const [editDescriptionDisplay, setEditDescriptionDisplay] = useState(false);

  const statusOptions = [
    { label: getStatusLabel(IssueStatus.ToDo), value: IssueStatus.ToDo },
    {
      label: getStatusLabel(IssueStatus.InProgress),
      value: IssueStatus.InProgress,
    },
    { label: getStatusLabel(IssueStatus.Done), value: IssueStatus.Done },
  ];
  async function updateCard(id: string, status: number) {
    const response = await updateIssue(id, status);
    if (response.ok && response.data) {
      // onUpdateCardStatus(response.data.Id, response.data.Status);
    } else {
      console.error("Failed to update card:", response);
    }
  }
  const handleStatusChange = async (status: IssueStatus) => {
    await updateCard(issue.Id, status);
  };

  useEffect(() => {
    setTempSummary(issue.Summary);
    setTempDescription(issue.Description || "");
  }, [issue.Summary, issue.Description]);
  return (
    <Container>
      <ModalEditWrapper>
        <IssueInfo>{issue.Key}</IssueInfo>
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
      </ModalEditWrapper>
      <IssueDetailsContainer>
        <IssueEditContainer>
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
                      setTempSummary(issue.Summary);
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
                      setTempDescription(issue.Description || "");
                      setEditDescriptionDisplay(false);
                    }}
                  />
                </ButtomWrapper>
              </DescriptionTextWrapper>
            ) : (
              <DescriptionText>
                {issue.Description
                  ? tempDescription
                  : "Add a more detailed description..."}
              </DescriptionText>
            )}
          </DescriptionWrapper>
        </IssueEditContainer>
        <IssueInfoContainer>
          <IssueDetailsInfoWrapper>
            <TitleforDetails>Details</TitleforDetails>
          </IssueDetailsInfoWrapper>
          <DataButtomWrapper>
            <DataViewWrapper>
              <LabelWrapper>Assignee</LabelWrapper>
              <DataWrapper>
                {issue.AssigneeUser && typeof issue.AssigneeUser === "object"
                  ? issue.AssigneeUser.FullName ||
                    issue.AssigneeUser.Email ||
                    "Unassigned"
                  : "Unassigned"}
              </DataWrapper>
            </DataViewWrapper>
            <DataViewWrapper>
              <LabelWrapper>Status</LabelWrapper>
              <DataWrapper>
                <Status $status={issue.Status}>
                  <SelectDemo
                    items={statusOptions}
                    onSelect={(val) => handleStatusChange(val as IssueStatus)}
                    selectedValue={issue.Status}
                  />
                </Status>
              </DataWrapper>
            </DataViewWrapper>
            <DataViewWrapper>
              <LabelWrapper>Labels</LabelWrapper>
              <DataWrapper>
                {issue.Labels ? issue.Labels.join(", ") : "None"}
              </DataWrapper>
            </DataViewWrapper>
            <DataViewWrapper>
              <LabelWrapper>Reporter</LabelWrapper>
              <DataWrapper>
                <MemberPhoto
                  user={issue.ReporterUser}
                  $userPhotoWidth="24px"
                  $userPhotoHeight="24px"
                  $userBorderadius="50px"
                  $userPhotoFontSize="10px"
                />
                {issue.ReporterUser
                  ? issue.ReporterUser.FullName
                  : "Unassigned"}
              </DataWrapper>
            </DataViewWrapper>
            <DataViewWrapper>
              <LabelWrapper>Created</LabelWrapper>
              <DataWrapper>
                {formatDate(issue.CreatedAt ?? "", { includeTime: true }) || ""}
              </DataWrapper>
            </DataViewWrapper>
          </DataButtomWrapper>
        </IssueInfoContainer>
      </IssueDetailsContainer>
    </Container>
  );
}
export default IssueDetails;
