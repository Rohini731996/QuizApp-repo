import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { questions } from './questions';
import Checkbox from 'expo-checkbox';


export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  var multiple_value = []
  const handleAnswer = (answer: string, index: number) => {
    const newAnswers = [...answers];
    if (questions[currentQuestion].type === 'multiple') {
      if (!multiple_value.includes(questions[currentQuestion].options[index])) {
        multiple_value.push(questions[currentQuestion].options[index])
      }

      console.log(" [questions[currentQuestion].options[index]]---", multiple_value)
      newAnswers[currentQuestion] = [questions[currentQuestion].options[index]];
    } else if (questions[currentQuestion].type === 'multiple-optional') {
      newAnswers[currentQuestion] = [questions[currentQuestion].options[index]];
    }
    else {
      newAnswers[currentQuestion] = questions[currentQuestion].options[index];
    }
    setAnswers(newAnswers);
  };

  const renderOptions = () => {
    return questions[currentQuestion].options.map((option, index) => {
      return (
        <View style={styles.optionButton}>
          <Button
            key={index}
            title={option}
            onPress={() => handleAnswer(option, index)}
          />
          {/* <Checkbox
            key={index}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setCheckbox(index)}
          /> */}
        </View>
      );
    });
  };

  // const setCheckbox=(index)=>{

  //   const updatedCheckedState = toggleCheckBox.map((item, index) =>
  //   index === position ? !item : item
  // );
  // }


  const onPressNext = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  const renderQuestion = () => {
    return (
      <View>
        <Text style={styles.question}>{questions[currentQuestion].id}{'. '}
          {questions[currentQuestion].question}</Text>
        {renderOptions()}
      </View>
    );
  };

  const renderSummary = () => {
    let score = 0;
    const summary = questions.map((question, index) => {
      let correct = false;
      if (question.type === 'multiple') {
        correct = JSON.stringify(question.answer) === JSON.stringify(answers[index]);
      } else if (question.type === 'multiple-optional') {
        correct = question.answer.every((option: any) => answers[index] && answers[index].includes(option));
      } else {
        correct = question.answer === answers[index];
      }

      if (correct) {
        score += 1;
      }

      return (
        <View key={index} style={styles.summaryItem}>
          <Text style={[styles.question, correct ? styles.correct : styles.incorrect]}>
            {index + 1}. {question.question}
          </Text>
          <Text style={styles.answer}>
            Your answer: {answers[index] ? answers[index] : 'No answer provided'}
          </Text>
          <Text style={styles.answer}>
            Correct answer: {question.answer}
          </Text>
        </View>
      );
    });

    return (
      <View style={styles.summary}>
        <Text style={styles.summaryHeading}>Summary</Text>
        <Text style={styles.score}>Your score: {score} / 5</Text>
        {summary}
        <Button
          title="Restart Quiz"
          onPress={() => {
            setCurrentQuestion(0);
            setAnswers(new Array(questions.length).fill(null));
          }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {currentQuestion === questions.length ? renderSummary() :
        <>
          {renderQuestion()}
          <View style={styles.nextButton}>
            <Button color={'white'} title='Next' onPress={onPressNext} />
          </View>
        </>}
    </View>
  );
}

const styles = StyleSheet.create({
  optionButton: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 8
  },
  nextButton: {
    backgroundColor: '#2196F3',
    alignSelf: 'center',
    width: 150,
    top: 80
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
    marginBottom: 5,
  },
  correct: {
    color: 'green',
  },
  incorrect: {
    color: 'red',
  },
  summary: {
    alignItems: 'center',
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
