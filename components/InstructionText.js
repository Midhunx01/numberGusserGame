import { Text, StyleSheet } from "react-native"

export default function instructionText ({children}) {
    return (
        <Text style={styles.instructionText} >{children}</Text>
    )
};


const styles = StyleSheet.create({
    instructionText: {
        color: 'yellow',
        fontSize: 21,
    },
})