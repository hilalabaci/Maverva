import { useState } from "react";
import {
  OptionalContainer,
  Container,
  FielsetWrapper,
  GeneralWrapper,
  Options,
  WrapperforText,
} from "../board-add/styles";
import {
  TitleForCheckbox,
  WrapperforCheckbox,
  InputStyleForCheckbox,
  TitleforLabel,
  Details,
  NextButton,
  CancelButton,
} from "./styles";
import BoardCreate from "../board-add";
import { BoardType, ProjectType } from "../../../../types";
import ProjectCreate from "../../project/project-add/create";

type Option = "addBoardwithProject" | "addBoard";

type OptionalBoardCreateTypeProps = {
  onClose: () => void;
};

function OptionalBoardCreate(props: OptionalBoardCreateTypeProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    "addBoardwithProject"
  );
  //   const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleNext = (): void => setStep((prevStep) => prevStep + 1);
  const handleBack = (): void => setStep((prevStep) => prevStep - 1);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as Option);
  };
  return (
    <OptionalContainer>
      {step === 1 && (
        <Container>
          <TitleForCheckbox>Create a Board</TitleForCheckbox>
          <GeneralWrapper>
            <FielsetWrapper>
              <WrapperforCheckbox
                onClick={() => setSelectedOption("addBoardwithProject")}
                onChange={handleRadioChange}
              >
                <InputStyleForCheckbox
                  type="radio"
                  value="addBoardwithProject"
                  checked={selectedOption === "addBoardwithProject"}
                />
                <WrapperforText>
                  <TitleforLabel>
                    Board created with new Software project
                  </TitleforLabel>
                  <Details>A new board based on a new Software project</Details>
                </WrapperforText>
              </WrapperforCheckbox>
              <WrapperforCheckbox
                onChange={handleRadioChange}
                onClick={() => setSelectedOption("addBoard")}
              >
                <InputStyleForCheckbox
                  type="radio"
                  value="addBoard"
                  checked={selectedOption === "addBoard"}
                />
                <WrapperforText>
                  <TitleforLabel>Board from an existing project</TitleforLabel>
                  <Details>Boards can contain one or more projects</Details>
                </WrapperforText>
              </WrapperforCheckbox>
              <Options>
                {/* <BackButton onClick={handleBack}>Back</BackButton> */}
                <NextButton onClick={handleNext}>Next</NextButton>
                <CancelButton onClick={props.onClose}>Cancel</CancelButton>
              </Options>
            </FielsetWrapper>
          </GeneralWrapper>
        </Container>
      )}

      {/* Adım 2: Seçilen Seçeneğe Bağlı Adımlar */}
      {step === 2 && selectedOption === "addBoardwithProject" && (
        <ProjectCreate
          BackButton={handleBack}
          isOptional={true}
          onCreate={() => console.log("project created")}
          onClose={props.onClose}
        />
      )}

      {step === 2 && selectedOption === "addBoard" && (
        <BoardCreate
          BackButton={handleBack}
          onClose={props.onClose}
          onCreate={() => console.log("board created")}
        />
      )}

      {/* Adım 3: Genel Onay Adımı */}
      {step === 3 && (
        <div>
          <h2>Adım 3: Onay</h2>
          <p>Seçiminiz: {selectedOption}</p>
          <button onClick={handleBack}>Back</button>
        </div>
      )}
    </OptionalContainer>
  );
}
export default OptionalBoardCreate;
