import { Goal, Match, Team } from '../types';

export const getRandomGoal = (teams: Team[]): Goal => {
  const goalForTeamIndex = Math.random() < 0.5 ? 0 : 1;
  const scoringTeam = teams[goalForTeamIndex];
  return { team: scoringTeam };
};

export const getTotalGoals = (matches: Match[]) =>
  matches.reduce((acc, curr) => acc + curr.goals.length, 0);
