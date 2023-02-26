import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


import Title from "../components/Title"
import NumberComponent from "../components/NumberComponent";
import PrimaryButton from "../components/PrimaryButton";
import Card from '../components/Card';
import InstructionText from "../components/InstructionText";
import GuessLogItem from "../components/GuessLogItem";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);





    function generateRandomNumberBetween(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;

        if (randomNumber === exclude) {
            return generateRandomNumberBetween(min, max, exclude);
        } else {
            return randomNumber;
        }

    }

    function nextGuessHandler(direction) {



        if ((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)) {
            Alert.alert("Don't Lie", "You Know That Wrong....", [{ text: "sorry!", style: "cancel" }]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRandomNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        setGuessRounds(prevGuessRounds => [newRandomNumber,...prevGuessRounds]);

    }

     const guessRoundsLength = guessRounds.length;

    return (
        <View style={styles.GameScreenContainer}>
            <Title style={styles.title} > Opponent's Guess </Title>
            <NumberComponent>{currentGuess}</NumberComponent>
            <Card>
                <InstructionText>Higher Or Lower</InstructionText>
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} >
                            <Ionicons name='md-remove' size={24} color='white' />
                        </PrimaryButton>

                    </View>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")} >
                            <Ionicons name='md-add' size={24} color='white' />
                        </PrimaryButton>

                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
               
               <FlatList data={guessRounds} renderItem={(itemData)=> <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guessNumber={itemData.item} />}
               keyExtractor={(item) => item} />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    GameScreenContainer: {
        flex: 1,
        padding: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginVertical: 7
    },
    buttonContainer: {
        flex: 1
    },
    title: {
        marginTop: 15
    },
    listContainer: {
        flex: 1,
        padding: 16
    }


})