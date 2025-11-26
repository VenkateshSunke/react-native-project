import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
    const [count, setCount] = React.useState(0);

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>React Native Test App</Text>
                <Text style={styles.headerSubtitle}>Testing Component Previews</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
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
        backgroundColor: '#F2F2F7',
    },
    header: {
        width: '100%',
        backgroundColor: '#5856D6',
        paddingVertical: 40,
        paddingHorizontal: 20,
        paddingTop: 60,
        alignItems: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        marginBottom: 10,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.9)',
    },
    scrollContent: {
        padding: 20,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        marginVertical: 10,
        width: '100%',
        maxWidth: 400,
        shadowColor: '#5856D6',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '700',
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
        padding: 16,
        borderRadius: 12,
        marginVertical: 6,
        alignItems: 'center',
    },
    buttonSecondary: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#5856D6',
    },
    buttonText: {
        color: '#fff',
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
        borderRadius: 12,
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