import { View, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';


function StartScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType={'number-pad'}/>
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Conform</PrimaryButton>
        </View>
    )


}



export default StartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 20,
        padding: 16,
        backgroundColor: '#2827CC',
        borderRadius: 8,
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
        textAlign: 'center'
    }
})