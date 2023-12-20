import { useAppContext } from '../context/AppContext';

const SearchInput = () => {
  const { searchTerm, handleInputChange } = useAppContext();

  return (
    <form className='w-full'>
      <input
        type='text'
        placeholder='Search'
        className='outline-none py-1 px-2 text-[12px] w-full'
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default SearchInput;
