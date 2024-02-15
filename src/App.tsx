import './App.css';
import Match from './components/match.tsx';
import { SimulationsContext } from './contexts';
import SimulationsStore from './stores/domain-stores/simulations-store.ts';
import SimulationButton from './components/simulation-button.tsx';
import GoalsCounter from './components/goals-counter.tsx';

function App() {
  return (
    <SimulationsContext.Provider value={new SimulationsStore()}>
      <main className="container flex h-full flex-col items-center justify-center">
        <div className="flex flex-col gap-2 border border-black px-16 py-3">
          <header>Katar 2023</header>
          <section>
            <SimulationButton />
          </section>
          <section className="flex flex-col gap-2">
            <Match matchIndex={0} />
            <Match matchIndex={1} />
            <Match matchIndex={2} />
          </section>
          <section className="flex justify-end text-xs font-semibold text-gray-500">
            <GoalsCounter />
          </section>
        </div>
      </main>
    </SimulationsContext.Provider>
  );
}

export default App;
