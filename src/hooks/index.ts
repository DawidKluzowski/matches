import { useContext } from 'react';
import { SimulationsContext } from '../contexts';

export const useSimulationsContext = () => {
  const simulationsStore = useContext(SimulationsContext);

  if (!simulationsStore) throw new Error('Simulations Store is not available');

  return simulationsStore;
};
