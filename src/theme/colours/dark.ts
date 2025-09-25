import { ThemeColors } from "./types";

const darkColors: ThemeColors = {
  background: {
    default: "rgb(29, 33, 37)",
    surface: "rgb(22, 26, 29)",
    muted: "#eaeaea",
    columnBG: "#161A1D",
    cardBG: {
      base: "#rgb(29, 33, 37)",
      hover: "#22262a",
    },
  },
  text: {
    primary: "rgba(182, 194, 207)",
    secondary: "#253858",
    inverted: "#B6C2CF",
    link: "rgb(87, 157, 255)",
    subtitle: "#9fadbc",
    highlightColor: "white",
    warningMessage:"#9b000f",
  },
  primary: {
    base: "#000000",
    dark: "#0a0a0a",
    foreground: "#ffffff",
    button: {
      primary: {
        background: {
          default: "#669DF1",
          hover: "#8FB8F6",
          active: "white",
        },
        text: {
          default: "#1F1F21",
          hover: "white",
          active: "white",
        },
      },
      secondary: {
        background: {
          default: "#a1bdd914",
          hover: "#a6c5e229",
          active: "#579DFF",
        },
        text: {
          default: "#B6C2CF",
          hover: "white",
          active: "white",
        },
      },
      warning: {
        background: {
          default: "#c9372c",
          hover: "ff9c8f",
        },
        text: {
          default: "white",
        },
      },
    },
    card: {
      border: {
        default: "1px solid rgba(255, 255, 255, 0.13)",
        active: "2px solid rgb(87, 157, 255)",
      },
      background: {
        default: "rgb(29, 33, 37)",
        hover: "#a1bdd914",
      },
    },
  },
  border: {
    default: "rgba(255, 255, 255, 0.13)",
    focus: "#3b82f6",
    active: "2px solid rgba(143,180,230,255)",
  },
  divider: {
    border: {
      default: "1px solid #e3e4f21f",
    },
    background: {
      default: "rgba(40, 47, 53,1)",
    },
  },
  modal: {
    background: {
      default: "#282E33",
      hover: "#323940",
      active: "#09326C",
    },
    text: {
      default: "rgba(182, 194, 207,0.5)",
      active: "#579DFF",
    },
    border: {
      default: "1px solid #738496",
      hover: "1px solid rgba(221,223,228,255)",
      active: "3px solid #0052cc",
    },
  },
  iconButton: {
    default: {
      background: "rgb(29, 33, 37)",
      icon: "rgb(182, 194, 207)",
    },
    hover: {
      background: "rgb(51, 60, 68)",
      icon: "rgb(182, 194, 207)",
    },
    active: {
      background: "rgb(28, 43, 65)",
      icon: "rgb(87, 157, 255)",
      border: "1px solid rgb(87, 157, 255)",
    },
  },
  icon: {
    background: {
      default: "#a1bdd914",
      hover: "#a6c5e229",
    },
    colour: {
      default: "#B6C2CF",
    },
  },
  scroll: {
    background: {
      default: "rgba(255,255,255,255",
    },
    bar: {
      default: "rgba(255,255,255,255",
    },
    border: {
      default: "rgba(255,255,255,255",
    },
  },
  table: {
    background: {
      default: "rgba(255, 255, 255, 0.16)",
      hover: "rgba(255, 255, 255, 0.16)",
      active: "rgba(255, 255, 255, 0.16)",
    },
    text: {
      default: "rgba(182, 194, 207)",
      hover: "rgba(182, 194, 207)",
      active: "rgba(182, 194, 207)",
    },
    border: {
      default: "3px solid #a6c5e229",
      hover: "3px solid rgb(238, 239, 242)",
      active: "3px solid rgb(238, 239, 242)",
    },
  },
  search: {
    background: {
      default: "#22272B",
      hover: "#282e33",
      active: "#22272b",
    },
    text: {
      default: "#b6c2cf",
    },
    border: {
      default: "1px solid #738496",
      active: "2px solid #85B8FF",
    },
    icon: {
      default: "rgba(158,173,188,1)",
    },
  },
  avatar: {
    background: {
      default: "#282e33",
    },
  },
  tooltip: {
    background: "rgba(255,255,255,255)",
    text: "rgb(66, 82, 110)",
  },
  progressColours: {
    toDo: {
      default: {
        background: "#a1bdd914",
        text: "#9FADBC",
      },
      hover: {
        background: "#a6c5e229",
        text: "#B6C2CF",
      },
    },
    inProgress: {
      default: {
        background: "#1C2B41",
        text: "#85B8FF",
      },
      hover: {
        background: "#09326C",
        text: "#85B8FF",
      },
    },
    done: {
      default: {
        background: "#1C3329",
        text: "#7EE2B8",
      },
      hover: {
        background: "#164B35",
        text: "#7EE2B8",
      },
    },
  },
  projectColour: "rgb(22, 26, 29)",
  cardBG: "rgb(29, 33, 37)",
  cardBGHover: "#22262a",
  fontColour: "rgba(182, 194, 207)",
  fontColour2: "#253858",
  fontColourSoft: "#626F86",
  borderLineColour: "rgba(255, 255, 255, 0.13)",
  BorderMenuBG: "rgb(29, 33, 37)",
  projectBG: "rgba(255, 255, 255, 0.16)",
  searchBorder: "1px solid #738496",
  searchInputBg: "#22272b",
  searchPlaceHolderFontColour: "#8c9caa",
  searchInputBgHover: "#282e32",
  searchOutlineColour: "2px solid #85b3e7",
  activeBorder: "2px solid rgba(143,180,230,255)",
  modalInputBg: "#22272b",
  borderforModal: "1px solid rgba(55, 64, 73, 255)",
  borderforNotificationContainer: "none",
  navbarFontColour: "#9FADBC",
  navbarButtonBG: "#579DFF",
  navbarButtonBGHover: "#85B8FF",
  memberMenuFontColor: "#B6C2CF",
  memberMenuHoverBg: "#323940",
  themeColor: "rgba(182, 194, 207,0.5)",
  themeActiveColor: "#579DFF",
  themeActiveBG: "#09326C",
  themeActiveBorder: "3px solid #579dff",
  navbarHoverButton: "#333c44",
  navbarActiveButton: "#1c2b41",
  navbarActiveFontColour: "#579dff",
  projectsBgHover: "#a1bdd914",
  projectsIconHover: "#a1bdd914",
  submitButtonHover: "#0055cc",
  borderforSideBar: "rgba(40,47,53,255)",
  sideBarFontColour: "#44546F",
  fontColourDark: "#182a4e",
  IconEditBg: "#f1f2f4",
  IconEditBGHover: "rgba(221,223,228,255)",
  backlogBgHover: "#f1f2f4",
  backlogBgActive: "#e9f2ff",
  checkboxCheckedBg: "#0b66e4",
  statusColourGrey: "#091e420f",
  statusColourBlue: "#1d7afc",
  statusColourGreen: "#22a06b",
  tabContentBGColour: "linear-gradient(352deg, #c8d9e6 6.96%, #567c8d 107.25%)",
  tabContentBGColour2:
    "linear-gradient(352deg, #5037e7 6.96%, #eb00ff 107.25%)",
  tabContentBGColour3: "linear-gradient(352deg, #6731ec 1.65%, #44cfff 118.4%",
  tabContentBGColour4:
    "linear-gradient(168deg, #d613ee -55.05%, #ff674e 64.52%)",
  requiredInfo: "#ae2e24",
  tableBorder: "3px solid #a6c5e229",
  iconColour: "#ffffff",
};

export default darkColors;
// export const darkTheme = {
//   primary: "rgb(29, 33, 37)",
//   projectColour: "rgb(22, 26, 29)",
//   cardBG: "rgb(29, 33, 37)",
//   cardBGHover: "#22262a",
//   fontColour: "rgba(182, 194, 207)",
//   fontColour2: "#253858",
//   fontColourSoft: "#626F86",
//   borderLineColour: "rgba(255, 255, 255, 0.13)",
//   BorderMenuBG: "rgb(29, 33, 37)",
//   projectBG: "rgba(255, 255, 255, 0.16)",
//   searchBorder: "1px solid #738496",
//   searchInputBg: "#22272b",
//   searchPlaceHolderFontColour: "#8c9caa",
//   searchInputBgHover: "#282e32",
//   searchOutlineColour: "2px solid #85b3e7",
//   activeBorder: "2px solid rgba(143,180,230,255)",
//   modalBg: "rgb(40, 46, 50)",
//   modalInputBg: "#22272b",
//   borderforModal: "1px solid rgba(55, 64, 73, 255)",
//   borderforNotificationContainer: "none",
//   navbarFontColour: "#9FADBC",
//   navbarButtonBG: "#579DFF",
//   navbarButtonBGHover: "#85B8FF",
//   memberMenuFontColor: "#B6C2CF",
//   memberMenuHoverBg: "#323940",
//   themeColor: "rgba(182, 194, 207,0.5)",
//   themeActiveColor: "#579DFF",
//   themeActiveBG: "#09326C",
//   themeActiveBorder: "3px solid #579dff",
//   navbarHoverButton: "#333c44",
//   navbarActiveButton: "#1c2b41",
//   navbarActiveFontColour: "#579dff",
//   projectsBgHover: "#f1f2f4",
//   projectsIconHover: "#e4e6e9",
//   submitButtonHover: "#0055cc",
//   borderforSideBar: "rgba(40,47,53,255)",
//   sideBarFontColour: "#44546F",
//   fontColourDark: "#182a4e",
//   IconEditBg: "#f1f2f4",
//   IconEditBGHover: "rgba(221,223,228,255)",
//   backlogBgHover: "#f1f2f4",
//   backlogBgActive: "#e9f2ff",
//   checkboxCheckedBg: "#0b66e4",
//   statusColourGrey: "#091e420f",
//   statusColourBlue: "#1d7afc",
//   statusColourGreen: "#22a06b",
//   tabContentBGColour: "linear-gradient(352deg, #c8d9e6 6.96%, #567c8d 107.25%)",
//   tabContentBGColour2:
//     "linear-gradient(352deg, #5037e7 6.96%, #eb00ff 107.25%)",
//   tabContentBGColour3: "linear-gradient(352deg, #6731ec 1.65%, #44cfff 118.4%",
//   tabContentBGColour4:
//     "linear-gradient(168deg, #d613ee -55.05%, #ff674e 64.52%)",
//   requiredInfo: "#ae2e24",
// };
