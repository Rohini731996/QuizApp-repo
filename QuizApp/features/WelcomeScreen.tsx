import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen(props) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Quiz!</Text>
            <Button
                title="Start Quiz"
                onPress={() => props.navigation.navigate("Quiz")}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});