




module.exports = {
    getCard: (req, res) => {
        const index = req.params.index;
        console.log(`GET /api/cards/${index}`);
        res.json(FLASHCARDS[index]);
    },
    
    getCards: (req, res) => {
        console.log("GET /api/cards");
        res.json(FLASHCARDS)
    },

    toggleCard: (req, res) => {
        const index = req.params.index;
        const toggledCard = req.body;
        // console.log(`PUT /api/cards/${index}`, toggledCard);
        FLASHCARDS[index] = toggledCard;
        res.json(toggledCard);
        // console.log(FLASHCARDS[index]);
    }
};