import React, { useState, useEffect } from "react";
import { useUserContext } from "../../../../contexts/UserContext";
import MemberPhoto from "../../../tools/user/member-photo";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Container,
  AddProjectWrapper,
  ListWrapper,
  UserInfo,
  MemberName,
  ArrowIcon,
} from "./styles";
import { ProjectType } from "../../../../types";
type ProjectMenuPropsType = {
  setProjects: (projects: ProjectType[]) => void;
  projects: ProjectType[];
  onProjectChange: (project: ProjectType) => void;
};

function ProjectMenu(props: ProjectMenuPropsType) {
  const { user } = useUserContext();
  const [hideMenu, setHideMenu] = useState(false);

  useEffect(() => {
    loadProjects();
    // eslint-disable-next-line
  }, []);

  async function loadProjects() {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "project?userId=" + user?._id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = (await response.json()) as ProjectType[];
      props.setProjects(data);
    }
  }

  if (!user) {
    return null;
  }
  const userFullName = user.fullName;
  const chars = userFullName.split(" ");
  const firstName = chars[0];

  return (
    <Container $hidden={hideMenu}>
      <UserInfo $hidden={hideMenu}>
        <MemberPhoto
          $userPhotoWidth="40px"
          $userPhotoHeight="40px"
          $userPhotoFontSize="15px"
          $userBorderadius="5px"
          $hidden={hideMenu}
        />
        <MemberName $hidden={hideMenu}>Hello {firstName}</MemberName>
        <ArrowIcon
          $hidden={hideMenu}
          as={hideMenu ? KeyboardArrowRightIcon : KeyboardArrowLeftRoundedIcon}
          onClick={() => {
            setHideMenu(!hideMenu);
          }}
        />
      </UserInfo>
      <AddProjectWrapper $hidden={hideMenu}>
        <div>Your Projects</div>
      </AddProjectWrapper>
      <ListWrapper $hidden={hideMenu}></ListWrapper>
    </Container>
  );
}
export default ProjectMenu;
