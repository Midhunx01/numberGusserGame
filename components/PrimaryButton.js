import { StyleSheet, Text, View, Pressable } from "react-native";


function onPressHandler() {
    console.log("Button Pressed");
}

function PrimaryButton({ children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPressHandler}
                android_ripple={{ color: '#2827CC' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>

        </View>

    )


}

export default PrimaryButton;


const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#1F5CDF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    pressed: {
        opacity: 0.75
    }
})