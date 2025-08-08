const promotionsData = {
    "Cashback USDT": {
    },
    "Mega Check-in 10 Dias": {
    },
    "Chuva de Envelopes Premiados!": {
    },
    "Clube VIP VOJ8": {
    },
    "Evento: ¡Feliz Cumpleaños!": {
        questions: [
            { question: "¿Cuál es el rollover para el bono de cumpleaños?", options: ["1x", "5x", "10x", "15x"], answer: "10x" }
        ],
        flashcards: [
            { front: "Rollover del bono", back: "10x" }
        ],
        fillInTheBlanks: []
    },
    "Festival de Prêmios PG": {
        questions: [
            { question: "Los jugadores sorteados reciben un premio de...", options: ["R$10", "R$25", "R$50", "R$100"], answer: "R$50" }
        ],
        flashcards: [
            { front: "Valor del premio", back: "R$50" }
        ],
        fillInTheBlanks: []
    },
    "Momento de Compartilhar": {
        questions: [
            { question: "¿Qué se debe enviar al admin de Telegram para recibir el premio?", options: ["El link", "Un print + ID de usuario", "Solo el ID", "El nombre del perfil"], answer: "Un print + ID de usuario" }
        ],
        flashcards: [
            { front: "Recompensa máxima", back: "R$10 (una vez por red social)" }
        ],
        fillInTheBlanks: []
    },
    "Código Premiado VOJ8": {
        questions: [
            { question: "¿Qué se debe enviar al admin para reclamar el premio?", options: ["El código", "Un video", "El print de la apuesta", "El ID de la apuesta"], answer: "El print de la apuesta" }
        ],
        flashcards: [
            { front: "Premio por acertar 4 números finales", back: "R$88" },
            { front: "Premio máximo (6 números)", back: "R$888" },
            { front: "Requisito para participar", back: "Ser miembro del grupo de Telegram" }
        ],
        fillInTheBlanks: [
            { text: "Si todos los números de tu código coinciden, el premio máximo es de R$__.", answer: "888" }
        ]
    },
    "Bônus Grátis: Ovo de Ouro da Sorte": {
        questions: [
            { question: "¿Cuál es el premio máximo que se puede ganar?", options: ["R$88", "R$188", "R$1.088", "R$8.888"], answer: "R$1.088" },
            { question: "¿Qué dos acciones son necesarias para obtener el bono?", options: ["Depositar y apostar", "Vincular email y confirmar teléfono", "Seguir en redes y compartir", "Ser VIP y unirse al grupo"], answer: "Vincular email y confirmar teléfono" },
            { question: "¿Qué pasa si el bono no se rescata el mismo día?", options: ["Se reduce a la mitad", "Desaparece de la cuenta", "Se puede reclamar al día siguiente", "Se convierte en giros gratis"], answer: "Desaparece de la cuenta" }
        ],
        flashcards: [
            { front: "Premio máximo del Ovo de Ouro", back: "R$1.088" },
            { front: "Requisitos de activación", back: "Vincular email y confirmar teléfono" },
            { front: "Condición de tiempo", back: "Debe ser rescatado en el mismo día" }
        ],
        fillInTheBlanks: [
            { text: "Este bônus só pode ser resgatado uma vez que a __ for vinculada.", answer: "conta" }
        ]
    },
    "Bônus de 1º Depósito + Roda da Fortuna": {
        questions: [
            { question: "¿Cuál es el porcentaje de bono en el primer depósito?", options: ["50%", "100%", "150%", "200%"], answer: "100%" },
            { question: "¿Cuál es el bono máximo que se puede recibir?", options: ["R$500", "R$1.000", "R$1.500", "R$2.000"], answer: "R$1.000" },
            { question: "Además del bono, ¿qué otro premio se recibe?", options: ["Cashback", "Un sobre premiado", "Un giro en la Roda da Fortuna", "Puntos VIP"], answer: "Un giro en la Roda da Fortuna" }
        ],
        flashcards: [
            { front: "Porcentaje de bono 1er depósito", back: "100%" },
            { front: "Bono máximo 1er depósito", back: "R$1.000" },
            { front: "Premio extra", back: "Giro en la Roda da Fortuna" }
        ],
        fillInTheBlanks: [
            { text: "El rollover para el bono de primer depósito es de __x el valor del bono.", answer: "15" }
        ]
    },
    "Promoção da Sorte VOJ8: OVO PREMIADO 777": {
        questions: [
            { question: "¿Cuál es el rango del premio que se puede ganar?", options: ["R$7 a R$77", "R$7 a R$777", "R$77 a R$777", "R$1 a R$777"], answer: "R$7 a R$777" },
            { question: "¿Qué se debe hacer para participar, además de depositar?", options: ["Contactar a soporte", "Enviar un email a promosvoj8@gmail.com", "Publicar en redes sociales", "Jugar en un slot específico"], answer: "Enviar un email a promosvoj8@gmail.com" },
            { question: "¿Cuál es el depósito mínimo diario para participar?", options: ["R$10", "R$20", "R$30", "R$50"], answer: "R$30" }
        ],
        flashcards: [
            { front: "Rango del premio", back: "R$7 a R$777" },
            { front: "Acción requerida", back: "Enviar email a promosvoj8@gmail.com" },
            { front: "Depósito mínimo diario", back: "R$30" }
        ],
        fillInTheBlanks: [
            { text: "El requisito de apuesta es de apenas __x el valor del bono recibido.", answer: "1" }
        ]
    },
    "Super Programa de Indicação": {
        questions: [
            { question: "Si un indicado deposita R$20, ¿qué bono recibes?", options: ["R$5", "R$10", "R$15", "R$20"], answer: "R$10" },
            { question: "¿Hasta qué nivel de tu red recibes comisiones?", options: ["Solo directos", "Hasta el segundo nivel", "Hasta el tercer nivel", "No hay comisiones por nivel"], answer: "Hasta el segundo nivel" },
            { question: "¿Cuál es la comisión sobre 'Slots & Pesca' de tus indicados de Nivel 1?", options: ["0.10%", "0.30%", "0.50%", "1.00%"], answer: "0.50%" }
        ],
        flashcards: [
            { front: "Bono por indicación (depósito R$20)", back: "R$10" },
            { front: "Niveles de comisión", back: "Hasta el segundo nivel" },
            { front: "Comisión Nivel 2 en Esporte", back: "0,06%" }
        ],
        fillInTheBlanks: [
            { text: "Reciba comisiones __ hasta el segundo nivel da sua rede.", answer: "vitalícias" }
        ]
    }
};

const promotionDisplayNames = {
    "Bônus Diário de 10%": "Bono Diario del 10%",
    "Bônus de Segundo Depósito": "Bono de Segundo Depósito",
    "Bônus VOJ8 de Ganhos": "Bono de Ganancias",
    "Cashback Instantâneo": "Cashback Instantáneo",
    "Cashback Automático: Reembolso de 3%": "Cashback Automático 3%",
    "Cashback USDT": "Cashback con Cripto",
    "Mega Check-in 10 Dias": "Mega Check-in de 10 Días",
    "Chuva de Envelopes Premiados!": "Lluvia de Sobres Premiados",
    "Clube VIP VOJ8": "Club VIP",
    "Evento: ¡Feliz Cumpleaños!": "Bono de Cumpleaños",
    "Festival de Prêmios PG": "Festival de Premios PG",
    "Momento de Compartilhar": "Comparte y Gana",
    "Código Premiado VOJ8": "Código Premiado",
    "Bônus Grátis: Ovo de Ouro da Sorte": "Huevo de Oro de la Suerte",
    "Bônus de 1º Depósito + Roda da Fortuna": "Bono 1er Depósito + Rueda",
    "Promoção da Sorte VOJ8: OVO PREMIADO 777": "Sorteo OVO PREMIADO 777",
    "Super Programa de Indicação": "Programa de Indicación"
};

// --- STATE MANAGEMENT ---
let state = {
    currentView: 'menu', // 'menu', 'game'
    activePromotionKey: null,
    activeGameLevel: 0, // 1: MC, 2: Flashcards, 3: Fill-in-the-blank
    progress: {}, // { "promoKey": level_completed }
    gameData: {}
};

function initProgress() {
    const savedProgress = localStorage.getItem('voj8GameProgress');
    if (savedProgress) {
        state.progress = JSON.parse(savedProgress);
    } else {
        Object.keys(promotionDisplayNames).forEach(key => {
            state.progress[key] = 0; // Initially no level completed
        });
    }
}

function saveProgress() {
    localStorage.setItem('voj8GameProgress', JSON.stringify(state.progress));
}

// --- RENDER FUNCTIONS ---
const mainContent = document.getElementById('main-content');

function render() {
    mainContent.innerHTML = '';
    if (state.currentView === 'menu') {
        renderMenu();
    } else if (state.currentView === 'game') {
        renderGame();
    }
}

function renderMenu() {
    const promoKeys = Object.keys(promotionDisplayNames);
    const cardsHTML = promoKeys.map(key => {
        const displayName = promotionDisplayNames[key];
        const level = state.progress[key] || 0;
        const stars = '🌟'.repeat(level) + '☆'.repeat(3 - level);
        
        return `
            <div class="card p-4 flex flex-col justify-between text-center fade-in hover:shadow-lg hover:border-yellow-400">
                <div>
                    <h3 class="text-xl font-bold mb-2">${displayName}</h3>
                    <p class="text-4xl mb-4">${stars}</p>
                </div>
                <button onclick="selectPromotion('${key}')" class="btn btn-gold py-2 px-4 mt-2">Entrenar</button>
            </div>
        `;
    }).join('');

    mainContent.innerHTML = `
        <section id="promotion-menu">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ${cardsHTML}
            </div>
        </section>
    `;
}

function renderGame() {
    const gameContainer = document.createElement('div');
    gameContainer.className = 'fade-in';
    
    const displayName = promotionDisplayNames[state.activePromotionKey];
    const level = state.progress[state.activePromotionKey] || 0;
    const promoData = promotionsData[state.activePromotionKey] || {};
    const maxLevel = Object.keys(promoData).length;

    let gameSelectionHTML = '';
    const gameTypes = ['Opción Múltiple', 'Tarjetas de Memoria', 'Completar la Regla'];
    
    for (let i = 1; i <= maxLevel; i++) {
        const isUnlocked = i <= level + 1;
        const isCompleted = i <= level;
        gameSelectionHTML += `
            <button onclick="${isUnlocked ? `startGame(${i})` : ''}" 
                    class="btn p-4 w-full text-left ${isUnlocked ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 text-gray-500 cursor-not-allowed'}">
                <div class="flex justify-between items-center">
                    <span>Nivel ${i}: ${gameTypes[i-1]}</span>
                    <span class="text-2xl">${isCompleted ? '✅' : (isUnlocked ? '▶️' : '🔒')}</span>
                </div>
            </button>
        `;
    }

    gameContainer.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <button onclick="goToMenu()" class="btn bg-gray-700 text-white py-2 px-4 mb-6 hover:bg-gray-600">← Volver al Menú</button>
            <div class="card p-6 md:p-8">
                <h2 class="text-3xl font-bold mb-6 text-center text-yellow-400">${displayName}</h2>
                <div id="game-content" class="space-y-4">
                    ${state.activeGameLevel === 0 ? gameSelectionHTML : ''}
                </div>
            </div>
        </div>
    `;
    mainContent.appendChild(gameContainer);
    
    if (state.activeGameLevel > 0) {
        const gameContent = document.getElementById('game-content');
        if (state.activeGameLevel === 1) renderMultipleChoice(gameContent);
        if (state.activeGameLevel === 2) renderFlashcards(gameContent);
        if (state.activeGameLevel === 3) renderFillInTheBlank(gameContent);
    }
}

function renderMultipleChoice(container) {
    const { questions } = promotionsData[state.activePromotionKey];
    const { currentQuestionIndex = 0 } = state.gameData;
    
    if (currentQuestionIndex >= questions.length) {
        completeLevel();
        return;
    }

    const question = questions[currentQuestionIndex];
    const optionsHTML = question.options.map((opt, i) => `
        <button onclick="checkMultipleChoiceAnswer(this, '${opt}')" class="btn option-btn p-4 w-full text-left">${opt}</button>
    `).join('');

    container.innerHTML = `
        <p class="text-xl text-gray-300 mb-4">Pregunta ${currentQuestionIndex + 1} de ${questions.length}</p>
        <h3 class="text-2xl font-semibold mb-6">${question.question}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">${optionsHTML}</div>
    `;
}

function renderFlashcards(container) {
    const { flashcards } = promotionsData[state.activePromotionKey];
    const { currentCardIndex = 0 } = state.gameData;

    if (currentCardIndex >= flashcards.length) {
        completeLevel();
        return;
    }
    
    const card = flashcards[currentCardIndex];
    container.innerHTML = `
        <p class="text-xl text-gray-300 mb-4">Tarjeta ${currentCardIndex + 1} de ${flashcards.length}</p>
        <div class="flashcard-container h-64">
            <div id="flashcard" class="flashcard relative w-full h-full">
                <div class="flashcard-face absolute w-full h-full card flex items-center justify-center p-4 text-center bg-gray-800 border-2 border-yellow-400">
                    <h3 class="text-3xl font-bold">${card.front}</h3>
                </div>
                <div class="flashcard-back absolute w-full h-full card flex items-center justify-center p-4 text-center bg-yellow-400 text-black">
                    <p class="text-2xl font-semibold">${card.back}</p>
                </div>
            </div>
        </div>
        <div class="mt-6 flex justify-center gap-4">
            <button onclick="flipCard()" class="btn bg-gray-600 py-3 px-6">Revelar</button>
            <button onclick="nextFlashcard()" class="btn btn-gold py-3 px-6">Siguiente</button>
        </div>
    `;
}

function renderFillInTheBlank(container) {
    const { fillInTheBlanks } = promotionsData[state.activePromotionKey];
    const { currentQuestionIndex = 0 } = state.gameData;

    if (currentQuestionIndex >= fillInTheBlanks.length) {
        completeLevel();
        return;
    }

    const question = fillInTheBlanks[currentQuestionIndex];
    const questionText = question.text.replace('__', `<input type="text" id="blank-input" class="mx-2 p-2 rounded bg-gray-900 border-2 border-gray-600 focus:border-yellow-400 focus:outline-none text-center w-48">`);

    container.innerHTML = `
         <p class="text-xl text-gray-300 mb-4">Pregunta ${currentQuestionIndex + 1} de ${fillInTheBlanks.length}</p>
         <p class="text-2xl leading-relaxed text-center">${questionText}</p>
         <div id="fill-feedback" class="text-center text-xl font-bold mt-4 h-8"></div>
         <div class="mt-6 flex justify-center">
            <button onclick="checkFillInTheBlankAnswer()" class="btn btn-gold py-3 px-8">Comprobar</button>
         </div>
    `;
}

// --- GAME LOGIC & EVENT HANDLERS ---
function goToMenu() {
    state.currentView = 'menu';
    state.activePromotionKey = null;
    state.activeGameLevel = 0;
    render();
}

function selectPromotion(key) {
    state.currentView = 'game';
    state.activePromotionKey = key;
    state.activeGameLevel = 0;
    render();
}

function startGame(level) {
    state.activeGameLevel = level;
    state.gameData = {}; // Reset game data for the new level
    render();
}

function completeLevel() {
    if (state.progress[state.activePromotionKey] < state.activeGameLevel) {
        state.progress[state.activePromotionKey] = state.activeGameLevel;
    }
    saveProgress();
    state.activeGameLevel = 0; // Go back to level selection
    render();
}

// Multiple Choice Logic
function checkMultipleChoiceAnswer(button, selected) {
    const { questions } = promotionsData[state.activePromotionKey];
    const { currentQuestionIndex = 0 } = state.gameData;
    const correctAnswer = questions[currentQuestionIndex].answer;

    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
    
    if (selected === correctAnswer) {
        button.classList.add('correct');
        setTimeout(() => {
            state.gameData.currentQuestionIndex = (currentQuestionIndex || 0) + 1;
            renderGame();
        }, 1000);
    } else {
        button.classList.add('incorrect');
        document.querySelectorAll('.option-btn').forEach(btn => {
            if(btn.innerText === correctAnswer) btn.classList.add('correct');
        });
        setTimeout(() => {
             renderGame();
        }, 2000);
    }
}

// Flashcard Logic
function flipCard() {
    document.getElementById('flashcard').classList.toggle('is-flipped');
}

function nextFlashcard() {
    const { currentCardIndex = 0 } = state.gameData;
    state.gameData.currentCardIndex = currentCardIndex + 1;
    renderGame();
}

// Fill in the Blank Logic
function checkFillInTheBlankAnswer() {
    const { fillInTheBlanks } = promotionsData[state.activePromotionKey];
    const { currentQuestionIndex = 0 } = state.gameData;
    const correctAnswer = fillInTheBlanks[currentQuestionIndex].answer;
    const userInput = document.getElementById('blank-input').value;
    const feedbackEl = document.getElementById('fill-feedback');

    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        feedbackEl.textContent = '¡Correcto!';
        feedbackEl.style.color = 'var(--success)';
        document.getElementById('blank-input').disabled = true;
        setTimeout(() => {
            state.gameData.currentQuestionIndex = (currentQuestionIndex || 0) + 1;
            renderGame();
        }, 1500);
    } else {
        feedbackEl.textContent = 'Inténtalo de nuevo.';
        feedbackEl.style.color = 'var(--error)';
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initProgress();
    render();
});
