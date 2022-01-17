import React from 'react';
import {useState, useContext, useCallback} from 'react';
import {createContext} from 'react';
import {MoodOptionType, MoodOptionWithTimestamp} from './types';

type AppContextType = {
  moodList: MoodOptionWithTimestamp[];
  handleSelectedMood: (mood: MoodOptionType) => void;
};

const defaultValue = {
  moodList: [],
  handleSelectedMood: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);
export const useAppContext = () => useContext(AppContext);
export const AppProvider: React.FC = ({children}) => {
  const [moodList, setMoodList] = useState([]);

  const handleSelectedMood = useCallback(
    (mood: MoodOptionType) =>
      setMoodList(prev => [...prev, {mood, timestamp: Date.now()}]),
    [],
  );
  return (
    <AppContext.Provider value={{moodList, handleSelectedMood}}>
      {children}
    </AppContext.Provider>
  );
};
