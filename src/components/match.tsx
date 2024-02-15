import { useEffect } from 'react';
import { useSimulationsContext } from '../hooks';
import { observer } from 'mobx-react-lite';

const SIMULATION_TIME = 9000;
const GOALS_INTERVAL = 2000;

type MatchProps = {
  matchIndex: number;
};

const Match = ({ matchIndex }: MatchProps) => {
  const { simulationId, matches, finishSimulation } = useSimulationsContext();
  // const [goals, setGoals] = useState<Goal[]>([]);

  const teams = [
    { name: matches[matchIndex].teamA },
    { name: matches[matchIndex].teamB },
  ];

  useEffect(() => {
    if (!simulationId) return;
    matches[matchIndex].goals = [];

    const intervalId = setInterval(() => {
      const goal = Math.random() < 0.5 ? 0 : 1;
      console.log('Goal for ' + teams[goal].name);

      matches[matchIndex].goals = [
        ...matches[matchIndex].goals,
        { team: teams[goal].name },
      ];
    }, GOALS_INTERVAL);

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      finishSimulation();
      console.log('Match done');
    }, SIMULATION_TIME);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [simulationId]);

  const countGoals = (team: string) =>
    matches[matchIndex].goals.filter((goal) => goal.team === team).length;

  return (
    <article className="flex w-60 flex-col gap-2">
      <section className="flex flex-col gap-2">
        <div className="flex justify-between gap-10">
          <div>
            {teams[0].name} vs {teams[1].name}
          </div>
          <div>
            {countGoals(teams[0].name)}:{countGoals(teams[1].name)}
          </div>
        </div>
      </section>
    </article>
  );
};

export default observer(Match);
