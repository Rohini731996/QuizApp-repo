import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WelcomeScreen = (props) => {

    const [text, onChangeText] = useState('')

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Quiz!</Text>
            <TextInput
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 0.5,
                    padding: 10,
                }}
                value={text}
                onChangeText={onChangeText}
                placeholder='Enter your name'
            />
            <Button
                title="Start Quiz"
                disabled={!(text !== '')}
                onPress={() => props.navigation.navigate("Quiz")}
            />
        </View>
    );
}

export default WelcomeScreen;

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