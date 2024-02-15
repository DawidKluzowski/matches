export type Goal = {
  team: string;
};

export type Match = {
  id: string;
  teamA: string;
  teamB: string;
  goals: Goal[];
};
