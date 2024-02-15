import { observer } from 'mobx-react-lite';
import { useSimulationsContext } from '../hooks';
import { Match } from '../types';

const countGoals = (matches: Match[]) =>
  matches.reduce((acc, curr) => acc + curr.goals.length, 0);

const GoalsCounter = () => {
  const { matches } = useSimulationsContext();

  return <div>{countGoals(matches)}</div>;
};

export default observer(GoalsCounter);
