import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    optionButton: {
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 8
    },
    answerContainer: {
        flexDirection: 'row'
    },
    answers: {
        marginTop: 2
    },
    nextButton: {
        backgroundColor: '#2196F3',
        alignSelf: 'center',
        width: 150,
        top: 50,
        marginBottom: 100
    },
    optionsButton: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        padding: 20,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    summaryItem: {
        marginBottom: 10,
    },
    answer: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    correct: {
        color: 'green',
    },
    incorrect: {
        color: 'red',
    },
    summary: {
        flex: 1
    },
    summaryHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
