function cardToDiv(card, index) {
    const div = document.createElement("div");
    div.className = "flashcard";
    div.id = index;

    div.onclick = () => toggleCard(index);

    const kanji = document.createElement("div");
    kanji.className = "kanji";
    kanji.textContent = card.kanji;

    const english = document.createElement("div");
    english.className = "english";
    english.textContent = card.english;

    div.appendChild(kanji);
    div.appendChild(english);

    if (card.toggle === "false") {
        div.style.backgroundColor = "rgb(170, 170, 170)";
    }

    return div;
}


