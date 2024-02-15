import { observer } from 'mobx-react-lite';
import { useSimulationsContext } from '../hooks';
import SingleMatchSimulation from './single-match-simulation.tsx';

const Simulations = () => {
  const { matches, simulationId } = useSimulationsContext();
  return (
    <div>
      {matches.map((match) => (
        <SingleMatchSimulation
          key={match.id}
          match={match}
          simulationId={simulationId}
        />
      ))}
    </div>
  );
};

export default observer(Simulations);
