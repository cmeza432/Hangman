var answer_words = [
    "dog",
    "chocolate",
    "controller",
    "mouse",
    "monitor",
    "television",
    "rope",
    "night",
    "radio",
    "food",
    "chips",
    "nachos",
    "space",
    "sky",
    "corn",
    "white",
    "blue",
    "speaker",
    "car",
    "truck",
    "programming",
    "movie",
    "tablet",
    "house",
    "building",
    "work",
    "tired"
]

function randomWord() {
    return answer_words[Math.floor(Math.random() * answer_words.length)]
}

export { randomWord }