import { ThemeColors } from "./types";

const lightColors: ThemeColors = {
  background: {
    default: "rgba(255,255,255,255)",
    surface: "rgba(247,248,249,255)",
    muted: "#eaeaea",
    columnBG: "#091e420f",
    cardBG: {
      base: "#ffffff",
      hover: "#e9ebee",
    },
  },
  text: {
    primary: "rgb(66, 82, 110)",
    secondary: "#253858",
    inverted: "#172b4d",
    link: "#0c66e4",
    subtitle: "#44546F",
    highlightColor: "#292A2E",
  },
  primary: {
    base: "#3b82f6",
    dark: "#2563eb",
    foreground: "#ffffff",
    button: {
      primary: {
        background: {
          default: "#1868DB",
          hover: "#1558BC",
          active: "white",
        },
        text: {
          default: "white",
          hover: "white",
          active: "#1868DB",
        },
      },
      secondary: {
        background: {
          default: "transparent",
          hover: "#091e420f",
          active: "#1868DB",
        },
        text: {
          default: "#505258",
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
        default: "1px solid rgb(221, 223, 228)",
        active: "2px solid #388BFF",
      },
      background: {
        default: "rgb(255, 255, 255)",
        hover: "#0515240f",
      },
    },
  },
  border: {
    default: "1px solid rgb(133, 144, 162)",
    focus: "#3b82f6",
    active: "2px solid rgb(12, 102, 228)",
    inverted: "1px solid #8C8F97",
  },
  divider: {
    border: {
      default: "1px solid rgba(24, 27, 30, 0.1)",
    },
    background: {
      default: "rgb(238, 239, 241)",
    },
  },
  modal: {
    background: {
      default: "rgb(255, 255, 255)",
      hover: "#0515240f",
      active: "rgb(233, 242, 255)",
    },
    text: {
      default: "#B6C2CF",
      active: "#0052cc",
    },
    border: {
      default: "1px solid #8590A2",
      hover: "1px solid rgba(221,223,228,255)",
      active: "3px solid #0052cc",
    },
  },
  iconButton: {
    default: {
      background: "rgba(255,255,255,255)",
      icon: "rgb(68, 84, 111,1)",
      border: "1px solid rgba(24, 27, 30, 0.1)",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1),0 8px 16px rgba(0, 0, 0, 0.08);",
    },
    hover: {
      background: "rgb(9 30 66 / 14%)",
      icon: "rgb(66, 82, 110)",
    },
    active: {
      background: "rgb(233, 242, 255)",
      icon: "rgb(12, 102, 228)",
      border: "1px solid rgb(12, 102, 228)",
    },
  },
  icon: {
    background: {
      default: "#091e420f",
      hover: "#091e4224",
    },
    colour: {
      default: "rgb(23, 43, 77)",
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
      default: "3px solid rgb(238, 239, 242)",
      hover: "3px solid rgb(238, 239, 242)",
      active: "3px solid rgb(238, 239, 242)",
    },
  },
  search: {
    background: {
      default: "rgba(255,255,255,255)",
      hover: "#f7f8f9",
      active: "rgba(255,255,255,255)",
    },
    text: {
      default: "#172b4d",
    },
    border: {
      default: "1px solid #8590a2",
      active: "2px solid #388BFF",
    },
    icon: {
      default: "rgba(68,84,111,1)",
    },
  },
  avatar: {
    background: {
      default: "#FFFFFF",
    },
  },
  tooltip: {
    background: "#44556f",
    text: "white",
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
  progressColours: {
    toDo: {
      default: {
        background: "#091e420f",
        text: "#44546F",
      },
      hover: {
        background: "#d0d4dc",
        text: "rgb(0, 0, 0)",
      },
    },
    inProgress: {
      default: {
        background: "rgb(233, 242, 255)",
        text: "#0055CC",
      },
      hover: {
        background: "#CCE0FF",
        text: "#0055CC",
      },
    },
    done: {
      default: {
        background: "#DCFFF1",
        text: "#216E4E",
      },
      hover: {
        background: "#BAF3DB",
        text: "rgb(32, 110, 78)",
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
  memberMenuFontColor: "#",
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

export default lightColors;

// export const lightTheme = {
//   primary: "rgba(255,255,255,255)",
//   projectColour: "rgba(247,248,249,255)",
//   cardBG: "#ffffff",
//   cardBGHover: "#e9ebee",
//   fontColour: "rgb(66, 82, 110)",
//   fontColour2: "#253858",
//   fontColourSoft: "#626F86",
//   borderLineColour: "rgba(24, 27, 30, 0.1)",
//   BorderMenuBG: "#FAFBFC",
//   projectBG: "rgba(24, 27, 30, 0.1)",
//   searchBorder: "1px solid #8590a2",
//   searchInputBg: "#fff",
//   searchPlaceHolderFontColour: "#616f86",
//   searchInputBgHover: "#f7f8f9",
//   searchOutlineColour: "2px solid #3e8bf8",
//   activeBorder: "2px solid #388bff",
//   modalBg: "#fff",
//   modalInputBg: "rgb(244, 245, 247)",
//   borderforModal: "1px solid rgba(221,223,228,255)",
//   borderforNotificationContainer: "1px solid #dfe1e6",
//   NewProjectModalFontColour: "rgb(23, 43, 77)",
//   navbarFontColour: "#44546F",
//   navbarButtonBG: "#0C66E4",
//   navbarButtonBGHover: "#0055CC",
//   memberMenuFontColor: "#172b4d;",
//   memberMenuHoverBg: "#f1f2f4",
//   themeColor: "rgba(66, 82, 110,0.5)",
//   themeActiveColor: "#0c66e4",
//   themeActiveBG: "#E9F2ff",
//   themeActiveBorder: "3px solid #0052cc",
//   navbarHoverButton: "#091e4224",
//   navbarActiveButton: "#E9F2FF",
//   navbarActiveFontColour: "#0c66e4",
//   projectsBgHover: "#f1f2f4",
//   projectsIconHover: "#e4e6e9",
//   submitButtonHover: "#0055cc",
//   borderforSideBar: "rgba(238,239,241,255)",
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
//   tabContentBGColour:
//     "linear-gradient(rgb(18, 194, 233), rgb(196, 113, 237), rgb(246, 79, 89))",
//   tabContentBGColour1:
//     "linear-gradient(352deg, #5037e7 6.96%, #eb00ff 107.25%)",
//   tabContentBGColour2:
//     "linear-gradient(352deg, #44cfff 6.96%, #6731ec 107.25%)",
//   tabContentBGColour3:
//     "linear-gradient(rgb(254, 172, 94), rgb(199, 121, 208), rgb(75, 192, 200))",
//   tabContentBGColour4:
//     "linear-gradient(168deg, #d613ee -55.05%, #ff674e 64.52%)",
//   tabContentBGColour5: "linear-gradient(rgb(69, 104, 220), rgb(176, 106, 179))",
//   requiredInfo: "#ae2e24",
