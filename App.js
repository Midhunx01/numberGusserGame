import { StyleSheet,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './screens/StartScreen';


export default function App() {
  return (
    <LinearGradient colors={['#A810D6', '#4512DB']} style={styles.rootContainer} >
      
      <StartScreen />
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
 

});
