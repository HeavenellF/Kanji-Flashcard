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

    { "kanji": "水", "english": "Water", "onyomi": ["sui"], "kunyomi": ["mizu"], "toggle": "false" },
    { "kanji": "火", "english": "Fire", "onyomi": ["ka"], "kunyomi": ["hi"], "toggle": "false" },
    { "kanji": "木", "english": "Wood", "onyomi": ["moku", "boku"], "kunyomi": ["ki"], "toggle": "false" },
    { "kanji": "天", "english": "Heaven", "onyomi": ["ten"], "kunyomi": ["ame", "ama"], "toggle": "false" },
    { "kanji": "土", "english": "Earth", "onyomi": ["do", "to"], "kunyomi": ["tsuchi"], "toggle": "false" },

    { "kanji": "北", "english": "North", "onyomi": ["hoku"], "kunyomi": ["kita"], "toggle": "false" },
    { "kanji": "東", "english": "East", "onyomi": ["tou"], "kunyomi": ["higashi"], "toggle": "false" },
    { "kanji": "西", "english": "West", "onyomi": ["sei", "sai"], "kunyomi": ["nishi"], "toggle": "false" },
    { "kanji": "南", "english": "South", "onyomi": ["nan"], "kunyomi": ["minami"], "toggle": "false" },
    { "kanji": "左", "english": "Left", "onyomi": ["sa"], "kunyomi": ["hidari"], "toggle": "false" },
    { "kanji": "右", "english": "Right", "onyomi": ["u"], "kunyomi": ["migi"], "toggle": "false" },

    { "kanji": "日", "english": "Day/Sun", "onyomi": ["nichi", "jitsu"], "kunyomi": ["hi", "bi", "ka"], "toggle": "false" },
    { "kanji": "月", "english": "Month/Moon", "onyomi": ["getsu", "gatsu"], "kunyomi": ["tsuki"], "toggle": "false" },
    { "kanji": "花", "english": "Flower", "onyomi": ["ka"], "kunyomi": ["hana"], "toggle": "false" },
    { "kanji": "魚", "english": "Fish", "onyomi": ["gyo"], "kunyomi": ["sakana", "uo"], "toggle": "false" },
    { "kanji": "空", "english": "Sky", "onyomi": ["kuu"], "kunyomi": ["sora", "akeru", "kara"], "toggle": "false" },
    { "kanji": "山", "english": "Mountain", "onyomi": ["san"], "kunyomi": ["yama"], "toggle": "false" },
    { "kanji": "川", "english": "River", "onyomi": ["sen"], "kunyomi": ["kawa"], "toggle": "false" },
    { "kanji": "雨", "english": "Rain", "onyomi": ["u"], "kunyomi": ["ame"], "toggle": "false" },
    { "kanji": "本", "english": "Book/Origin", "onyomi": ["hon"], "kunyomi": ["moto"], "toggle": "false" },

    { "kanji": "目", "english": "Eye", "onyomi": ["moku"], "kunyomi": ["me"], "toggle": "false" },
    { "kanji": "口", "english": "Mouth", "onyomi": ["kou", "ku"], "kunyomi": ["kuchi"], "toggle": "false" },
    { "kanji": "耳", "english": "Ear", "onyomi": ["ji"], "kunyomi": ["mimi"], "toggle": "false" },
    { "kanji": "手", "english": "Hand", "onyomi": ["shu"], "kunyomi": ["te"], "toggle": "false" },
    { "kanji": "足", "english": "Foot/Leg", "onyomi": ["soku"], "kunyomi": ["ashi", "tariru", "tasu"], "toggle": "false" },

    { "kanji": "人", "english": "Person", "onyomi": ["jin", "nin"], "kunyomi": ["hito"], "toggle": "false" },
    { "kanji": "母", "english": "Mother", "onyomi": ["bo"], "kunyomi": ["haha"], "toggle": "false" },
    { "kanji": "父", "english": "Father", "onyomi": ["fu"], "kunyomi": ["chichi"], "toggle": "false" },
    { "kanji": "女", "english": "Woman", "onyomi": ["jo", "nyo"], "kunyomi": ["onna", "me"], "toggle": "false" },
    { "kanji": "男", "english": "Man", "onyomi": ["dan", "nan"], "kunyomi": ["otoko"], "toggle": "false" },
    { "kanji": "子", "english": "Child", "onyomi": ["shi", "su"], "kunyomi": ["ko"], "toggle": "false" },

    { "kanji": "小", "english": "Small", "onyomi": ["shou"], "kunyomi": ["chiisai", "chii", "ko", "o"], "toggle": "false" },
    { "kanji": "中", "english": "Middle/Inside", "onyomi": ["chuu"], "kunyomi": ["naka"], "toggle": "false" },
    { "kanji": "大", "english": "Big", "onyomi": ["dai", "tai"], "kunyomi": ["oo", "ookii", "ooi"], "toggle": "false" },
    { "kanji": "上", "english": "Up/Above", "onyomi": ["jou", "shou"], "kunyomi": ["ue", "agaru", "ageru", "kami"], "toggle": "false" },
    { "kanji": "下", "english": "Down/Below", "onyomi": ["ka", "ge"], "kunyomi": ["shita", "kudaru", "sageru", "orosu"], "toggle": "false" },

    { "kanji": "何", "english": "What", "onyomi": ["ka"], "kunyomi": ["nani", "nan"], "toggle": "false" },
    { "kanji": "行", "english": "Go", "onyomi": ["kou", "gyou"], "kunyomi": ["iku", "okona", "yuku", "i", "okona", "yu"], "toggle": "false" },
    { "kanji": "見", "english": "See", "onyomi": ["ken"], "kunyomi": ["mi", "miru", "mieru", "miseru"], "toggle": "false" },
    { "kanji": "言", "english": "Say", "onyomi": ["gen", "gon"], "kunyomi": ["i", "koto", "iu"], "toggle": "false" },
    { "kanji": "語", "english": "Language", "onyomi": ["go"], "kunyomi": ["kata", "kataru", "katarau"], "toggle": "false" },
    { "kanji": "食", "english": "Eat", "onyomi": ["shoku"], "kunyomi": ["ta", "taberu", "ku", "kuu", "kurau"], "toggle": "false" },
    { "kanji": "飲", "english": "Drink", "onyomi": ["in"], "kunyomi": ["no", "nomu"], "toggle": "false" },
    { "kanji": "会", "english": "Meet", "onyomi": ["kai", "e"], "kunyomi": ["a", "au"], "toggle": "false" }

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