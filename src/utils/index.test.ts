import { describe, test, expect } from 'vitest';
import { getTotalGoals } from './index.ts';
import { Match, Team } from '../types';

describe('getTotalGoals', () => {
  test('Each team scores 1 goal', () => {
    const team1: Team = { name: 'team 1' };
    const team2: Team = { name: 'team 2' };
    const team3: Team = { name: 'team 3' };
    const team4: Team = { name: 'team 4' };

    const matches: Match[] = [
      {
        id: 'id 1',
        teamA: team1,
        teamB: team2,
        goals: [{ team: team1 }, { team: team2 }],
      },
      {
        id: 'id 2',
        teamA: team3,
        teamB: team4,
        goals: [{ team: team3 }, { team: team4 }],
      },
    ];

    expect(getTotalGoals(matches)).toBe(4);
  });

  test('Neither of teams scores a goal', () => {
    const team1: Team = { name: 'team 1' };
    const team2: Team = { name: 'team 2' };
    const team3: Team = { name: 'team 3' };
    const team4: Team = { name: 'team 4' };

    const matches: Match[] = [
      {
        id: 'id 1',
        teamA: team1,
        teamB: team2,
        goals: [],
      },
      {
        id: 'id 2',
        teamA: team3,
        teamB: team4,
        goals: [],
      },
    ];

    expect(getTotalGoals(matches)).toBe(0);
  });

  test('Only one team scores 3 goals', () => {
    const team1: Team = { name: 'team 1' };
    const team2: Team = { name: 'team 2' };
    const team3: Team = { name: 'team 3' };
    const team4: Team = { name: 'team 4' };

    const matches: Match[] = [
      {
        id: 'id 1',
        teamA: team1,
        teamB: team2,
        goals: [{ team: team1 }, { team: team1 }, { team: team1 }],
      },
      {
        id: 'id 2',
        teamA: team3,
        teamB: team4,
        goals: [],
      },
    ];

    expect(getTotalGoals(matches)).toBe(3);
  });
});
