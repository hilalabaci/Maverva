import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { device } from "../../styles/breakpoints";

export const GlobalStyle = createGlobalStyle`

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--app-bg);
  @media ${device.mobile} {
    align-items: start;
  }
`;
export const PathInfo = styled.nav`
  color: #44546f;
  font-size: ${(props) => props.theme.fontSize.default};
`;
export const PathList = styled.ol`
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  display: flex;
  color: #44546f;
  font-size: ${(props) => props.theme.fontSize.default};
  padding: 10px 0 0;
  @media ${device.mobile} {
        flex-wrap: wrap;
  }
`;
export const Pathitem = styled.li`
  padding-left: 5px;
`;
export const PathLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colour.text.subtitle};
  &:hover {
    text-decoration: underline;
  }
`;
export const TitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 28px 34px 0;
  gap: 24px;
  flex-wrap: wrap;
  @media ${device.mobile} {
    width: 100%;
    padding: 22px 18px 0;
  }
`;
export const Title = styled.div`
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  @media ${device.mobile} {
    margin-top: 5px;
  }
`;

export const ProjectTitle = styled.h1`
  font-family: 'Instrument Serif', serif;
  font-weight: 400;
  font-size: 52px;
  line-height: 1;
  letter-spacing: -0.022em;
  color: var(--app-ink);
  margin: 0;
  @media ${device.mobile} {
    font-size: 28px;
    margin: 10px;
  }
`;

export const EditProjectTitle = styled.input`
  background-color: ${(props) => props.theme.projectColour};
  border: 2px solid #007bff;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColour};
  letter-spacing: 1px;
  text-align: center;
  vertical-align: center;
  text-transform: uppercase;
  @media ${device.mobile} {
    font-size: 15px;
  }
`;
export const SearchAndAssignMemberContainer = styled.div`
  display: flex;
  padding: 14px 34px;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--app-line);
  flex-wrap: wrap;
  @media ${device.mobile} {
    width: 100%;
    padding: 10px 18px;
  }
`;
export const AssignMemberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
export const HostMemberContainer = styled.div``;
export const ButtonStylesforIconPerson = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0;
  background: none;
  border-radius: 50px;
  margin-right: 4px;
  &:hover {
    z-index: 1;
  }
`;
export const ButtonStylesforPersonAdd = styled.button`
  border: 1px dashed var(--app-line-2);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  background: transparent;
  cursor: pointer;
  color: var(--app-ink-3);
  &:hover {
    border-color: var(--app-ink-3);
    color: var(--app-ink);
  }
`;

export const IconPersonAdd = styled(PersonAddAlt1Icon)`
  font-size: 16px !important;
  color: var(--app-ink-3);
`;
export const IconPerson = styled(PersonIcon)`
  width: 25px !important;
  height: 25px !important;
  color: ${(props) => props.theme.colour.icon.colour.default};
`;
export const FeaturesSprintContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
export const FeaturesSprint = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const SprintTime = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 11px;
  font-weight: 500;
  color: var(--app-ink-3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 5px 10px;
  border: 1px solid var(--app-line);
  background: var(--app-card);
  border-radius: 5px;
`;
export const TimeIcon = styled(AccessTimeIcon)`
  font-size: 20px !important;
`;

export const SprintSub = styled.div`
  color: var(--app-ink-3);
  font-size: 13.5px;
  margin-top: 8px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  b { color: var(--app-ink); font-weight: 500; }
`;

export const SprintStrip = styled.div`
  margin: 16px 34px 0;
  padding: 14px 20px;
  background: var(--app-card);
  border: 1px solid var(--app-line);
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(5, 1fr) auto;
  gap: 0;
  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    margin: 12px 18px 0;
  }
`;

export const SprintStripCell = styled.div`
  padding: 0 20px;
  border-left: 1px solid var(--app-line);
  &:first-child { padding-left: 0; border-left: 0; }
  .k {
    font-family: 'Geist Mono', ui-monospace, monospace;
    font-size: 10.5px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--app-ink-3);
    margin-bottom: 6px;
  }
  .v {
    font-family: 'Instrument Serif', serif;
    font-size: 26px;
    line-height: 1;
    letter-spacing: -0.01em;
    display: flex;
    align-items: baseline;
    gap: 8px;
    small {
      font-family: 'Geist', sans-serif;
      font-size: 12px;
      color: var(--app-ink-3);
    }
  }
`;

export const SprintProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding-left: 24px;
  border-left: 1px solid var(--app-line);
  min-width: 220px;
`;

export const SprintProgressBar = styled.div`
  flex: 1;
  height: 6px;
  background: var(--app-bg-2);
  border-radius: 999px;
  overflow: hidden;
`;

export const SprintProgressFill = styled.div<{ $width: number }>`
  height: 100%;
  width: ${({ $width }) => `${$width}%`};
  background: var(--app-accent);
  border-radius: 999px;
`;

export const SprintProgressNumber = styled.span`
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 12px;
  color: var(--app-ink-2);
`;

export const ToolbarChip = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid var(--app-line);
  background: var(--app-card);
  border-radius: 5px;
  font-size: 12.5px;
  color: var(--app-ink-2);
  cursor: pointer;
  b {
    color: var(--app-ink);
    font-weight: 500;
  }
  &:hover {
    border-color: var(--app-line-2);
    color: var(--app-ink);
  }
`;

export const ToolbarSpacer = styled.div`
  flex: 1;
`;
