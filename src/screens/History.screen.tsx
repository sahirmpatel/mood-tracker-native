import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppContext} from '../App.provider';

import {MoodItemRow} from '../components/MoodItemRow';
export const History: React.FC = () => {
  let {moodList, handleSelectedMood} = useAppContext();
  return (
    <View style={styles.container}>
      {moodList.map(mood => (
        <MoodItemRow mood={mood} key={mood.timestamp} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
