function toggleCard(index) {
    const card = document.getElementById(index);

    // let newToggleValue = (card.getAttribute("toggle") === "true") ? "false" : "true";
    // card.setAttribute("toggle", newToggleValue);

    fetch(`/api/cards/${index}`)
        .then(response => response.json())
        .then(fullcard => {
            console.log(fullcard);
            const newToggleValue = (fullcard.toggle === "true") ? "false" : "true";
            const toggledCard = {
                ...fullcard,
                toggle: newToggleValue
            };

            return fetch(`/api/cards/${index}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(toggledCard)
            });
        })
        .then(response => response.json())
        .then(toggledCard => {
            card.style.backgroundColor = (toggledCard.toggle === "true") ? "white" : "rgb(170, 170, 170)";
        })
        .catch(error => console.error(error));
}


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


