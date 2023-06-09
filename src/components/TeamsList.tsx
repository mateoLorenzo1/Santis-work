import { useState } from "react";

interface ITeam {
  name: string;
  players: string[];
  games: {
    score: number;
    city: string;
  }[];
}

const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

const FILTERS = [
  "Initial List",
  "Highest to Lowest",
  "Lowest to Highest",
  "Teams with at least 3 players",
];

export const TeamsList = () => {
  const [teams, setTeams] = useState(TEAMS);
  const [filter, setFilter] = useState(FILTERS[0]);

  const orderAsInitialPosition = () => {
    setTeams(TEAMS);
    setFilter(FILTERS[0]);
  };

  const orderTeamByScoreHighestToLowest = () => {
    const sortedTeams = [...TEAMS].sort((a, b) => {
      const pointsOfTeamA = a.games.reduce(
        (accumulator, team) => accumulator + team.score,
        0
      );

      const pointsOfTeamB = b.games.reduce(
        (accumulator, team) => accumulator + team.score,
        0
      );

      if (pointsOfTeamA > pointsOfTeamB) {
        return -1;
      }

      if (pointsOfTeamB > pointsOfTeamA) {
        return 1;
      }

      return 0;
    });

    setTeams(sortedTeams);
    setFilter(FILTERS[1]);
  };

  const orderTeamByScoreLowestToHighest = () => {
    const sortedTeams = [...TEAMS].sort((a, b) => {
      const pointsOfTeamA = a.games.reduce(
        (accumulator, team) => accumulator + team.score,
        0
      );

      const pointsOfTeamB = b.games.reduce(
        (accumulator, team) => accumulator + team.score,
        0
      );

      if (pointsOfTeamA > pointsOfTeamB) {
        return 1;
      }

      if (pointsOfTeamB > pointsOfTeamA) {
        return -1;
      }

      return 0;
    });

    setTeams(sortedTeams);
    setFilter(FILTERS[2]);
  };

  const teamsWithMoreThanThreePlayers = () => {
    const sortedTeams = [...TEAMS].reduce((accumulator: ITeam[], team) => {
      if (team.players.length > 2) {
        accumulator.push(team);
      }
      return accumulator;
    }, []);

    setTeams(sortedTeams);
    setFilter(FILTERS[3]);
  };

  const Team = ({ name }: { name: string }) => (
    <p style={{ minWidth: "80px", textAlign: "left" }}>{name}</p>
  );

  const Points = ({ games }: { games: { score: number; city: string }[] }) => (
    <p style={{ minWidth: "80px", textAlign: "center" }}>
      {games.reduce((accumulator, team) => accumulator + team.score, 0)}
    </p>
  );

  const Players = ({ players }: { players: string[] }) => (
    <div style={{ display: "flex" }}>
      {players.map((player) => (
        <p key={player} style={{ minWidth: "80px", textAlign: "center" }}>
          {player}
        </p>
      ))}
    </div>
  );

  console.log(filter === FILTERS[2]);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <ul className="teams" style={{ marginBottom: "64px", padding: 0 }}>
        {teams.map((team) => (
          <li
            key={team.name}
            style={{ listStyle: "none", display: "flex", alignItems: "center" }}
          >
            <Team name={team.name} />
            |
            <Points games={team.games} />
            |
            <Players players={team.players} />
          </li>
        ))}
      </ul>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <button
          style={{
            boxShadow:
              filter === FILTERS[0]
                ? "0px 0px 10px 1px rgba(145,145,145,1)"
                : "none",
          }}
          onClick={orderAsInitialPosition}
        >
          Initial list
        </button>
        <button
          style={{
            boxShadow:
              filter === FILTERS[1]
                ? "0px 0px 10px 1px rgba(145,145,145,1)"
                : "none",
          }}
          onClick={orderTeamByScoreHighestToLowest}
        >
          Highest to Lowest
        </button>
        <button
          style={{
            boxShadow:
              filter === FILTERS[2]
                ? "0px 0px 10px 1px rgba(145,145,145,1)"
                : "none",
          }}
          onClick={orderTeamByScoreLowestToHighest}
        >
          Lowest to Highest
        </button>
        <button
          style={{
            boxShadow:
              filter === FILTERS[3]
                ? "0px 0px 10px 1px rgba(145,145,145,1)"
                : "none",
          }}
          onClick={teamsWithMoreThanThreePlayers}
        >
          Teams with at least 3 players
        </button>
      </div>
    </div>
  );
};
