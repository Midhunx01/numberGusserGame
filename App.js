import { useState } from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true)

  function onPickNumberHandler(choosenNumber) {
    setUserNumber(choosenNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartScreen onPickNumber={onPickNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber ) {
    screen = <GameOverScreen/>
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
