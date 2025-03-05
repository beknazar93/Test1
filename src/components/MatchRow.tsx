import { Box, Typography } from "@mui/material";

interface Team {
  name: string;
}

interface MatchData {
  id?: string;
  title?: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: string; // "Ongoing", "Finished", "Scheduled" 
}

interface MatchRowProps {
  match: MatchData;
}

export default function MatchRow({ match }: MatchRowProps) {
  const { homeTeam, awayTeam, homeScore, awayScore, status } = match;

  // Цвет статуса
  const getStatusColor = (st: string) => {
    switch (st.toLowerCase()) {
      case "live":
      case "ongoing":
        return "#4CAF50"; // Зеленый
      case "finished":
        return "#FF2E2E"; // Красный
      default:
        return "#FFC107"; // Желтый 
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#121212",
        padding: "16px",
        marginBottom: "8px",
        borderRadius: "4px",
      }}
    >
        {/* Гостевая команда */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold", marginRight: 1 }}>
          {awayTeam.name}
        </Typography>
        <Box
          component="img"
          src="/team_logo.png"
          alt="Away Team Logo"
          sx={{ width: 40, height: 40 }}
        />
      </Box>
    

      {/* Счёт и статус */}
      <Box sx={{textAlign:'center' }}>
        <Typography variant="h6" sx={{ marginRight: 2 }}>
          {homeScore} : {awayScore}
        </Typography>
        <Box
          sx={{
            padding: "4px 8px",
            marginTop:'10px',
            borderRadius: "4px",
            backgroundColor: getStatusColor(status),
          }}
        >
          <Typography variant="body2" sx={{ color: "#FFFFFF", fontWeight: "bold" }}>
            {status}
          </Typography>
        </Box>
      </Box>
  {/* Домашняя команда */}
  <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/team_logo.png" 
          alt="Home Team Logo"
          sx={{ width: 40, height: 40, marginRight: 1 }}
        />
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          {homeTeam.name}
        </Typography>
      </Box>
    
    </Box>
  );
}
