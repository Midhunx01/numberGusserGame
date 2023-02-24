import { View, StyleSheet } from "react-native";

export default function Card ({ children }) {
    return (
        <View style={styles.inputContainer}>{children}</View>
        
    )

};


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
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
})