import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import type { AppProps } from "next/app";

export const createCustomCache = () => {
  return createCache({
    key: "mui-style",
    prepend: true,
  });
};

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setMode(savedTheme);
    }
  }, []);

  const toggleTheme = (newMode: "light" | "dark") => {
    setMode(newMode);
    localStorage.setItem("theme", newMode); // Lưu vào localStorage
  };

  const theme = createTheme({
    palette: {
      mode,
    },
    components: {
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          variant: "filled",
        },
        styleOverrides: {
          root: {
            ".MuiInputLabel-root": {
              transform: "translate(40px, 18px) scale(1)",
              "&.Mui-focused": {
                transform: "translate(40px, 7px) scale(0.75)",
              },
              "&.MuiFormLabel-filled": {
                transform: "translate(40px, 7px) scale(0.75)",
              },
            },
          },
        },
      },
      MuiFilledInput: {
        defaultProps: {
          disableUnderline: true,
          sx: {
            borderRadius: 3,
            background: (theme) =>
              theme.palette.mode === "dark" ? "#000" : "#fff",
          },
        },
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: 12,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "transparent",
            "&.Mui-focused": {
              borderColor: "red",
            },
            height: 56,
            gap: 8,
          },
        },
      },
      MuiInputAdornment: {
        defaultProps: {
          sx: {
            margin: 0,
          },
          variant: "outlined",
        },
      },
    },
  });

  const cache = createCustomCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <button onClick={() => toggleTheme("light")}>light</button>
        <button onClick={() => toggleTheme("dark")}>dark</button>
      </ThemeProvider>
    </CacheProvider>
  );
}
