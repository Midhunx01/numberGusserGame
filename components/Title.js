import { Text, StyleSheet } from "react-native"


export default function Title({ children, style }) {
    return (
        <Text style={[styles.titleText, style]}>{children}</Text>
    )


};


const styles = StyleSheet.create({
    titleText: {

        fontSize: 24,
        fontWeight: 'bold',
        color: '#ccc',
        borderWidth: 1,
        borderColor: '#ccc',
        textAlign: 'center',
        padding: 8,
        borderRadius: 10,
    }
})