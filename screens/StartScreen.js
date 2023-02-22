import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert } from 'react-native';


import PrimaryButton from '../components/PrimaryButton';


function StartScreen() {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    };

    function confirmInputHandler() {
        const choosenNumber = parseInt(enteredNumber);

        if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number','Enter a number less than 99 and greater than 0', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        
        }
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType={'number-pad'} value={enteredNumber}
                onChangeText={numberInputHandler} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton  onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>

        </View>
    )


}



export default StartScreen;

const styles = StyleSheet.create({
    inputContainer: {

        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: '#2827CC',
        borderRadius: 14,
        elevation: 4,
        shadowColor: 'black',
        shadowRadius: 8,
        ShadowOffset: { width: 5, height: 20 },
        shadowOpacity: 0.25,
    },
    textInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        fontWeight: 'bold',
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})