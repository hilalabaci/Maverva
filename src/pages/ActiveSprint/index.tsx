import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import IssueList from "../../features/card/issue-list";
import {
  ColumnContainer,
  TitleWrapper,
  Title,
  Wrapper,
  Container,
  AddColumnContainer,
  AddColumnWrapper,
  AddColumnTitle,
  IconWrapper,
  IconAdd,
  IconClose,
  CloseButton,
  EditIcon,
  TitleTotalCardWrapper,
  ColumnDot,
  ColumnAddButton,
} from "./styled";
import NumberOfCards from "../../features/card/number-cards";
import { ButtomWrapper } from "../../features/card/issue/styles";
import { NextButton } from "../../features/board/optional/styles";
import { DropdownMenu } from "../../components/ui/DropDownMenu";
import {
  getColumns,
  deleteColumn as deleteColumnApi,
  addColumn,
} from "../../api/column-api";
import { useUserContext } from "../../contexts/UserContext";
import { ColumnType, IssueType } from "../../types/user.types";
import { RouteParams } from "../../types/auth.types";

type ActiveSprintsProps = {
  filteredCards: IssueType[];
  onUpdate: (issue: IssueType) => void;
  onUpdateSummary: (issue: IssueType) => void;
  onUpdateDescription: (issue: IssueType) => void;
  onDelete: (id: string) => void;
  addedCard: (issue: IssueType) => void;
  issues: IssueType[];
  projectKey?: string;
  updatedCardsAfterDeleteColumn: (issues: IssueType[]) => void;
};
function ActiveSprint({
  filteredCards,
  onUpdate,
  onUpdateSummary,
  onUpdateDescription,
  onDelete,
  addedCard,
  projectKey,
  updatedCardsAfterDeleteColumn,
}: ActiveSprintsProps) {
  const { user, token } = useUserContext();
  const hasFetchedProjects = useRef(false);
  const { boardId, sprintId } = useParams<RouteParams>();
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [displayCreateColumn, setDisplayCreateColumn] = useState(false);
  const [title, setTitle] = useState("");

  function handleChange(value: string) {
    setTitle(value);
  }
  const loadColumns = useCallback(async () => {
    if (!boardId || !projectKey || !sprintId || !token) return;
    try {
      const { ok, data } = await getColumns(
        projectKey,
        boardId,
        sprintId,
        token,
      );
      if (ok && data) setColumns(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, [token, projectKey, boardId, sprintId]);

  async function deleteColumn(columnId: string) {
    try {
      if (
        !columnId ||
        !user?.Id ||
        !projectKey ||
        !boardId ||
        !sprintId ||
        !token
      )
        return;
      const { ok, data } = await deleteColumnApi(
        columnId,
        user.Id,
        projectKey,
        boardId,
        sprintId,
        token,
      );
      if (ok && data) {
        setColumns(columns.filter((c) => c.Id !== columnId));
        updatedCardsAfterDeleteColumn(data);
      }
    } catch (error) {}
  }

  async function submitColumn() {
    if (!boardId) {
      return;
    }
    try {
      const columnData = {
        title: title,
        boardId: boardId,
        userId: user?.Id as string,
      };
      if (!projectKey || !sprintId || !token) return;
      const { ok, data } = await addColumn(
        columnData,
        projectKey,
        boardId,
        sprintId,
        token,
      );
      if (ok && data) {
        await loadColumns();
        setTitle("");
      }
    } catch (error) {
      console.error("Error adding column:", error);
    }
  }
  useEffect(() => {
    if (!boardId || !sprintId || hasFetchedProjects.current) return;
    hasFetchedProjects.current = true;
    loadColumns();
  }, [boardId, sprintId, loadColumns]);
  return (
    <Container>
      <ColumnContainer>
        {sprintId ? (
          <DndProvider backend={HTML5Backend}>
            {columns
              .sort((a, b) => a.Status - b.Status)
              .map((column) => (
                <Wrapper key={column.Id} $highlight={column.Status === 2}>
                  <TitleWrapper>
                    <ColumnDot $status={column.Status} />
                    <TitleTotalCardWrapper>
                      <Title>{column.Name}</Title>
                      <NumberOfCards
                        numberOfCards={
                          filteredCards.filter(
                            (card) => card.Status === column.Status,
                          ).length
                        }
                        numberOfFilteredCards={
                          filteredCards.filter(
                            (card) => card.Status === column.Status,
                          ).length
                        }
                      />
                    </TitleTotalCardWrapper>
                    <ColumnAddButton title="Add issue">+</ColumnAddButton>
                    <DropdownMenu
                      trigger={<EditIcon />}
                      items={[
                        {
                          action: () => {
                            deleteColumn(column.Id);
                          },
                          label: "Delete",
                        },
                      ]}
                    />
                  </TitleWrapper>
                  <IssueList
                    key={column.Id}
                    onUpdate={onUpdate}
                    onUpdateSummary={onUpdateSummary}
                    onUpdateDescription={onUpdateDescription}
                    onDelete={onDelete}
                    addedCard={addedCard}
                    projectKey={projectKey as string}
                    issues={filteredCards.filter(
                      (card) => card.Status === column.Status,
                    )}
                    status={column.Status}
                    boardId={boardId}
                    sprintId={sprintId}
                  />
                </Wrapper>
              ))}
          </DndProvider>
        ) : undefined}
      </ColumnContainer>
      <AddColumnContainer>
        {displayCreateColumn ? (
          <AddColumnWrapper
            onSubmit={(e) => {
              e.preventDefault();
              submitColumn();
              setInterval(() => {
                setDisplayCreateColumn(false);
              }, 1000);
            }}
          >
            <AddColumnTitle
              value={title}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Add another list"
            />
            <ButtomWrapper>
              <NextButton>Add list</NextButton>
              <CloseButton onClick={() => setDisplayCreateColumn(false)}>
                <IconClose />
              </CloseButton>
            </ButtomWrapper>
          </AddColumnWrapper>
        ) : (
          <IconWrapper onClick={() => setDisplayCreateColumn(true)}>
            <IconAdd />
          </IconWrapper>
        )}
      </AddColumnContainer>
    </Container>
  );
}
export default ActiveSprint;
