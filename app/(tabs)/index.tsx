import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.helloWorld}>Hello World</Text>
            <Text style={styles.otherText}>Thank you for considering me for this opportunity!</Text>
            <Text style={styles.otherText}>Use the navigation tab below to navigate to the Image Picker page.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    helloWorld: {
        fontSize: 36,
        color: '#fff',
    },
    otherText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        margin: 10,
    },
    button: {
        fontSize: 30,
        textDecorationLine: 'underline',
        color: '#fff',
    }
});
