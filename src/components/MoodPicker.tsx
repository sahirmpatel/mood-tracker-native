const moodOptions: MoodOptionType[] = [
  {emoji: '👷‍♂️', description: 'productive'},
  {emoji: '🤔', description: 'pensive'},
  {emoji: '😊', description: 'happy'},
  {emoji: '🥳', description: 'celebratory'},
  {emoji: '😤', description: 'frustrated'},
];

import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {MoodOptionType} from '../types';
export const MoodPicker: React.FC = () => {
  const [selectedMood, setSeltectedMood] = useState<MoodOptionType>();
  return (
    <View style={styles.moodList}>
      {moodOptions.map(option => (
        <View>
          <Pressable
            onPress={() => {
              setSeltectedMood(option);
            }}
            style={[
              styles.moodItem,
              option.emoji == selectedMood?.emoji
                ? styles.selectedMoodItem
                : undefined,
            ]}>
            <Text style={styles.moodText}>{option.emoji}</Text>
          </Pressable>
          <Text style={styles.descriptionText}>
            {option.emoji === selectedMood?.emoji && option.description}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: '#454C73',
    borderColor: '#fff',
  },
  descriptionText: {
    color: '#454C73',
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
  },
});
