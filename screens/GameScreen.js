import { View, Text, StyleSheet } from "react-native"


import Title from "../components/Title"

export default function GameScreen() {
    return (
        <View style={styles.GameScreenContainer}>
            <Title> Opponent's Guess </Title>
            <View>
                <Text>Higher Or Lower</Text>
            </View>

        </View>
    )

};

const styles = StyleSheet.create({
    GameScreenContainer: {
        flex: 1,
        padding: 24,
    },
    
})