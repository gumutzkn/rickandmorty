import { FC } from 'react';

import { TData } from '../types/DataType';
import { highlightedMatchingText } from '../utils/highlightText';

import { useAppContext } from '../context/AppContext';

type ResultProps = {
  result: TData;
  isLast: boolean;
};

const Result: FC<ResultProps> = ({ result, isLast }) => {
  const { tags, setTags, searchTerm } = useAppContext();
  const isChecked = tags.includes(result.name);

  const handleClick = () => {
    if (isChecked) {
      setTags((prevTags) =>
        prevTags.filter((tag) => tag !== result.name)
      );
    } else {
      setTags((prevTags) => [...prevTags, result.name]);
    }
  };

  return (
    <div
      id='result_container'
      className={`flex items-center cursor-pointer px-2 py-3 ${
        isLast ? '' : 'border-b'
      } border-[#9BA9BD]`}
      onClick={handleClick}
    >
      <div id='result_selected'>
        <input type='checkbox' checked={isChecked} />
      </div>
      <div
        id='result_img'
        className='relative overflow-hidden w-[50px] h-[50px] rounded-xl mx-3'
      >
        <img
          src={result.image}
          alt='rick'
          className='absolute left-0 top-0 w-full h-full'
        />
      </div>
      <div id='result'>
        <h3 id='result_title' className='text-[#4B596D]'>
          {highlightedMatchingText(result.name, searchTerm)}
        </h3>
        <p id='result_episodes' className='text-[#4B596D]'>
          {result.episode.length} Episodes
        </p>
      </div>
    </div>
  );
};

export default Result;
