import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
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
} from "./styles";
import { IssueType, ColumnType, SprintType } from "../../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NumberOfCards from "../../features/card/number-cards";
import { ButtomWrapper } from "../../features/card/issue/styles";
import { NextButton } from "../../features/board/optional/styles";
import { DropdownMenu } from "../../components/common/dropdownMenu";
import {
  getColumns,
  deleteColumn as deleteColumnApi,
  addColumn,
} from "../../api/columnApi";
import { useUserContext } from "../../contexts/UserContext";

type URLParams = {
  boardId?: string;
};

type ActiveSprintsProps = {
  activeSprint?: SprintType;
  boardId?: string | undefined;
  filteredCards: IssueType[];
  onUpdate: (card: IssueType) => void;
  onUpdateContent: (card: IssueType) => void;
  onDelete: (id: string) => void;
  addedCard: (card: IssueType) => void;
  issues: IssueType[];
  projectKey?: string;
  updatedCardsAfterDeleteColumn: (cards: IssueType[]) => void;
};
function ActiveSprint({
  activeSprint,
  filteredCards,
  onUpdate,
  onUpdateContent,
  onDelete,
  addedCard,
  projectKey,
  updatedCardsAfterDeleteColumn,
}: ActiveSprintsProps) {
  const { user } = useUserContext();
  const { boardId } = useParams<URLParams>();
  const [columns, setColumns] = useState<ColumnType[]>([]);
  const [displayCreateColumn, setDisplayCreateColumn] = useState(false);
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function handleChange(value: string) {
    setTitle(value);
  }

  async function loadColumns() {
    if (!boardId) return;
    try {
      const { ok, data } = await getColumns(boardId);
      if (ok && data) setColumns(data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  async function deleteColumn(columnId: string) {
    try {
      if (!columnId) return;
      const { ok, data } = await deleteColumnApi(columnId, user?.Id as string);
      if (!ok || !data) {
        setColumns(columns.filter((c) => c.Id !== columnId));
        updatedCardsAfterDeleteColumn(data as IssueType[]);
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
      const { ok, data } = await addColumn(columnData);
      if (ok && data) {
        await loadColumns();
        setTitle("");
      }
    } catch (error) {}
  }
  useEffect(() => {
    if (boardId) {
      loadColumns();
    }
  }, [boardId]);
  useEffect(() => {
    console.log(`activeSprintfromActive:`, activeSprint);
  }, []);

  return (
    <Container>
      <ColumnContainer>
        {activeSprint ? (
          <DndProvider backend={HTML5Backend}>
            {columns
              .sort((a, b) => a.Status - b.Status)
              .map((column) => (
                <Wrapper key={column.Id}>
                  <TitleWrapper>
                    <TitleTotalCardWrapper>
                      <Title>{column.Name}</Title>
                      <NumberOfCards
                        numberOfCards={
                          filteredCards.filter(
                            (card) => card.Status === column.Status
                          ).length
                        }
                        numberOfFilteredCards={
                          filteredCards.filter(
                            (card) => card.Status === column.Status
                          ).length
                        }
                      />
                    </TitleTotalCardWrapper>
                    <DropdownMenu
                      trigger={<EditIcon onClick={openModal} />}
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
                    onUpdateContent={onUpdateContent}
                    onDelete={onDelete}
                    addedCard={addedCard}
                    title={column.Name}
                    projectKey={projectKey as string}
                    issues={filteredCards.filter(
                      (card) => card.Status === column.Status
                    )}
                    status={column.Status}
                    boardId={boardId}
                    sprintId={activeSprint.Id}
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
