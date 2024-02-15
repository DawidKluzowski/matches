import { v4 as uuidv4 } from 'uuid';
import { action, makeObservable, observable } from 'mobx';

type Goal = {
  team: string;
};

type Match = {
  teamA: string;
  teamB: string;
  goals: Goal[];
};

type SimulationState = 'new' | 'running' | 'done';

class SimulationsStore {
  simulationId = '';
  state: SimulationState = 'new';

  matches: Match[] = [
    {
      teamA: 'Germany',
      teamB: 'Poland',
      goals: [],
    },
    {
      teamA: 'Brazil',
      teamB: 'Mexico',
      goals: [],
    },
    {
      teamA: 'Argentina',
      teamB: 'Uruguay',
      goals: [],
    },
  ];

  constructor() {
    makeObservable(this, {
      simulationId: observable,
      state: observable,
      matches: observable,
      startSimulation: action.bound,
      finishSimulation: action.bound,
      restartSimulation: action.bound,
    });
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
