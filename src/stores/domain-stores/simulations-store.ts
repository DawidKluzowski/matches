import { v4 as uuidv4 } from 'uuid';
import { action, makeObservable, observable } from 'mobx';
import { Goal, Match } from '../../types';

type SimulationState = 'new' | 'running' | 'done';

class SimulationsStore {
  simulationId = '';
  state: SimulationState = 'new';

  matches: Match[] = [];

  constructor() {
    this.matches = [
      {
        id: uuidv4(),
        teamA: { name: 'Germany' },
        teamB: { name: 'Poland' },
        goals: [],
      },
      {
        id: uuidv4(),
        teamA: { name: 'Brazil' },
        teamB: { name: 'Mexico' },
        goals: [],
      },
      {
        id: uuidv4(),
        teamA: { name: 'Argentina' },
        teamB: { name: 'Uruguay' },
        goals: [],
      },
    ];

    makeObservable(this, {
      simulationId: observable,
      state: observable,
      matches: observable,
      addGoal: action.bound,
      startSimulation: action.bound,
      finishSimulation: action.bound,
    });
  }

  addGoal(matchId: string, goal: Goal) {
    const match = this.matches.find((match) => match.id === matchId);
    if (match) {
      match.goals = [...match.goals, { ...goal }];
    }
  }

  startSimulation() {
    this.state = 'running';
    this.simulationId = uuidv4();
    this.matches = this.matches.map((match) => ({ ...match, goals: [] }));
  }

  finishSimulation() {
    this.state = 'done';
  }
}

export default SimulationsStore;
