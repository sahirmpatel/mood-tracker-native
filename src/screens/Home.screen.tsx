import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MoodPicker} from '../components/MoodPicker';
import {useAppContext} from '../App.provider';
export const Home: React.FC = () => {
  let {moodList, handleSelectedMood} = useAppContext();
  // const [MoodList, setMoodList] = useState([]);
  return (
    <View style={styles.container}>
      <MoodPicker handleList={handleSelectedMood} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
