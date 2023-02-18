import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { questions } from "./questions";
import { styles } from "./styles";



export const Summary = (props) => {
    const { answers, onPressRestart } = props
    let score = 0;
    const summary = questions.map((question, index) => {
        let correct = false;
        if (question.type === 'multiple') {
            correct = answers[index].length > 0 && question.correctAnswers.every((option: any) => answers[index] && answers[index].includes(option))
        } else if (question.type === 'multiple-optional') {
            correct = answers[index].every((option: any) => question.correctAnswers.includes(option))
                && question.correctAnswers[0] === answers[index][0];
        } else {
            correct = answers[index].length > 0 && answers[index].every((option: any) => question.correctAnswers.includes(option));
        }
        if (correct) {
            score += answers[index].length;
        }

        return (
            <View key={index} style={styles.summaryItem}>
                <Text style={[styles.question, correct ? styles.correct : styles.incorrect]}>
                    {index + 1}. {question.question}
                </Text>
                <View style={styles.answerContainer}>
                    <Text style={styles.answer}>Your answer: </Text>
                    <Text style={styles.answers}>
                        {answers[index].length > 0 ?
                            answers[index].reduce((accumulator, currentValue) =>
                                accumulator + question.answers[currentValue] + "\n", '')
                            : ' No answer provided'}
                    </Text>
                </View>
                <View style={styles.answerContainer}>
                    <Text style={styles.answer}>Correct answer: </Text>
                    <Text style={styles.answers}>
                        {question.correctAnswers.reduce((accumulator, currentValue) =>
                            accumulator + question.answers[currentValue] + "\n", '')}
                    </Text>
                </View>
            </View>
        );
    });

    return (
        <ScrollView style={styles.summary}>
            <Text style={styles.summaryHeading}>Summary</Text>
            <Text style={styles.score}>Your score: {score} / 8</Text>
            {summary}
            <View style={styles.nextButton}>
                <Button
                    title="Restart Quiz"
                    color={'white'}
                    onPress={onPressRestart}
                />
            </View>
        </ScrollView>
    );
};