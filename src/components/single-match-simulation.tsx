import { useEffect, useRef } from 'react';
import { useSimulationsContext } from '../hooks';
import { observer } from 'mobx-react-lite';
import { Match } from '../types';
import { getRandomGoal } from '../utils';

const SIMULATION_TIME = 90000;
const GOALS_INTERVAL = 10000;

type Props = {
  match: Match;
  simulationId: string;
};

const SingleMatchSimulation = ({ match, simulationId }: Props) => {
  const { finishSimulation, addGoal, state } = useSimulationsContext();
  const intervalId = useRef(0);
  const timeoutId = useRef(0);

  useEffect(() => {
    if (!simulationId) return;

    intervalId.current = setInterval(() => {
      const goal = getRandomGoal([match.teamA, match.teamB]);
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

  const teamAgoals = match.goals.filter(
    (goal) => goal.team.name === match.teamA.name,
  );
  const teamBgoals = match.goals.filter(
    (goal) => goal.team.name === match.teamB.name,
  );

  return (
    <article className="flex w-60 flex-col gap-2">
      <section className="flex flex-col gap-2">
        <div className="flex justify-between gap-10">
          <div>
            {match.teamA.name} vs {match.teamB.name}
          </div>
          <div>
            {teamAgoals.length}:{teamBgoals.length}
          </div>
        </div>
      </section>
    </article>
  );
};

export default observer(SingleMatchSimulation);
