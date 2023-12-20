import { FC } from 'react';

import { useAppContext } from '../context/AppContext';

type TagProps = {
  tag: string;
};

const Tag: FC<TagProps> = ({ tag }) => {
  const { handleRemoveTag } = useAppContext();

  return (
    <>
      <li className='ml-1 bg-[#E2E8F0] py-1 px-2 rounded-lg text-[12px] flex items-center mb-1'>
        <p>{tag}</p>
        <div
          className='text-white rounded-md bg-[#94A3B8] ml-1 w-[18px] h-[18px] flex items-center justify-center cursor-pointer'
          onClick={() => handleRemoveTag(tag)}
        >
          X
        </div>
      </li>
    </>
  );
};

export default Tag;
