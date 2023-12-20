import { useAppContext } from './context/AppContext';

import ResultsContainer from './components/ResultsContainer';
import SearchContainer from './components/SearchContainer';

import './App.css';

function App() {
  const { data } = useAppContext();

  return (
    <>
      <SearchContainer />
      <div className='rounded-lg border border-[#9BA9BD] w-[450px]'>
        {data.length > 0 ? (
          <ResultsContainer />
        ) : (
          <p>Error Fetching Data</p>
        )}
      </div>
    </>
  );
}

export default App;
