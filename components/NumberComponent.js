import { Text, View, StyleSheet } from 'react-native';


export default function NumberComponent({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} >{children}</Text>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#ccc',
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    text: {
        color: '#ccc',
        fontSize: 36,
        fontWeight: 'bold'
    }
})