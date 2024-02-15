import { useEffect, useRef } from 'react';
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
  const { finishSimulation, addGoal, state } = useSimulationsContext();
  const intervalId = useRef(0);
  const timeoutId = useRef(0);

  const teams = [match.teamA, match.teamB];

  useEffect(() => {
    if (!simulationId) return;

    intervalId.current = setInterval(() => {
      const goal = getRandomGoal(teams);
      addGoal(match.id, goal);
    }, GOALS_INTERVAL);

    timeoutId.current = setTimeout(() => {
      clearInterval(intervalId.current);
      finishSimulation();
    }, SIMULATION_TIME);

    return () => {
      clearTimeout(timeoutId.current);
      clearInterval(intervalId.current);
    };
  }, [simulationId]);

  useEffect(() => {
    if (state === 'done') {
      clearTimeout(timeoutId.current);
      clearInterval(intervalId.current);
    }
  }, [state]);

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
