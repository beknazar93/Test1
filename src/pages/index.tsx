import { AppBar, Toolbar, Typography, Box, Container, Button, Alert } from "@mui/material";
import { useMatches } from "../hooks/useMatches";
import MatchRow from "../components/MatchRow";
import Loader from "../components/Loader";

export default function Home() {
  const { matches, isLoading, isError, refresh } = useMatches();

  return (
    <>
      {/* Тёмная шапка */}
      <AppBar position="static" sx={{ backgroundColor: "#121212" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Название слева */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Match Tracker
          </Typography>

          {/* Справа: ошибка + кнопка "Обновить" */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isError && (
              <Alert
                severity="error"
                variant="outlined"
                sx={{
                  marginRight: 2,
                  borderColor: "#FF2E2E",
                  color: "#FF2E2E",
                }}
              >
                Ошибка: не удалось загрузить информацию
              </Alert>
            )}
            <Button variant="contained" color="primary" onClick={refresh}>
              ОБНОВИТЬ
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Основной контент */}
      <Container maxWidth="md" sx={{ marginTop: 3 }}>
        {isLoading && <Loader />}
        
    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {matches.map((match: any) => (
          <MatchRow key={match.id || match.title} match={match} />
        ))}
      </Container>
    </>
  );
}
