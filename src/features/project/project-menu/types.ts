export type NavItem = {
  to: string;
  match: string;
  label: string;
  Icon?: React.ElementType;
  hasChevron?: boolean;
};

export type ProjectMenuPropsType = {
  ProjectTitleProps: string;
  hideMenu: boolean;
  onHover?: (hover: boolean) => void;
  selectedProjectsTitle: string | undefined;
  projectKey: string;
};
