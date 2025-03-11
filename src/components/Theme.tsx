import { createTheme } from "@mui/material/styles";

const theme = setupTheme();
export default theme;

function setupTheme() {

  return createTheme({
    palette: {
      primary: {
        main: "#253D58",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#535F70",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#BA1A1A",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#F8F9FF",
        paper: "#F8F9FF",
      },
      text: {
        primary: "#191C20",
        secondary: "#43474E",
      },
    },
    shape: {
      borderRadius: 10,
    },
    typography: {
      htmlFontSize: 10,
      fontFamily: "Roboto, Arial, sans-serif",
      h1: {
        fontSize: "3rem",
      },
      h2: {
        fontSize: "2.7rem",
      },
      h3: {
        fontSize: "2.5rem",
      },
      body1: {
        fontSize: "1rem",
      },
      body2: {
        fontSize: "0.8rem",
      },
      caption: {
        fontSize: "0.5rem",
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: ({ palette }) => {
          return `
                   html {
                      font-size: 62.5%;
                   }  
                   *::-webkit-scrollbar {
                      height: 8px;
                      width: 8px;
                   }
                   *::-webkit-scrollbar-track {
                      border-radius: 4px;
                      background-color: ${palette.secondary.main};
                   }
                    *::-webkit-scrollbar-track:hover {
                      background-color: ${palette.secondary.dark};
                    }
                    *::-webkit-scrollbar-track:active {
                      background-color: ${palette.secondary.dark};
                    }
                `;
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            padding: "8px 16px",
            // textTransform: "none",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              backgroundColor: "rgba(54, 97, 142, 0.1)", // Lighter primary color
            },
            "&:active": {
              boxShadow: "none",
              backgroundColor: "rgba(54, 97, 142, 0.2)", // Darker primary color
            },
            "&.Mui-disabled": {
              opacity: 0.5,
              backgroundColor: "#D2E4FF", // Primary container color
              color: "#73777F", // Outline color
            },
          },
          contained: {
            backgroundColor: "#36618E",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "#2C5784", // Darker primary
            },
          },
          outlined: {
            borderColor: "#36618E",
            color: "#36618E",
            "&:hover": {
              backgroundColor: "rgba(54, 97, 142, 0.1)",
            },
          },
          text: {
            color: "#36618E",
            "&:hover": {
              backgroundColor: "rgba(54, 97, 142, 0.05)",
            },
          },
          sizeSmall: {
            padding: "4px 8px",
            fontSize: "0.875rem",
          },
          sizeLarge: {
            padding: "12px 24px",
            fontSize: "1.125rem",
          },
        },
        // styleOverrides: {
        //   //   borderRadius: 20,
        //   //   fontWeight: "bold",

        // },
        // defaultProps: {
        //   variant: "contained",
        //   disableElevation: true,
        // },
      },
      MuiStack: {
        defaultProps: {
          gap: 2,
        },
      },
    },
  });
}