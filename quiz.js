
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('quiz.html')) {
        const storedCard = localStorage.getItem('currentCard');
        const randomIndex = localStorage.getItem('randomIndex');
        console.log(`RandomIndex: ${randomIndex}`);
        
        if (storedCard) {
            const card = JSON.parse(storedCard);
            changeCard(card, randomIndex);
        } else {
            console.log("No card data found.");
        }
    }
});

function goToQuizPage(currentIndex, mode) {
    // Fetch all cards from the server
    const FLASHCARD = [];
    fetch('/api/cards', {
        headers: {Accept: 'application/json'}
        })
        .then(response => response.json())
        .then(cards => {
            cards.forEach(card => {
                if (card.toggle === "true")
                {
                    FLASHCARD.push(card);
                }
            });
            console.log(FLASHCARD.length);

            localStorage.setItem('FLASHCARD', JSON.stringify(FLASHCARD));
            localStorage.setItem('mode', mode);
  
        })
        .then(() => initiateCard(currentIndex))
}

function initiateCard(currentIndex) {
    const mode = localStorage.getItem('mode');
    const FLASHCARD = JSON.parse(localStorage.getItem('FLASHCARD'));


    if (FLASHCARD.length === 0) {
        alert('No more flashcards to display.');
        window.location.href = 'index.html';
        return;
    }

    let randomIndex = currentIndex;


    if (mode === 'test') {
        randomIndex = Math.floor(Math.random() * FLASHCARD.length);
    } 
    else if (mode === 'unlimited') {
        do {
            randomIndex = Math.floor(Math.random() * FLASHCARD.length);
        } while (randomIndex === currentIndex);
    }

    console.log(`Index : ${randomIndex}|| Flashcard Size:${FLASHCARD.length}`);

    // Store the current card and random index in local storage
    localStorage.setItem('currentCard', JSON.stringify(FLASHCARD[randomIndex]));

    // Mode handler here
    if (mode === 'test') {
        // Remove the current card from the FLASHCARD array
        FLASHCARD.splice(randomIndex, 1);
        // we dont need to know the previous card therefore saving randomIndex is unnecessary
        localStorage.setItem('randomIndex', 0);
        localStorage.setItem('FLASHCARD', JSON.stringify(FLASHCARD));
    }
    else if (mode === 'unlimited') {
        // Saving randomIndex is to keep track of the previous card
        localStorage.setItem('randomIndex', randomIndex);
    }

    window.location.href = 'quiz.html';
}


function changeCard(card, randomIndex) {
    const kanji = document.querySelector('.kanji');
    const english = document.querySelector('.english');

    randomIndex = parseInt(randomIndex);

    kanji.textContent = card.kanji;
    // english.textContent = card.english;

    const button = document.querySelector('.button');
    button.onclick = () => {
        checkCard(card, randomIndex);
    }
}

function checkCard(card, randomIndex) {
    const inputOnyomi = document.querySelector('.onyomi').value.toLowerCase();
    const inputKunyomi = document.querySelector('.kunyomi').value.toLowerCase();

    const mark1 = document.querySelector('.mark-1');
    const mark2 = document.querySelector('.mark-2');

    // Check Onyomi
    if (card.onyomi.includes(inputOnyomi)) {
        mark1.src = 'images/correct.png';
    } else {
        mark1.src = 'images/wrong.png';
    }

    // Check Kunyomi
    if (card.kunyomi.length === 0) {
        if (inputKunyomi === "") {
            mark2.src = 'images/correct.png';
        } else {
            mark2.src = 'images/wrong.png';
        }
    } else {
        if (card.kunyomi.includes(inputKunyomi)) {
            mark2.src = 'images/correct.png';
        } else {
            mark2.src = 'images/wrong.png';
        }
    }

    const button = document.querySelector('.button');
    button.onclick = () => {
        initiateCard(randomIndex);
    }
}