import { useEffect } from 'react';
import { useSimulationsContext } from '../hooks';
import { observer } from 'mobx-react-lite';
import { Match } from '../types';
import { getGoalsForTeam, getRandomGoal } from '../utils';

const SIMULATION_TIME = 9000;
const GOALS_INTERVAL = 2000;

type Props = {
  match: Match;
  simulationId: string;
};

const SingleMatchSimulation = ({ match, simulationId }: Props) => {
  const { finishSimulation, addGoal, resetGoals } = useSimulationsContext();

  const teams = [{ name: match.teamA }, { name: match.teamB }];

  useEffect(() => {
    if (!simulationId) return;
    resetGoals(match.id);

    const intervalId = setInterval(() => {
      const goal = getRandomGoal(teams);
      addGoal(match.id, goal);
    }, GOALS_INTERVAL);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      finishSimulation();
    }, SIMULATION_TIME);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [simulationId]);

  return (
    <article className="flex w-60 flex-col gap-2">
      <section className="flex flex-col gap-2">
        <div className="flex justify-between gap-10">
          <div>
            {teams[0].name} vs {teams[1].name}
          </div>
          <div>
            {getGoalsForTeam(match, teams[0].name)}:
            {getGoalsForTeam(match, teams[1].name)}
          </div>
        </div>
      </section>
    </article>
  );
};

export default observer(SingleMatchSimulation);
