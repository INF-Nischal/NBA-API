import { useState, useEffect } from "react";
import axios from "axios";

const Players = () => {
  const seasons = ["2017", "2018", "2019", "2020", "2021", "2022", "2023"];

  const [players, setPlayers] = useState([]);
  const [teamId, setTeamId] = useState();
  const [selectedSeason, setSelectedSeason] = useState(seasons[4]);

  useEffect(() => {
    const fetchTeamId = async () => {
      try {
        const response = await axios.get("https://v2.nba.api-sports.io/teams", {
          headers: {
            "x-rapidapi-key": "b2c2044f7f10ff097c52349872648b46",
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
          },
        });

        console.log(response.data);
        setTeamId(response.data.response[0].id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamId();
  }, []);

  useEffect(() => {
    const fetchPlayers = async () => {

      const id = parseInt(teamId);

      if(isNaN(id)) {
        return console.log("Team ID is not a number");
      }

      try {
        const response = await axios.get(
          `https://v2.nba.api-sports.io/players?team=${id}&season=${selectedSeason}`,
          {
            headers: {
              "x-rapidapi-key": "b2c2044f7f10ff097c52349872648b46",
              "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            },
          }
        );

        console.log(response.data);
        setPlayers(response.data.response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, [selectedSeason]);

  const handleSeasonChange = (e) => {
    setSelectedSeason(e.target.value);
  }

  return (
    <div>
      <h1>Players</h1>
      <h2>{teamId}</h2>
      <select onChange={handleSeasonChange} className="px-4 py-2 border-2 text-lg outline-none font-bold">
        {seasons.map((season) => (
          <option key={season} value={season}>
            {selectedSeason}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Players;
