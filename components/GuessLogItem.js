import { View, Text, StyleSheet } from "react-native";


export default function GuessLogItem({ roundNumber, guessNumber}) {
    return (
        <View style={styles.itemList}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent Guess: {guessNumber} </Text>
        </View>
    )
}


const styles =  StyleSheet.create({
    itemList: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        marginVertical: 8,
        backgroundColor: '#1F5CDF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
})