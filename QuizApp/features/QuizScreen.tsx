import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { questions } from './questions';
import { styles } from './styles';
import { Summary } from './SummaryScreen';


const QuizScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null))


  const handleAnswer = (index: number) => {
    const isSelected = selectedAnswers.includes(index);
    if (isSelected) {
      setSelectedAnswers(selectedAnswers.filter((answer) => answer !== index));
    } else {
      setSelectedAnswers([...selectedAnswers, index]);
    }
  };

  const renderOptions = () => {
    return questions[currentQuestionIndex].answers.map((answer, index) => {
      return (
        <View style={styles.optionButton}>
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(index)}
            style={[styles.optionsButton, {
              backgroundColor: selectedAnswers.includes(index)
                ? 'lightblue' : 'white',
            }]}
          >
            <Text style={{ fontSize: 16 }}>{answer}</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  const onPressRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers(new Array(questions.length).fill(null));
    setSelectedAnswers([])
  }

  const onPressNext = () => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    answers[currentQuestionIndex] = selectedAnswers.sort()
    setSelectedAnswers([])
  }

  const renderQuestion = () => {
    return (
      <View>
        <Text style={styles.question}>
          {questions[currentQuestionIndex].id}{'. '}
          {questions[currentQuestionIndex].question}</Text>
        {renderOptions()}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {currentQuestionIndex === questions.length ?
        <Summary answers={answers} onPressRestart={onPressRestart} /> :
        <>
          {renderQuestion()}
          <View style={styles.nextButton}>
            <Button color={'white'} title='Next' onPress={onPressNext} />
          </View>
        </>
      }
    </View>
  );
}

export default QuizScreen;