import { useState } from "react";
import CheckboxRadixUi from "../../../components/tools/checkboxRadixUI";
import SelectDemo from "../../../components/tools/selectDemo";
import { ToolTip } from "../../../components/tools/toolstip";
import MemberPhoto from "../../../components/tools/user/member-photo";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Accordion,
  BacklogCardList,
  BacklogCardListItems,
  CardKey,
  Container,
  HeaderDropBlog,
  Content,
  Status,
  IconEdit,
  MoreIcon,
  MemberWrapper,
  CheckboxWrapper,
  ContentWrapper,
  IconAdd,
  CreateIssueButton,
  CreateButtonWrapper,
  DisplayCreateWrapper,
  Form,
  TextCreate,
  HeaderTitleContent,
  HeaderTitle,
  ArrowIcon,
  HeaderIssue,
  HeaderButtonWrapper,
  HeaderButton,
  HeaderStatusWrapper,
  HeaderStatus,
  ContentText,
  Duration,
} from "./styles";
import useOutsideClick from "../../../hooks/useOutsideClick";
import CollapsibleDemo from "../../tools/collapsible";

function Sprint() {
  const [showBacklog, setShowBacklog] = useState(false);
  const [displayCreateTask, setDisplayCreateTask] = useState(false);
  const [isHeaderSelected, setIsHeaderSelected] = useState(false);
  const refDisplayCreate = useOutsideClick<HTMLFormElement>(() =>
    setDisplayCreateTask(false)
  );
  const refBacklogSelected = useOutsideClick<HTMLDivElement>(() =>
    setIsHeaderSelected(false)
  );
  return (
    <Container>
      <CollapsibleDemo
        trigger={
          <HeaderDropBlog>
            <CheckboxWrapper>
              <CheckboxRadixUi />
            </CheckboxWrapper>
            <HeaderTitleContent
              ref={refBacklogSelected}
              $isSelected={isHeaderSelected} // Pass selected state for border
              onClick={() => setIsHeaderSelected(true)}
            >
              <ArrowIcon
                className="dropdown-trigger"
                as={
                  showBacklog
                    ? KeyboardArrowDownRoundedIcon
                    : KeyboardArrowRightIcon
                }
              />
              <HeaderTitle>Error_Troubleshooting Sprint 1</HeaderTitle>
              <Duration>2 Mar - 6 Jul</Duration>
              <HeaderIssue>(7 issue)</HeaderIssue>
            </HeaderTitleContent>
            <HeaderStatusWrapper>
              <HeaderStatus status={0}>5</HeaderStatus>
              <HeaderStatus status={1}>8</HeaderStatus>
              <HeaderStatus status={2}>2</HeaderStatus>
            </HeaderStatusWrapper>
            <HeaderButtonWrapper>
              <HeaderButton>Complete sprint</HeaderButton>
            </HeaderButtonWrapper>
            <MoreIcon />
          </HeaderDropBlog>
        }
        children={
          <Accordion>
            <BacklogCardList>
              <BacklogCardListItems>
                <CheckboxWrapper>
                  <CheckboxRadixUi />
                </CheckboxWrapper>
                <CardKey>API-2</CardKey>
                <ContentWrapper>
                  <ToolTip
                    contentStyle={{ zIndex: 0 }}
                    trigger={
                      <Content>
                        <ContentText>
                          Can be controlled or uncontrolled. Customize side,
                          alignment, offsets, collision handling. Optionally
                          render a pointing arrow. Supports custom open and
                          close delays. Ignored by screen readers.
                        </ContentText>
                        <IconEdit />
                      </Content>
                    }
                    content="mehmetle api yapmehmetle api yap"
                  ></ToolTip>
                </ContentWrapper>
                <Status>
                  <SelectDemo></SelectDemo>
                </Status>
                <MemberWrapper>
                  <MemberPhoto
                    $userPhotoWidth="25px"
                    $userPhotoHeight="25px"
                    $userPhotoFontSize="7px"
                    $userBorderadius="50px"
                  />
                </MemberWrapper>
                <MoreIcon />
              </BacklogCardListItems>
            </BacklogCardList>
            <DisplayCreateWrapper>
              {displayCreateTask ? (
                <Form $isSelected={true} ref={refDisplayCreate}>
                  <TextCreate placeholder="What needs to be done?"></TextCreate>
                </Form>
              ) : (
                <CreateButtonWrapper onClick={() => setDisplayCreateTask(true)}>
                  <IconAdd />
                  <CreateIssueButton>Create Issue</CreateIssueButton>
                </CreateButtonWrapper>
              )}
            </DisplayCreateWrapper>
          </Accordion>
        }
        open={showBacklog}
        setOpen={setShowBacklog}
      ></CollapsibleDemo>
    </Container>
  );
}
export default Sprint;
