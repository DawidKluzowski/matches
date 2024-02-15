import { describe, expect, test } from 'vitest';
import SimulationsStore from './simulations-store.ts';

describe('SimulationsStore', () => {
  test('Team gets goal', () => {
    const store = new SimulationsStore();
    const firstMatch = store.matches[0];

    expect(firstMatch.goals).toHaveLength(0);

    store.addGoal(firstMatch.id, { team: { name: 'Poland' } });

    expect(firstMatch.goals).toHaveLength(1);
    expect(firstMatch.goals[0].team.name).toBe('Poland');
  });

  test('Start simulation updates status', () => {
    const store = new SimulationsStore();

    expect(store.state).toBe('new');

    store.startSimulation();

    expect(store.state).toBe('running');
  });

  test('Finish simulation updates status', () => {
    const store = new SimulationsStore();

    expect(store.state).toBe('new');

    store.finishSimulation();

    expect(store.state).toBe('done');
  });
});
