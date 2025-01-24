import { useState } from "react";
import Modal from "../../../common/modal";
import { Label, Wrapper, EditIcon } from "./styles";
import CloseProjectMenu from "../close-project-menu";

type ProjectLabelPropsType = {
  onClick: () => void;
  onDelete: () => void;
  title: string;
};
function ProjectLabel(props: ProjectLabelPropsType) {
  const [showModal, setShowModal] = useState(false);
  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <Wrapper onClick={props.onClick}>
      <Modal onClose={closeModal} open={showModal} onChange={setShowModal}>
        <CloseProjectMenu
          onDelete={props.onDelete}
          onClose={closeModal}
          projectName={props.title}
        />
      </Modal>
      <Label>{props.title}</Label>
      <div>
        <EditIcon onClick={openModal} />
      </div>
    </Wrapper>
  );
}
export default ProjectLabel;
