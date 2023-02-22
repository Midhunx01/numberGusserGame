import { useState } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();

  function onPickNumberHandler(choosenNumber) {
    setUserNumber(choosenNumber);
  }

  let screen = <StartScreen onPickNumber={onPickNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }



  return (
    <LinearGradient colors={['#A810D6', '#4512DB']} style={styles.rootContainer} >
      <SafeAreaView style={styles.rootContainer} >
        {screen}
      </SafeAreaView>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },


});
