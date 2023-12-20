import { ChangeEvent } from 'react';
import { TData } from './DataType';

export type TAppContext = {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  data: TData[];
  setData: React.Dispatch<React.SetStateAction<TData[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  filteredResults: TData[];
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRemoveTag: (tag: string) => void;
};
