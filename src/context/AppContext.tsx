import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
  ChangeEvent,
} from 'react';

import { TData } from '../types/DataType';
import { TAppContext } from '../types/AppContextType';

export const AppContext = createContext<TAppContext | null>(null);

type AppContextProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppContextProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [data, setData] = useState<TData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();

        setData(data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const filteredResults = data.filter((result) =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  const contextValue: TAppContext = {
    tags,
    setTags,
    data,
    setData,
    searchTerm,
    setSearchTerm,
    isChecked,
    setIsChecked,
    filteredResults,
    handleInputChange,
    handleRemoveTag,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): TAppContext => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      'useAppContext must be used within an AppProvider'
    );
  }
  return context;
};
