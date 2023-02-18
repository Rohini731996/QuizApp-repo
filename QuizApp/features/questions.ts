export const questions = [
  {
    id: 1,
    question: 'How many bits are in a byte?',
    type: 'single',
    answers: ['1', '2', '4', '8'],
    correctAnswers: [3],
  },
  {
    id: 2,
    question: 'What is H2O?',
    type: 'single',
    answers: ['Water', 'Oxygen', 'Hydrogen', 'Carbon'],
    correctAnswers: [0],
  },
  {
    id: 3,
    question: 'What does H2O include? (multiple)',
    type: 'multiple',
    answers: ['Hydrogen', 'Oxygen', 'Palladium', 'Carbon'],
    correctAnswers: [0, 1],
  },
  {
    id: 4,
    question: 'Where is an Eiffel Tower? (multiple)',
    type: 'multiple-optional',
    answers: ['Paris', 'Berlin', 'London', 'Tokyo', 'Las Vegas'],
    correctAnswers: [0, 3, 4]
  },
  {
    id: 5,
    question: 'Who discovered that the earth revolves around the sun?',
    type: 'single',
    answers: ['Galileo Galilei', 'Isaac Newton', 'Johannes Kepler', 'Nicolaus Copernicus'],
    correctAnswers: [3],
  },
];
