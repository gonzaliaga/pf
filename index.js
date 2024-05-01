// Estructura de datos para las preguntas y las respuestas
const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["París", "Londres", "Roma"],
      correctAnswer: "París",
      userAnswer: "París" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Inglaterra?",
      options: ["Madrid", "Londres", "Berlín"],
      correctAnswer: "Londres",
      userAnswer: "Berlín" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la capital de España?",
      options: ["Madrid", "Barcelona", "Sevilla"],
      correctAnswer: "Madrid",
      userAnswer: "Madrid" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Italia?",
      options: ["Milán", "Roma", "Nápoles"],
      correctAnswer: "Roma",
      userAnswer: "Milán" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la capital de Alemania?",
      options: ["Hamburgo", "Berlín", "Múnich"],
      correctAnswer: "Berlín",
      userAnswer: "Berlín" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Rusia?",
      options: ["Moscú", "San Petersburgo", "Sochi"],
      correctAnswer: "Moscú",
      userAnswer: "San Petersburgo" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la capital de Japón?",
      options: ["Osaka", "Tokio", "Yokohama"],
      correctAnswer: "Tokio",
      userAnswer: "Tokio" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Australia?",
      options: ["Sydney", "Melbourne", "Canberra"],
      correctAnswer: "Canberra",
      userAnswer: "Sydney" // Respuesta incorrecta
    }
  ];
  
  // Función para determinar si la respuesta es correcta
  const isCorrectAnswer = (question, answer) => answer === question.correctAnswer;
  
  // Función para mostrar la pregunta y la respuesta del usuario
  const displayQuestion = (question) => {
    console.log(question.question);
    const userAnswer = question.userAnswer;
    if (isCorrectAnswer(question, userAnswer)) {
      console.log("¡Correcto!");
    } else {
      console.log(`Incorrecto. La respuesta correcta es ${question.correctAnswer}`);
    }
  };
  
  // Mostrar cada pregunta y respuesta del usuario
  questions.forEach(displayQuestion);
  