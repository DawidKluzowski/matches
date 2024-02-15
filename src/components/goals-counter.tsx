import { observer } from 'mobx-react-lite';
import { useSimulationsContext } from '../hooks';
import { getTotalGoals } from '../utils';

const GoalsCounter = () => {
  const { matches } = useSimulationsContext();

  return <div>Goals: {getTotalGoals(matches)}</div>;
};

export default observer(GoalsCounter);
