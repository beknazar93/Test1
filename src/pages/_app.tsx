import type { AppProps } from "next/app";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF2E2E", // Красная кнопка "Обновить"
    },
    background: {
      default: "#000000", // Глобальный фон — чёрный
      paper: "#121212",   // Элементы 
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
    error: {
      main: "#FF2E2E", // Цвет ошибки
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
