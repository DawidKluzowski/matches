export type Goal = {
  team: Team;
};

export type Team = {
  name: string;
};

export type Match = {
  id: string;
  teamA: Team;
  teamB: Team;
  goals: Goal[];
};
