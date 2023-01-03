import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 567,
      md: 768,
      lg: 992,
      xl: 1440,
    },
  },
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
      grey: "#D9D9D9",
      darkBlue: "#003260",
      lightBlue: "#D9EDFF",
      pageBackground: "#FBFBFF",
      green: "#479706",
      orange: "#FBBF24",
      borderColor: "#EBEBEB",
    },
    primary: {
      light: "#728ff8",
      main: "#436AF3",
      dark: "#0f40ec",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#067ae6",
      main: "#0053A0",
      dark: "#0053A0",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#464646",
    },
    error: {
      main: red.A700,
    },
  },
  typography: {
    fontFamily: "normal normal 900 28px/37px Avenir LT Std",
    lineHeight: 1.3,
    fontWeightRegular: "400",
    fontWeightMedium: "500",
    fontWeightSemibold: "600",
    fontWeightBold: "700",
  },
});

theme = createTheme({
  ...theme,
  typography: {
    h1: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "600",
      fontSize: "32px",
      lineHeight: "48px",
      letterSpacing: "normal",
    },
    h2: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "36px",
      letterSpacing: "normal",
    },
    h3: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "500",
      fontSize: "22px",
      lineHeight: "32px",
      letterSpacing: "normal",
      [theme.breakpoints.down("md")]: {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
    subtitle1: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "28px",
      letterSpacing: "normal",
    },
    subtitle2: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "22px",
      letterSpacing: "normal",
    },
    body1: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",
    },
    body2: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "400",
      fontSize: "14px",
    },
    button: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "400",
    },
    caption: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "400",
      fontSize: "12px",
    },
    overline: {
      fontFamily: "normal normal 900 28px/37px Avenir LT Std",
      fontWeight: "400",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme.palette.common.borderColor,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 22,
          padding: 0,

          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 4,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: "translateX(20px)",
              color: "#fff",
              "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.primary.main,
                opacity: 1,
                border: 0,
              },
              "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
              },
            },
            "&.Mui-focusVisible .MuiSwitch-thumb": {
              color: "#33cf4d",
              border: "6px solid #fff",
            },
            "&.Mui-disabled .MuiSwitch-thumb": {
              color:
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[600],
            },
            "&.Mui-disabled + .MuiSwitch-track": {
              opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
            },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 14,
            height: 14,
          },
          "& .MuiSwitch-track": {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.grey[300],
            opacity: 1,
            transition: theme.transitions.create(["background-color"], {
              duration: 500,
            }),
          },
        },
      },
    },
  },
});

export default theme;
