import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'No screen was found!' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    Go back to Home Screen
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 24,
        color: '#fff',
    },
    button: {
        fontSize: 30,
        textDecorationLine: 'underline',
        color: '#fff',
    }
});
