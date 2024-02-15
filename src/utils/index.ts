import { Goal, Match } from '../types';

export const getRandomGoal = (teams: { name: string }[]): Goal => {
  const goalForTeamIndex = Math.random() < 0.5 ? 0 : 1;
  const scoringTeam = teams[goalForTeamIndex].name;
  return { team: scoringTeam };
};

export const getTotalGoals = (matches: Match[]) =>
  matches.reduce((acc, curr) => acc + curr.goals.length, 0);

export const getGoalsForTeam = (match: Match, team: string) =>
  match.goals.filter((goal) => goal.team === team).length;
