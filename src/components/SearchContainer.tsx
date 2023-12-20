import { useAppContext } from '../context/AppContext';

import SearchInput from './SearchInput';
import Tag from './Tag';

const SearchContainer = () => {
  const { tags } = useAppContext();

  return (
    <div
      id='search_container'
      className='mb-4 flex w-[450px] p-1 rounded-lg border border-[#9BA9BD]'
    >
      <div className='flex flex-wrap overflow-hidden w-full'>
        <ul id='tags' className='flex flex-wrap'>
          {tags.length > 0 ? (
            tags.map((tag, index) => <Tag tag={tag} key={index} />)
          ) : (
            <></>
          )}
        </ul>
        <SearchInput />
      </div>
    </div>
  );
};

export default SearchContainer;
