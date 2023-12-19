import { useState, useEffect } from "react";
import axios from "axios";

const Teams = () => {
  const divisions = [
    "Atlantic",
    "Central",
    "Northwest",
    "Pacific",
    "Southeast",
    "Southwest",
  ];

  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    try {
      const Response = await axios.get(`https://v2.nba.api-sports.io/teams`, {
        headers: {
          "x-rapidapi-key": "7b91c657c1fa228fe0fd9c325a778ac6",
          "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
        },
      });
      setTeams(Response.data.response);
    } catch (error) {
      console.error("Error fetching seasons: ", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="px-16 py-2 bg-gray-200 my-5">
      <h1 className="border-b-2 text-2xl font-bold uppercase">All teams</h1>
      <div className="grid grid-cols-3 gap-8 py-8">
        {divisions.map((division) => (
          <div key={division}>
            <h1 className="font-bold uppercase mt-4">{division}</h1>
            {teams
              .filter((team) => team.leagues?.standard?.division === division)
              .map((team) => (
                <div className="flex items-center mt-4 bg-gray-200 px-6 py-3" key={team.id}>
                  <article className="h-[60px] w-[60px] rounded-full overflow-hidden">
                    <img src={team.logo} alt={team.name} className="h-full w-full object-contain" />
                  </article>
                  <p className="ml-4">{team.name}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
