import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider, Typography } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'
import { createCustomTheme } from '@/libs/theme'

// const manorop = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: './Roboto-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './Roboto-BoldItalic.woff2',
//       weight: '700',
//       style: 'italic',
//     },
//   ],
// })

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    danger: true;
    ghostPrimary: true;
    ghostSecondary: true
  }
  interface ButtonPropsSizeOverrides {
    xlarge: true;
    large: true;
    medium: true;
    small: true;
    xsmall: true;
  }
}

declare module '@mui/material/InputBase' {
  interface InputBasePropsSizeOverrides {
    xlarge: true,
    large: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsSizeOverrides {
    xlarge: true,
    large: true
  }
}

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

  const theme = createCustomTheme(mode)

  const cache = createCustomCache();

  return (
    // <I18nextProvider i18n={i18n}>
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <button onClick={() => toggleTheme("light")}>light</button>
        <button onClick={() => toggleTheme("dark")}>dark</button>
        <Typography sx={theme => ({
          px: theme.spacing(2.75)
        })}>
          abc
        </Typography>
      </ThemeProvider>
    </CacheProvider>
    // </I18nextProvider>
  );
}
