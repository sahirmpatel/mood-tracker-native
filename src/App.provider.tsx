import React from 'react';
import {useState, useContext, useCallback} from 'react';
import {useEffect} from 'react';
import {createContext} from 'react';
import {Pressable} from 'react-native';
import {MoodOptionType, MoodOptionWithTimestamp} from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';

const storageKey = 'my-app-data';

type AppData = {
  moods: MoodOptionWithTimestamp[];
};

const getAppData = async (): Promise<AppData | null> => {
  try {
    const data = await AsyncStorage.getItem(storageKey);

    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch {
    return null;
  }
};

const setAppData = async (newData: AppData) => {
  try {
    await AsyncStorage.setItem(storageKey, JSON.stringify(newData));
  } catch {}
};

// context

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

  const handleSelectedMood = useCallback((mood: MoodOptionType) => {
    setMoodList(current => {
      const newValue = [...current, {mood, timestamp: Date.now()}];
      setAppData({moods: newValue});
      return newValue;
    });
  }, []);

  useEffect(() => {
    const getDataFromStorage = async () => {
      const data = await getAppData();

      if (data) {
        setMoodList(data.moods);
      }
    };
    getDataFromStorage();
  }, []);

  return (
    <AppContext.Provider value={{moodList, handleSelectedMood}}>
      {children}
    </AppContext.Provider>
  );
};
