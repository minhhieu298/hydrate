import createCache from "@emotion/cache";
import { createTheme, ThemeOptions } from "@mui/material";
// import { TabsTheme } from "./Tabs";
// import { TextFieldTheme } from "./TextField";
import { colorThemeCustom, typographyCustom } from "./themeCustom";
// import { ChipsTheme } from "./Chip";
// import { ModalTheme } from "./Modal";
// import { BadgeTheme } from "./Badge";
// import { DialogTheme } from "./Dialog";
// import { ButtonTheme } from "./Button";

export type ThemeMode = "light" | "dark";

export interface ThemeConfig {
  mode: ThemeMode;
  toggleTheme: () => void;
  emotionCache: ReturnType<typeof createCache>;
  muiTheme: ThemeOptions;
}

// Tạo theme cho Material-UI
export const createCustomTheme = (mode: ThemeMode): ThemeOptions => {
  return createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#414141" : "#fff",
        paper: mode === "dark" ? "#1d1d1d" : "#fafafa",
      },
      ...colorThemeCustom,
    },
    typography: {
      fontFamily: "inherit",
      allVariants: {
        color: "inherit",
        lineHeight: 1.5,
      },
      ...typographyCustom,
    },
    spacing: (factor: number) => 4 * factor,
    components: {
      // ...TextFieldTheme,
      // ...TabsTheme,
      // ...ButtonTheme,
      // ...ChipsTheme,
      // ...ModalTheme,
      // ...BadgeTheme,
      // ...DialogTheme,
      MuiButton: {
        variants: [
          {
            props: { size: "xlarge" },
            style: ({ theme }) => ({
              padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
              gap: theme.spacing(2),
              fontSize: theme.spacing(4),
              fontWeight: 600,
              lineHeight: 1.5,
              color: "#ffffff",
              letterSpacing: 0,
              textAlign: "center",
            }),
          },
          {
            props: { size: "large" },
            style: ({ theme }) => ({
              padding: `${theme.spacing(2.375)} ${theme.spacing(6)}`,
              gap: theme.spacing(2),
              fontSize: theme.spacing(3.5),
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#ffffff",
              letterSpacing: 0,
              textAlign: "center",
            }),
          },
          {
            props: { size: "medium" },
            style: ({ theme }) => ({
              padding: `${theme.spacing(1.875)} ${theme.spacing(4)}`,
              gap: theme.spacing(1.5),
              fontSize: theme.spacing(3.5),
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#ffffff",
              letterSpacing: 0,
              textAlign: "center",
            }),
          },
          {
            props: { size: "small" },
            style: ({ theme }) => ({
              padding: `${theme.spacing(1.375)} ${theme.spacing(4)}`,
              gap: theme.spacing(1.5),
              fontSize: theme.spacing(3.5),
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#ffffff",
              letterSpacing: 0,
              textAlign: "center",
            }),
          },
          {
            props: { size: "xsmall" },
            style: ({ theme }) => ({
              padding: `${theme.spacing(1.25)} ${theme.spacing(3)}`,
              gap: theme.spacing(1),
              fontSize: theme.spacing(3),
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#ffffff",
              letterSpacing: 0,
              textAlign: "center",
            }),
          },
          {
            props: { variant: "primary" },
            style: ({ theme }) => ({
              background: theme.palette.customPrimary?.primary50,
              ":hover": {
                background: theme.palette.customPrimary?.primary40,
              },
              ":disabled": {
                ...theme.applyStyles("dark", {
                  background: theme.palette.customSupport?.primary5003,
                  color: theme.palette.customBase?.baseWhite,
                }),
                ...theme.applyStyles("light", {
                  background: theme.palette.customSupport?.primary5005,
                  color: theme.palette.customAdditional?.baseWhite03,
                }),
              },
            }),
          },
          {
            props: { variant: "secondary" },
            style: ({ theme }) => ({
              ...theme.applyStyles("dark", {
                background: theme.palette.customBase?.base50,
                color: theme.palette.customBase?.baseWhite,
                ":hover": {
                  background: theme.palette.customBase?.base40,
                  color: theme.palette.customBase?.baseWhite,
                },
                ":disabled": {
                  background: theme.palette.customAdditional?.base5003,
                  color: theme.palette.customAdditional?.baseWhite03,
                },
              }),
              ...theme.applyStyles("light", {
                background: theme.palette.customBase?.base20,
                color: theme.palette.customBase?.base60,
                ":hover": {
                  background: theme.palette.customBase?.base30,
                  color: theme.palette.customBase?.base60,
                },
                ":disabled": {
                  background: theme.palette.customBase?.base20,
                  color: theme.palette.customAdditional?.base8003,
                },
              }),
            }),
          },
          {
            props: { variant: "danger" },
            style: ({ theme }) => ({
              background: theme.palette.customRed?.default,
              color: theme.palette.customBase?.baseWhite,
              ":hover": {
                background: theme.palette.customRed?.light,
                color: theme.palette.customBase?.baseWhite,
              },
              ":disabled": {
                background: theme.palette.customSupport?.reddefault03,
                ...theme.applyStyles("dark", {
                  color: theme.palette.customAdditional?.baseWhite03,
                }),
                ...theme.applyStyles("light", {
                  color: theme.palette.customBase?.baseWhite,
                }),
              },
            }),
          },
          {
            props: { variant: "ghostPrimary" },
            style: ({ theme }) => ({
              color: theme.palette.customPrimary?.primary50,
              ":hover": {
                color: theme.palette.customPrimary?.primary40,
              },
              ":disabled": {
                ...theme.applyStyles("dark", {
                  color: theme.palette.customSupport?.primary5003,
                }),
                ...theme.applyStyles("light", {
                  color: theme.palette.customSupport?.primary5005,
                }),
              },
            }),
          },
          {
            props: { variant: "ghostSecondary" },
            style: ({ theme }) => ({
              ...theme.applyStyles("dark", {
                color: theme.palette.customBase?.base40,
                ":hover": {
                  color: theme.palette.customBase?.base30,
                },
                ":disabled": {
                  color: theme.palette.customAdditional?.baseWhite03,
                },
              }),
              ...theme.applyStyles("light", {
                color: theme.palette.customBase?.base60,
                ":hover": {
                  color: theme.palette.customBase?.base40,
                },
                ":disabled": {
                  color: theme.palette.customAdditional?.base8003,
                },
              }),
            }),
          },
        ],
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            ".MuiInputLabel-root": {
              fontFamily: "inherit",
              lineHeigt: 1.5,
            },
          },
        },
        variants: [
          {
            props: { size: "xlarge" },
            style: ({ theme }) => ({
              "&:has(.MuiFormLabel-filled)": {
                ".MuiInputBase-input": {
                  paddingTop: theme.spacing(5.5),
                  paddingBottom: theme.spacing(2),
                },
              },
              ".MuiInputLabel-root": {
                transform: "translate(57px, 15px)",
                fontSize: theme.spacing(4),
                fontWeight: 500,
                zIndex: 1,
                transition:
                  "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,font-size 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
                "&.Mui-focused": {
                  transform: "translate(57px, 8px)",
                  color: "inherit",
                  fontSize: theme.spacing(3),
                },
                "&.MuiFormLabel-filled": {
                  transform: "translate(57px, 8px)",
                  color: "inherit",
                  fontSize: theme.spacing(3),
                },
                ...theme.applyStyles("dark", {
                  color: theme.palette.customBase?.base30,
                }),
                ...theme.applyStyles("light", {
                  color: theme.palette.customBase?.base50,
                }),
                "&.Mui-error": {
                  color: "inherit",
                },
              },
            }),
          },
          {
            props: { size: "large" },
            style: ({ theme }) => ({
              ".MuiInputLabel-root": {
                transform: "translate(0px, -21px)",
                fontSize: theme.spacing(4),
                fontWeight: 500,
                "&.Mui-error": {
                  color: "inherit",
                },
              },
            }),
          },
        ],
      },
      MuiInputAdornment: {
        defaultProps: {
          sx: {
            m: 0,
            cursor: "auto",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            marginTop: `${theme.spacing(0)} !important`,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "transparent",
            ...theme.applyStyles("dark", {
              background: theme.palette.customBase?.base55,
              ":disabled": {
                background: theme.palette.customBase?.base70,
              },
              ":hover": {
                background: theme.palette.customBase?.base50,
                borderColor: theme.palette.customPrimary?.primary50,
              },
            }),
            ...theme.applyStyles("light", {
              background: theme.palette.customBase?.base20,
              ":disabled": {
                background: theme.palette.customAdditional?.base2006,
              },
              ":hover": {
                background: theme.palette.customBase?.base10,
                borderColor: theme.palette.customPrimary?.primary50,
              },
            }),
            "&.Mui-error": {
              borderColor: theme.palette.customRed?.default,
            },
            "&.Mui-focused": {
              borderColor: theme.palette.customPrimary?.primary50,
              "&.Mui-error": {
                borderColor: theme.palette.customRed?.default,
              },
            },
          }),
        },
        variants: [
          {
            props: { size: "xlarge" },
            style: ({ theme }) => ({
              ".MuiInputBase-input": {
                padding: `${theme.spacing(3.75)} ${theme.spacing(0)}`,
                fontSize: theme.spacing(4),
                fontWeight: 500,
                zIndex: 2,             
              },
              "&.Mui-focused": {
                ".MuiInputBase-input": {
                  paddingTop: theme.spacing(5.5),
                  paddingBottom: theme.spacing(2),
                },
              },
              ".MuiInputAdornment-positionStart": {
                padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
              },
              ".MuiInputAdornment-positionEnd": {
                padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
                cursor: "pointer",
              },
            }),
          },
          {
            props: { size: "large" },
            style: ({ theme }) => ({
              padding: `${theme.spacing(2.75)} ${theme.spacing(4)}`,
              ".MuiInputBase-input": {
                padding: 0,
              },
              "&:has(.MuiInputAdornment-positionStart)": {
                padding: theme.spacing(2.75),
              },
              "&:has(.MuiInputAdornment-positionEnd)": {
                padding: theme.spacing(2.75),
              },
            }),
          },
        ],
        defaultProps: {
          sx: (theme) => ({
            borderRadius: theme.spacing(3),
            "&:has(.Mui-disabled):hover": {
              borderColor: "transparent",
            },
            ".MuiInputBase-input": {
              height: "auto",
              lineHeight: 1.5,
              caretColor: theme.palette.customPrimary?.primary50,
              "::placeholder": {
                ...theme.applyStyles("dark", {
                  color: theme.palette.customAdditional?.baseWhite03
                }),
                ...theme.applyStyles("dark", {
                  color: theme.palette.customAdditional?.base8003
                }),
              },
              ...theme.applyStyles("dark", {
                color: theme.palette.customBase?.base20,
              }),
              ...theme.applyStyles("light", {
                color: theme.palette.customBase?.base80,
              }),
            },
          }),
        },
      },
    },
  });
};
