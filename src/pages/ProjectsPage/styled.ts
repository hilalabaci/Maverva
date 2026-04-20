import styled from "styled-components";
import { Link } from "react-router-dom";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { device } from "../../styles/breakpoints";

/* ── shell ─────────────────────────────────────────────────────────────── */

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  height: 100%;
  color: ${(props) => props.theme.colour.text.primary};
`;

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/* ── page header ────────────────────────────────────────────────────────── */

export const PageHead = styled.div`
  padding: 28px 34px 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media ${device.mobile} {
    padding: 16px 16px 0;
    gap: 12px;
  }
`;

export const Breadcrumb = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${(props) => props.theme.colour.text.subtitle};
  display: flex;
  gap: 10px;
  b {
    color: ${(props) => props.theme.colour.text.inverted};
    font-weight: 500;
  }
`;

export const PageHeadRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

export const Header = styled.h1`
  font-size: 42px;
  line-height: 1;
  letter-spacing: -0.022em;
  font-weight: 400;
  margin: 0;
  em {
    font-style: italic;
    color: #1e2a5e;
  }
  @media ${device.mobile} {
    font-size: 28px;
  }
`;

export const SubInfo = styled.div`
  color: ${(props) => props.theme.colour.text.subtitle};
  font-size: 13px;
  margin-top: 6px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  b {
    color: ${(props) => props.theme.colour.text.inverted};
    font-weight: 500;
  }
`;

export const PageActions = styled.div`
  display: flex;
  gap: 6px;
  flex-shrink: 0;
`;

export const ActionButton = styled.button<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 13px;
  border: 1px solid
    ${(props) =>
      props.$primary
        ? props.theme.colour.text.inverted
        : props.theme.colour.border.inverted};
  background: ${(props) =>
    props.$primary ? props.theme.colour.text.inverted : "transparent"};
  color: ${(props) =>
    props.$primary
      ? props.theme.colour.background.default
      : props.theme.colour.text.inverted};
  border-radius: 5px;
  font-size: 12.5px;
  font-family: inherit;
  cursor: pointer;
  transition: opacity 0.15s;
  &:hover {
    opacity: 0.8;
  }
`;

/* ── summary strip ──────────────────────────────────────────────────────── */

export const SummaryStrip = styled.div`
  margin-top: 4px;
  padding: 16px 20px;
  background: ${(props) => props.theme.colour.background.default};
  border: 1px solid ${(props) => props.theme.colour.divider.border.default};
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  @media ${device.mobile} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SummaryCell = styled.div`
  padding: 0 20px;
  border-left: 1px solid
    ${(props) => props.theme.colour.divider.border.default};
  &:first-child {
    padding-left: 0;
    border-left: 0;
  }
  @media ${device.mobile} {
    padding: 6px 10px;
  }
`;

export const SummaryLabel = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colour.text.subtitle};
  margin-bottom: 6px;
`;

export const SummaryValue = styled.div<{ $color?: string }>`
  font-size: 24px;
  line-height: 1;
  color: ${(props) => props.$color ?? props.theme.colour.text.inverted};
  small {
    font-size: 12px;
    color: ${(props) => props.theme.colour.text.subtitle};
    margin-left: 4px;
  }
`;

/* ── toolbar ────────────────────────────────────────────────────────────── */

export const Toolbar = styled.div`
  padding: 16px 34px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  border-bottom: 1px solid
    ${(props) => props.theme.colour.divider.border.default};
  @media ${device.mobile} {
    padding: 10px 16px;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  background: ${(props) => props.theme.colour.background.default};
  border: 1px solid ${(props) => props.theme.colour.divider.border.default};
  border-radius: 5px;
  font-size: 13px;
  flex: 1;
  min-width: 220px;
  color: ${(props) => props.theme.colour.text.subtitle};
  input {
    border: 0;
    background: none;
    outline: 0;
    font: inherit;
    color: ${(props) => props.theme.colour.text.inverted};
    flex: 1;
    width: 100%;
    &::placeholder {
      color: ${(props) => props.theme.colour.text.subtitle};
    }
  }
`;

export const FilterChip = styled.button<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border: 1px solid
    ${(props) =>
      props.$active
        ? "transparent"
        : props.theme.colour.divider.border.default};
  background: ${(props) =>
    props.$active ? "color-mix(in srgb, #1e2a5e 8%, transparent)" : props.theme.colour.background.default};
  color: ${(props) =>
    props.$active ? "#1e2a5e" : props.theme.colour.text.subtitle};
  border-radius: 5px;
  font-size: 12.5px;
  font-family: inherit;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    border-color: ${(props) => props.theme.colour.border.default};
    color: ${(props) => props.theme.colour.text.inverted};
  }
`;

export const ToolbarSpacer = styled.div`
  flex: 1;
`;

/* ── filter dropdown ────────────────────────────────────────────────────── */

export const FilterDropdownWrap = styled.div`
  position: relative;
  display: inline-flex;
`;

export const FilterDropdownMenu = styled.div<{ $open: boolean }>`
  display: ${(props) => (props.$open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  min-width: 180px;
  background: ${(props) => props.theme.colour.background.default};
  border: 1px solid ${(props) => props.theme.colour.divider.border.default};
  border-radius: 6px;
  box-shadow: 0 8px 24px -4px rgba(0, 0, 0, 0.12);
  z-index: 50;
  overflow: hidden;
`;

export const FilterDropdownHeader = styled.div`
  padding: 8px 12px 6px;
  font-family: "Geist Mono", monospace;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props) => props.theme.colour.text.subtitle};
  border-bottom: 1px solid ${(props) => props.theme.colour.divider.border.default};
`;

export const FilterDropdownOption = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  font-size: 13px;
  font-family: inherit;
  text-align: left;
  color: ${(props) =>
    props.$active ? "#1e2a5e" : props.theme.colour.text.inverted};
  background: ${(props) =>
    props.$active
      ? "color-mix(in srgb, #1e2a5e 6%, transparent)"
      : "transparent"};
  cursor: pointer;
  border: 0;
  &:hover {
    background: ${(props) => props.theme.colour.background.surface};
  }
`;

export const FilterDropdownOptionDot = styled.span<{ $active?: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1.5px solid
    ${(props) =>
      props.$active ? "#1e2a5e" : props.theme.colour.divider.border.default};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  &::after {
    content: "";
    display: ${(props) => (props.$active ? "block" : "none")};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1e2a5e;
  }
`;

export const ViewSegment = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.colour.divider.border.default};
  border-radius: 5px;
  overflow: hidden;
  background: ${(props) => props.theme.colour.background.default};
  button {
    padding: 6px 10px;
    font-size: 12px;
    color: ${(props) => props.theme.colour.text.subtitle};
    border-right: 1px solid
      ${(props) => props.theme.colour.divider.border.default};
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: inherit;
    cursor: pointer;
    background: none;
    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    &:last-child {
      border-right: 0;
    }
    &.active {
      background: ${(props) => props.theme.colour.background.muted};
      color: ${(props) => props.theme.colour.text.inverted};
    }
  }
`;

/* ── table (card) ───────────────────────────────────────────────────────── */

export const DataContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0 34px 40px;
  @media ${device.mobile} {
    padding: 0 16px 24px;
  }
`;

export const CardWrap = styled.div`
  background: ${(props) => props.theme.colour.background.default};
  border: 1px solid ${(props) => props.theme.colour.divider.border.default};
  border-radius: 8px;
  margin-top: 18px;
  overflow: hidden;
`;

const ROW_GRID = `
  display: grid;
  grid-template-columns: 28px minmax(200px, 1.6fr) 72px minmax(140px, 1fr) minmax(0, 1.3fr) 110px 90px 32px;
  gap: 14px;
  align-items: center;
  padding: 0 16px;
  @media (max-width: 1100px) {
    grid-template-columns: 24px minmax(180px, 1.5fr) 64px minmax(120px, 1fr) 80px 28px;
    gap: 10px;
    padding: 0 14px;
  }
  @media (max-width: 760px) {
    grid-template-columns: 24px 1.3fr 80px 1fr 28px;
    gap: 10px;
    padding: 0 12px;
  }
`;

export const Tables = styled.div`
  width: 100%;
`;

export const TableHead = styled.div`
  background: ${(props) => props.theme.colour.background.surface};
  border-bottom: 1px solid
    ${(props) => props.theme.colour.divider.border.default};
`;

export const TableTitleWrapper = styled.div`
  ${ROW_GRID}
  height: 38px;
  font-family: "Geist Mono", monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme.colour.text.subtitle};
  font-weight: 500;
`;

export const Titles = styled.span``;

export const TableBody = styled.div``;

export const DataWrapper = styled.div`
  ${ROW_GRID}
  height: 52px;
  border-bottom: 1px solid
    ${(props) => props.theme.colour.divider.border.default};
  font-size: 13.5px;
  cursor: pointer;
  &:last-child {
    border-bottom: 0;
  }
  &:hover {
    background: ${(props) => props.theme.colour.background.surface};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataProjectsName = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
`;

export const ProjectNameText = styled.div`
  min-width: 0;
`;

export const ProjectTitle = styled.div`
  color: #1e2a5e;
  font-weight: 500;
  letter-spacing: -0.005em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProjectDescription = styled.div`
  font-size: 11.5px;
  color: ${(props) => props.theme.colour.text.subtitle};
  font-family: "Geist Mono", monospace;
  margin-top: 1px;
`;

export const DataKey = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 11.5px;
  color: ${(props) => props.theme.colour.text.inverted};
  font-weight: 500;
`;

export const DataLeadName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${(props) => props.theme.colour.text.subtitle};
  min-width: 0;
  overflow: hidden;
  > *:first-child {
    flex-shrink: 0;
  }
  > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
`;

export const UrlCell = styled.div<{ $empty?: boolean }>`
  font-family: "Geist Mono", monospace;
  font-size: 12px;
  color: ${(props) =>
    props.$empty
      ? props.theme.colour.text.subtitle
      : props.theme.colour.text.subtitle};
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const StatusPill = styled.span<{
  $status: "active" | "planning" | "paused" | "archived";
}>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: "Geist Mono", monospace;
  font-size: 10.5px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(props) => {
    switch (props.$status) {
      case "active":
        return "#166534";
      case "planning":
        return "#1E40AF";
      case "paused":
        return props.theme.colour.text.subtitle;
      case "archived":
        return props.theme.colour.text.subtitle;
    }
  }};
  &::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    flex-shrink: 0;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;

export const UpdatedCell = styled.div`
  font-family: "Geist Mono", monospace;
  font-size: 11.5px;
  color: ${(props) => props.theme.colour.text.subtitle};
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const CardFoot = styled.div`
  padding: 12px 18px;
  border-top: 1px solid ${(props) => props.theme.colour.divider.border.default};
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Geist Mono", monospace;
  font-size: 11px;
  color: ${(props) => props.theme.colour.text.subtitle};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  a {
    color: ${(props) => props.theme.colour.text.inverted};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

/* ── legacy aliases kept for compatibility ──────────────────────────────── */

export const HeaderAndCreateWrapper = styled.div``;
export const HeaderWrapper = styled.div``;

export const LinkforProjects = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const MoreIconButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  &:hover {
    background-color: ${(props) => props.theme.colour.background.muted};
  }
`;

export const FavIconTable = styled(HeartFilledIcon)`
  width: 14px;
  height: 14px;
  color: ${(props) => props.theme.colour.text.subtitle};
`;

export const IconFav = styled(HeartIcon)`
  width: 18px;
  height: 18px;
  color: ${(props) => props.theme.colour.text.subtitle};
  cursor: pointer;
  &:hover {
    color: #dc2626;
  }
`;

export const FilledIconFav = styled(HeartFilledIcon)`
  width: 18px;
  height: 18px;
  color: #dc2626;
`;

export const MoreIcon = styled(MoreHorizRoundedIcon)`
  color: ${(props) => props.theme.colour.text.subtitle};
  font-size: 18px !important;
`;
