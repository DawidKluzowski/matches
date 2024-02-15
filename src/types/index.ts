export type Goal = {
  team: string;
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
