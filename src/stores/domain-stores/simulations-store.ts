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
        teamA: 'Germany',
        teamB: 'Poland',
        goals: [],
      },
      {
        id: uuidv4(),
        teamA: 'Brazil',
        teamB: 'Mexico',
        goals: [],
      },
      {
        id: uuidv4(),
        teamA: 'Argentina',
        teamB: 'Uruguay',
        goals: [],
      },
    ];

    makeObservable(this, {
      simulationId: observable,
      state: observable,
      matches: observable,
      addGoal: action.bound,
      resetGoals: action.bound,
      startSimulation: action.bound,
      finishSimulation: action.bound,
      restartSimulation: action.bound,
    });
  }

  addGoal(matchId: string, goal: Goal) {
    const match = this.matches.find((match) => match.id === matchId);
    if (match) {
      match.goals = [...match.goals, { ...goal }];
    }
  }

  resetGoals(matchId: string) {
    const match = this.matches.find((match) => match.id === matchId);
    if (match) {
      match.goals = [];
    }
  }

  startSimulation() {
    this.simulationId = uuidv4();
    this.state = 'running';
  }

  finishSimulation() {
    this.state = 'done';
  }

  restartSimulation() {
    this.simulationId = uuidv4();
    this.matches = this.matches.map((match) => ({ ...match, goals: [] }));
  }
}

export default SimulationsStore;
