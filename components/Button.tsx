import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline';
    disabled?: boolean;
    style?: ViewStyle;
}

export default function Button({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    style
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                styles[variant],
                disabled && styles.disabled,
                style
            ]}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={0.7}
        >
            <Text style={[
                styles.text,
                variant === 'outline' && styles.outlineText,
                disabled && styles.disabledText
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#5856D6',
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#007AFF',
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    outlineText: {
        color: '#007AFF',
    },
    disabledText: {
        opacity: 0.7,
    },
});

