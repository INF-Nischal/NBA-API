import { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaCalendar } from "react-icons/fa6";
import GameCard from "./GameCard";

const Games = () => {
  const [games, setGames] = useState([]);
  const [date, setDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const formattedDate = date.toISOString().split('T')[0];
        const Response = await axios.get(
          `https://v2.nba.api-sports.io/games?date=${formattedDate}`,
          {
            headers: {
              "x-rapidapi-key": "7b91c657c1fa228fe0fd9c325a778ac6",
              "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
            },
          }
        );
        setGames(Response.data.response);
        console.log(Response.data.response);
      } catch (error) {
        console.error("Error fetching seasons: ", error);
      }
    };

    fetchGames();
  }, [date]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsCalendarOpen(false);
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarOpen(!isCalendarOpen);
  };

  return (
    <div className="bg-gray-200 px-16">
      <div>
        <div className="relative my-5">
          <button
            className="py-3 text-lg font-bold flex items-center"
            onClick={toggleCalendarVisibility}
          >
            {date.toLocaleString("en-US", { month: "long", year: "numeric" })}
            <FaCalendar className="ml-3 text-lg" />
          </button>

          {isCalendarOpen && (
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="absolute"
            />
          )}
        </div>

        <div>
          {games && games.length > 0 && (
            <div className="grid grid-cols-3 gap-8">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="bg-white flex justify-between my-3 px-4 py-2"
                >
                  <GameCard
                    logo={game.teams.visitors.logo}
                    name={game.teams.visitors.nickname}
                    points={game.scores.visitors.points}
                  />
                  <div className="h-full flex flex-col justify-center items-center">
                    <p>{game.date.start.slice(0, 10)}</p>
                    <p>{game.league}</p>
                  </div>

                  <GameCard
                    logo={game.teams.home.logo}
                    name={game.teams.home.nickname}
                    points={game.scores.home.points}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Games;
