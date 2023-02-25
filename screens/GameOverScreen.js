import { View, Image, Text, StyleSheet } from 'react-native';


import PrimaryButton from '../components/PrimaryButton';
import Title from '../components/Title';



export default function GameOverScreen({ userNumber , gameRounds, onGameOver}) {

    return (

        <View style={styles.rootContainer} >
            <Title>Game Over!</Title>
            <View style={styles.imageContainer} >
                <Image style={styles.imageStyle} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryTextContainer} >
                Your Phone needed <Text style={styles.summaryText} > {gameRounds} </Text> rounds to guess the number <Text style={styles.summaryText} > {userNumber} </Text>
            </Text>
            <PrimaryButton onPress={onGameOver}>Start New Game</PrimaryButton>
        </View>

    )

}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        marginVertical: 20,
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: '#ccc',
        overflow: 'hidden',
        borderWidth: 2,
        
    },
    imageStyle: {
        height: '100%',
        width: '100%'
    },
    summaryTextContainer: {
        fontSize: 20,
        textAlign: 'center',
        color: "#ccc",
        marginBottom: 20
    },
    summaryText: {
        color: 'white'
    }
})