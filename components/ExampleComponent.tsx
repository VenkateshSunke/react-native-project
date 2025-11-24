import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Example React Native component for testing preview functionality
 * This component demonstrates common React Native patterns that can be previewed
 * using react-native-web in the browser.
 */
export default function ExampleComponent() {
    const [pressed, setPressed] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Example Component</Text>
            <Text style={styles.subtitle}>
                This is a test component for preview functionality
            </Text>

            <TouchableOpacity
                style={[styles.button, pressed && styles.buttonPressed]}
                onPress={() => setPressed(!pressed)}
                onPressIn={() => setPressed(true)}
                onPressOut={() => setPressed(false)}
            >
                <Text style={styles.buttonText}>
                    {pressed ? 'Pressed!' : 'Press Me'}
                </Text>
            </TouchableOpacity>

            <View style={styles.infoBox}>
                <Text style={styles.infoText}>
                    This component uses:
                </Text>
                <Text style={styles.infoItem}>• View</Text>
                <Text style={styles.infoItem}>• Text</Text>
                <Text style={styles.infoItem}>• TouchableOpacity</Text>
                <Text style={styles.infoItem}>• StyleSheet</Text>
                <Text style={styles.infoItem}>• useState hook</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginBottom: 30,
        minWidth: 150,
        alignItems: 'center',
    },
    buttonPressed: {
        backgroundColor: '#0051D5',
        transform: [{ scale: 0.95 }],
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    infoBox: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 8,
        width: '100%',
        maxWidth: 300,
    },
    infoText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    infoItem: {
        fontSize: 14,
        color: '#666',
        marginVertical: 4,
    },
});

