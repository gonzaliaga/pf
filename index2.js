// Estructura de datos para las preguntas y las respuestas
const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["París", "Londres", "Roma"],
      correctAnswer: "París",
      //userAnswer: "París" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Inglaterra?",
      options: ["Madrid", "Londres", "Berlín"],
      correctAnswer: "Londres",
      //userAnswer: "Berlín" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la capital de España?",
      options: ["Madrid", "Barcelona", "Sevilla"],
      correctAnswer: "Madrid",
      //userAnswer: "Madrid" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Italia?",
      options: ["Milán", "Roma", "Nápoles"],
      correctAnswer: "Roma",
      //userAnswer: "Milán" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la capital de Alemania?",
      options: ["Hamburgo", "Berlín", "Múnich"],
      correctAnswer: "Berlín",
      //userAnswer: "Berlín" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Rusia?",
      options: ["Moscú", "San Petersburgo", "Sochi"],
      correctAnswer: "Moscú",
      //userAnswer: "San Petersburgo" // Respuesta incorrecta
    },
    {
      question: "¿Cuál es la capital de Japón?",
      options: ["Osaka", "Tokio", "Yokohama"],
      correctAnswer: "Tokio",
      //userAnswer: "Tokio" // Respuesta correcta
    },
    {
      question: "¿Cuál es la capital de Australia?",
      options: ["Sydney", "Melbourne", "Canberra"],
      correctAnswer: "Canberra",
      //userAnswer: "Sydney" // Respuesta incorrecta
    }
  ];
  // Definir la función isCorrectAnswer
const isCorrectAnswer = (question, answer) => answer === question.correctAnswer;

// Función para mostrar las preguntas en el HTML
const displayQuestions = () => {
    const quizContainer = document.getElementById('quiz');
    
    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      
      const questionTitle = document.createElement('h3');
      questionTitle.textContent = `${index + 1}. ${question.question}`;
      questionDiv.appendChild(questionTitle);
      const optionsList = document.createElement('ul');
      question.options.forEach(option => {
        const optionItem = document.createElement('li');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option;
        optionLabel.insertBefore(optionInput, optionLabel.firstChild); // Insertar el botón de radio antes del texto de la opción
        optionItem.appendChild(optionLabel);
        optionsList.appendChild(optionItem);
    });
      questionDiv.appendChild(optionsList);
      
      const submitButton = document.createElement('button');
      submitButton.textContent = 'Enviar respuesta';
      submitButton.addEventListener('click', () => {
        const selectedOption = questionDiv.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
          const userAnswer = selectedOption.value;
          if (isCorrectAnswer(question, userAnswer)) {
            alert('¡Respuesta correcta!');
          } else {
            alert(`Respuesta incorrecta. La respuesta correcta es ${question.correctAnswer}`);
          }
        } else {
          alert('Por favor, seleccione una respuesta.');
        }
      });
      questionDiv.appendChild(submitButton);
      
      quizContainer.appendChild(questionDiv);
    });
  };

  
  // Mostrar las preguntas en el HTML al cargar la página
  window.onload = displayQuestions;