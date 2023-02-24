import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native"


import Title from "../components/Title"
import NumberComponent from "../components/NumberComponent";
import PrimaryButton from "../components/PrimaryButton";
import Card from '../components/Card';
import InstructionText from "../components/InstructionText";

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomNumberBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);


    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }},[currentGuess, userNumber, onGameOver]);





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

    }

    return (
        <View style={styles.GameScreenContainer}>
            <Title> Opponent's Guess </Title>
            <NumberComponent>{currentGuess}</NumberComponent>
            <Card>
                <InstructionText>Higher Or Lower</InstructionText>
            <View>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")} >+</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")} >-</PrimaryButton>
            </View>
            </Card>
        </View>
    )

};

const styles = StyleSheet.create({
    GameScreenContainer: {
        flex: 1,
        padding: 24,
    },

})