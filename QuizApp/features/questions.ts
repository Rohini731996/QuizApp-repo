export const questions = [
    {
      id: 1,
      question: 'How many bits are in a byte?',
      type: 'single',
      options: ['1', '2', '4', '8'],
      answer: '8',
    },
    {
      id: 2,
      question: 'What is H2O?',
      type: 'single',
      options: ['Water', 'Oxygen', 'Hydrogen', 'Carbon'],
      answer: 'Water',
    },
    {
      id: 3,
      question: 'What does H2O include? (multiple)',
      type: 'multiple',
      options: ['Hydrogen', 'Oxygen', 'Palladium', 'Carbon'],
      answer: ['Hydrogen','Oxygen'],
    },
    {
      id: 4,
      question: 'Where is an Eiffel Tower? (multiple)',
      type: 'multiple-optional',
      options: ['Paris', 'Berlin', 'London', 'Tokyo', 'Las Vegas'],
      answer: ['Paris', 'Tokyo', 'Las Vegas']
    },
    {
      id: 5,
      question: 'Who discovered that the earth revolves around the sun?',
      type: 'single',
      options: ['Galileo Galilei', 'Isaac Newton', 'Johannes Kepler', 'Nicolaus Copernicus'],
      answer: 'Nicolaus Copernicus',
    },
  ];
  