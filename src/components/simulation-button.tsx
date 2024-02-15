import { useSimulationsContext } from '../hooks';
import { observer } from 'mobx-react-lite';

const SimulationButton = () => {
  const { startSimulation, finishSimulation, restartSimulation, state } =
    useSimulationsContext();

  if (state === 'done') {
    return (
      <button
        onClick={restartSimulation}
        className="rounded border-2 px-10 py-1"
      >
        Restart
      </button>
    );
  }
  if (state === 'running') {
    return (
      <button
        onClick={finishSimulation}
        className="rounded border-2 px-10 py-1"
      >
        Finish
      </button>
    );
  }
  return (
    <button onClick={startSimulation} className="rounded border-2 px-10 py-1">
      Start
    </button>
  );
};

export default observer(SimulationButton);
