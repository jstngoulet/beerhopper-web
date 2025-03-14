import { createTheme } from "@mui/material/styles";

const theme = setupTheme();
export default theme;

function setupTheme() {
  return createTheme({
    palette: {
      primary: {
        main: "#B5836D", // Warm golden tone
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#5A331E", // Rustic brown
        contrastText: "#ffffff",
      },
      background: {
        default: "#F5EEDC", // Light wood background
        // paper: "#E3D5C5",
        paper: "#FFF",
      },
      text: {
        primary: "#3B2F2F", // Dark brown for text
        secondary: "#6B4226",
      },
      success: {
        main: "#8CB369", // Hops green
      },
      warning: {
        main: "#F4A261", // Subtle amber
      },
      info: {
        main: "#4682B4", // Steel blue accent
      },
    },
    typography: {
      // fontFamily: "Roboto, sans-serif",
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
      h4: {
        fontSize: "1.25em",
      },
      h5: {
        fontSize: "2em",
      },
      h6: {
        fontSize: "1.74em",
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
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            textTransform: "none",
            padding: "8px 16px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: "1.25em",
            fontWeight: "bold",
          },
          containedPrimary: {
            backgroundColor: "#D4A373",
            "&:hover": {
              backgroundColor: "#B5836D",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "16px",
            // padding: "16px",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
            // backgroundColor: "#E3D5C5",
            backgroundColor: "#FFFF",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            color: "#3B2F2F", // Dark brown text
            borderRadius: "4px",
            padding: "8px 16px",
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            color: "#3B2F2F", // Dark brown text
            borderRadius: "4px",
            fontSize: "1.25em"
          },
        },
      },
    },
  });
  // return createTheme({
  //   palette: {
  //     primary: {
  //       main: "#253D58",
  //       contrastText: "#FFFFFF",
  //     },
  //     secondary: {
  //       main: "#535F70",
  //       contrastText: "#FFFFFF",
  //     },
  //     error: {
  //       main: "#BA1A1A",
  //       contrastText: "#FFFFFF",
  //     },
  //     background: {
  //       default: "#F8F9FF",
  //       paper: "#F8F9FF",
  //     },
  //     text: {
  //       primary: "#191C20",
  //       secondary: "#43474E",
  //     },
  //   },
  //   shape: {
  //     borderRadius: 10,
  //   },
  //   typography: {
  //     htmlFontSize: 10,
  //     fontFamily: "Roboto, Arial, sans-serif",
  //     h1: {
  //       fontSize: "3rem",
  //     },
  //     h2: {
  //       fontSize: "2.7rem",
  //     },
  //     h3: {
  //       fontSize: "2.5rem",
  //     },
  //     body1: {
  //       fontSize: "1rem",
  //     },
  //     body2: {
  //       fontSize: "0.8rem",
  //     },
  //     caption: {
  //       fontSize: "0.5rem",
  //     },
  //   },
  //   components: {
  //     MuiCssBaseline: {
  //       styleOverrides: ({ palette }) => {
  //         return `
  //                  html {
  //                     font-size: 62.5%;
  //                  }
  //                  *::-webkit-scrollbar {
  //                     height: 8px;
  //                     width: 8px;
  //                  }
  //                  *::-webkit-scrollbar-track {
  //                     border-radius: 4px;
  //                     background-color: ${palette.secondary.main};
  //                  }
  //                   *::-webkit-scrollbar-track:hover {
  //                     background-color: ${palette.secondary.dark};
  //                   }
  //                   *::-webkit-scrollbar-track:active {
  //                     background-color: ${palette.secondary.dark};
  //                   }
  //               `;
  //       },
  //     },
  //     MuiButton: {
  //       styleOverrides: {
  //         root: {
  //           borderRadius: "12px",
  //           padding: "8px 16px",
  //           // textTransform: "none",
  //           fontWeight: "bold",
  //           transition: "all 0.3s ease",
  //           "&:hover": {
  //             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  //             backgroundColor: "rgba(54, 97, 142, 0.1)", // Lighter primary color
  //           },
  //           "&:active": {
  //             boxShadow: "none",
  //             backgroundColor: "rgba(54, 97, 142, 0.2)", // Darker primary color
  //           },
  //           "&.Mui-disabled": {
  //             opacity: 0.5,
  //             backgroundColor: "#D2E4FF", // Primary container color
  //             color: "#73777F", // Outline color
  //           },
  //         },
  //         contained: {
  //           backgroundColor: "#36618E",
  //           color: "#FFFFFF",
  //           "&:hover": {
  //             backgroundColor: "#2C5784", // Darker primary
  //           },
  //         },
  //         outlined: {
  //           borderColor: "#36618E",
  //           color: "#36618E",
  //           "&:hover": {
  //             backgroundColor: "rgba(54, 97, 142, 0.1)",
  //           },
  //         },
  //         text: {
  //           color: "#36618E",
  //           "&:hover": {
  //             backgroundColor: "rgba(54, 97, 142, 0.05)",
  //           },
  //         },
  //         sizeSmall: {
  //           padding: "4px 8px",
  //           fontSize: "0.875rem",
  //         },
  //         sizeLarge: {
  //           padding: "12px 24px",
  //           fontSize: "1.125rem",
  //         },
  //       },
  //       // styleOverrides: {
  //       //   //   borderRadius: 20,
  //       //   //   fontWeight: "bold",

  //       // },
  //       // defaultProps: {
  //       //   variant: "contained",
  //       //   disableElevation: true,
  //       // },
  //     },
  //     MuiStack: {
  //       defaultProps: {
  //         gap: 2,
  //       },
  //     },
  //   },
  // });
}
