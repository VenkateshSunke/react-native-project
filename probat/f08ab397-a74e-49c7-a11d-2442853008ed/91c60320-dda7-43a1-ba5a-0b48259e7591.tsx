import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [count, setCount] = React.useState(0);

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>React Native Test App</Text>
                <Text style={styles.subtitle}>Testing Component Previews</Text>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Counter Example</Text>
                    <Text style={styles.countText}>{count}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => setCount(count + 1)}
                    >
                        <Text style={styles.buttonText}>Increment</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonSecondary]}
                        onPress={() => setCount(0)}
                    >
                        <Text style={[styles.buttonText, styles.buttonTextSecondary]}>Reset</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Sample Components</Text>
                    <View style={styles.row}>
                        <View style={[styles.box, styles.boxBlue]} />
                        <View style={[styles.box, styles.boxGreen]} />
                        <View style={[styles.box, styles.boxRed]} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#111',
        marginTop: 40,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 30,
    },
    card: {
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E5EA',
        padding: 20,
        marginVertical: 10,
        width: '100%',
        maxWidth: 400,
        // Removed shadows for flat look
        elevation: 0,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    countText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#5856D6',
        textAlign: 'center',
        marginVertical: 20,
    },
    button: {
        backgroundColor: '#5856D6',
        padding: 15,
        borderRadius: 6,
        marginVertical: 5,
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#5856D6',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    buttonTextSecondary: {
        color: '#5856D6',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    box: {
        width: 60,
        height: 60,
        borderRadius: 4,
    },
    boxBlue: {
        backgroundColor: '#007AFF',
    },
    boxGreen: {
        backgroundColor: '#34C759',
    },
    boxRed: {
        backgroundColor: '#FF3B30',
    },
});