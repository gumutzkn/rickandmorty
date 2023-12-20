import { useAppContext } from '../context/AppContext';

import Result from './Result';

const ResultsContainer = () => {
  const { filteredResults } = useAppContext();

  return (
    <div
      id='results_container'
      className='w-full overflow-y-scroll max-h-[447px]'
    >
      {filteredResults.length > 0 ? (
        filteredResults.map((result, index) => (
          <Result
            key={index}
            result={result}
            isLast={index === filteredResults.length - 1}
          />
        ))
      ) : (
        <p className='p-2'>No Results</p>
      )}
    </div>
  );
};

export default ResultsContainer;
