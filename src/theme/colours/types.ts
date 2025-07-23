export interface ThemeColors {
  background: {
    default: string;
    surface: string;
    muted: string;
    columnBG: string;
    cardBG: {
      base: string;
      hover: string;
    };
  };
  text: {
    primary: string;
    secondary: string;
    inverted: string;
    link: string;
    subtitle: string;
    highlightColor: string;
  };
  primary: {
    base: string;
    dark: string;
    foreground: string;
    button: {
      primary: {
        background: {
          default: string;
          hover: string;
          active: string;
        };
        text: {
          default: string;
          hover: string;
          active: string;
        };
      };
      secondary: {
        background: {
          default: string;
          hover: string;
          active: string;
        };
        text: {
          default: string;
          hover: string;
          active: string;
        };
      };
      warning: {
        background: {
          default: string;
          hover: string;
        };
        text: {
          default: string;
        };
      };
    };
    card: {
      border: {
        default: string;
        active: string;
      };
      background: {
        default: string;
        hover: string;
      };
    };
  };
  border: {
    default: string;
    focus: string;
    active: string;
  };
  divider: {
    border: {
      default: string;
    };
    background: {
      default: string;
    };
  };
  modal: {
    background: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
      active: string;
    };
    border: {
      default: string;
      hover: string;
      active: string;
    };
  };
  iconButton: {
    default: {
      background: string;
      icon: string;
    };
    hover: {
      background: string;
      icon: string;
    };
    active: {
      background: string;
      icon: string;
      border: string;
    };
  };
  icon: {
    background: {
      default: string;
      hover: string;
    };
    colour: {
      default: string;
    };
  };
  table: {
    background: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
      hover: string;
      active: string;
    };
    border: {
      default: string;
      hover: string;
      active: string;
    };
  };
  search: {
    background: {
      default: string;
      hover: string;
      active: string;
    };
    text: {
      default: string;
    };
    border: {
      default: string;
      active: string;
    };
    icon: {
      default: string;
    };
  };
  avatar: {
    background: {
      default: string;
    };
  };
  tooltip: {
    background: string;
    text: string;
  };
  scroll: {
    background: {
      default: string;
    };
    bar: {
      default: string;
    };
    border: {
      default: string;
    };
  };
  progressColours: {
    toDo: {
      default: {
        background: string;
        text: string;
      };
      hover: {
        background: string;
        text: string;
      };
    };
    inProgress: {
      default: { background: string; text: string };
      hover: { background: string; text: string };
    };
    done: {
      default: {
        background: string;
        text: string;
      };
      hover: {
        background: string;
        text: string;
      };
    };
  };

  projectColour: string;
  cardBG: string;
  cardBGHover: string;
  fontColour: string;
  fontColour2: string;
  fontColourSoft: string;
  borderLineColour: string;
  BorderMenuBG: string;
  projectBG: string;
  searchBorder: string;
  searchInputBg: string;
  searchPlaceHolderFontColour: string;
  searchInputBgHover: string;
  searchOutlineColour: string;
  activeBorder: string;
  modalInputBg: string;
  borderforModal: string;
  borderforNotificationContainer: string;
  navbarFontColour: string;
  navbarButtonBG: string;
  navbarButtonBGHover: string;
  memberMenuFontColor: string;
  memberMenuHoverBg: string;
  themeColor: string;
  themeActiveColor: string;
  themeActiveBG: string;
  themeActiveBorder: string;
  navbarHoverButton: string;
  navbarActiveButton: string;
  navbarActiveFontColour: string;
  projectsBgHover: string;
  projectsIconHover: string;
  submitButtonHover: string;
  borderforSideBar: string;
  sideBarFontColour: string;
  fontColourDark: string;
  IconEditBg: string;
  IconEditBGHover: string;
  backlogBgHover: string;
  backlogBgActive: string;
  checkboxCheckedBg: string;
  statusColourGrey: string;
  statusColourBlue: string;
  statusColourGreen: string;
  tabContentBGColour: string;
  tabContentBGColour2: string;
  tabContentBGColour3: string;
  tabContentBGColour4: string;
  requiredInfo: string;
  tableBorder: string;
  iconColour: string;
}
// base:sring
// hover: string;
// active: string;
// light: string;
// foreground: string;
