import { createContext } from 'react';
import SimulationsStore from '../stores/domain-stores/simulations-store.ts';

export const SimulationsContext = createContext<InstanceType<
  typeof SimulationsStore
> | null>(null);
