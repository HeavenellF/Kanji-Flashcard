const FLASHCARDS = [
    { "kanji": "一", "english": "One", "onyomi": ["ichi", "itsu"], "kunyomi": ["hito"], "toggle": "false" },
    { "kanji": "二", "english": "Two", "onyomi": ["ni"], "kunyomi": ["futa"], "toggle": "false" },
    { "kanji": "三", "english": "Three", "onyomi": ["san"], "kunyomi": ["mi"], "toggle": "false" },
    { "kanji": "四", "english": "Four", "onyomi": ["shi"], "kunyomi": ["yon", "yo"], "toggle": "false" },
    { "kanji": "五", "english": "Five", "onyomi": ["go"], "kunyomi": ["itsu"], "toggle": "false" },
    { "kanji": "六", "english": "Six", "onyomi": ["roku"], "kunyomi": ["mu"], "toggle": "false" },
    { "kanji": "七", "english": "Seven", "onyomi": ["shichi"], "kunyomi": ["nana"], "toggle": "false" },
    { "kanji": "八", "english": "Eight", "onyomi": ["hachi"], "kunyomi": ["ya"], "toggle": "false" },
    { "kanji": "九", "english": "Nine", "onyomi": ["kyuu", "ku"], "kunyomi": ["kokono"], "toggle": "false" },
    { "kanji": "十", "english": "Ten", "onyomi": ["juu"], "kunyomi": ["too"], "toggle": "false" },
    { "kanji": "百", "english": "Hundred", "onyomi": ["hyaku"], "kunyomi": [], "toggle": "false" },
    { "kanji": "千", "english": "Thousand", "onyomi": ["sen"], "kunyomi": ["chi"], "toggle": "false" },
    { "kanji": "万", "english": "Ten Thousand", "onyomi": ["man", "ban"], "kunyomi": [], "toggle": "false" },
];


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