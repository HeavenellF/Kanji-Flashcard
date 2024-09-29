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