import IconButton from "../../../components/ui/Button/IconButton";
import BaseButton from "../../../components/ui/Button/BaseButton";
import { IssueStatus, IssueType, UserType } from "../../../types/user.types";
import MemberPhoto from "../../user/member-photo";
import { Status } from "../../backlogCard/styles";
import SelectDemo from "../../../components/ui/SelectDemo";
import { formatDate } from "../../../utils/dateUtils";
import { useIssueDetails } from "./useIssueDetails";
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
} from "./styled";
import { UserSelect } from "../../../components/ui/SelectUser";

type IssueDetailsProps = {
  issue: IssueType;
  onUpdateSummary: (newSummary: string) => void;
  onUpdateDescription: (newDescription: string) => void;
  onCloseIssueEdit: () => void;
  onUpdateAssignee: (newAssignee: UserType) => void;
};

function IssueDetails({
  issue,
  onUpdateSummary,
  onUpdateDescription,
  onCloseIssueEdit,
  onUpdateAssignee,
}: IssueDetailsProps) {
  const {
    tempSummary,
    setTempSummary,
    tempDescription,
    setTempDescription,
    usersByProject,
    handleStatusChange,
    handleAssigneeChange,
    statusOptions,
    editSummaryDisplay,
    setEditDescriptionDisplay,
    editDescriptionDisplay,
    setEditSummaryDisplay,
    selectedUser,
    setSelectedUser,
  } = useIssueDetails(issue, onUpdateAssignee);
  

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
                  <BaseButton
                    children="Save"
                    size="sm"
                    ariaLabel="Save issue description changes"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUpdateDescription(tempDescription);
                      setEditDescriptionDisplay(false);
                    }}
                  />
                  <BaseButton
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
                <UserSelect
                  displayNameProps={true}
                  users={usersByProject}
                  selectedUser={
                    selectedUser ? selectedUser : issue.AssigneeUser
                  }
                  onChange={(user) => {
                    if (user) {
                      setSelectedUser(user);
                      handleAssigneeChange(user);
                      onUpdateAssignee(user);
                    } else {
                      setSelectedUser(null);
                    }
                  }}
                />
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
