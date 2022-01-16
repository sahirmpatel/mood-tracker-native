import React from 'react';
import {useCallback} from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MoodPicker} from '../components/MoodPicker';
import {MoodOptionType} from '../types';
export const Home: React.FC = () => {
  const [MoodList, setMoodList] = useState([]);
  const handleList = useCallback((mood: MoodOptionType) =>
    setMoodList(prev => [...prev, {mood, timestamp: Date.now()}]),
  );
  return (
    <View style={styles.container}>
      <MoodPicker handleList={handleList} />
      {MoodList.map(mood => (
        <Text>
          {mood.mood.emoji}
          {new Date(mood.timestamp).toString()}
        </Text>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
