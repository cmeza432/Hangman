var horror_movies = [
    "Evil Dead"
    // "halloween",
    // "texas chainsaw massacre",
    // "nightmare on elm street",
    // "candyman",
    // "insidious",
    // "dead silence",
    // "rec",
    // "night of the living dead",
    // "dawn of the dead",
    // "day of the dead",
    // "shaun of the dead",
    // "the conjuring",
    // "it",
    // "pet semetary",
    // "resident evil",
    // "psycho",
    // "exorcist",
    // "jaws",
    // "the shining",
    // "scream",
    // "black christmas",
    // "return of the living dead",
    // "suspiria",
    // "hatcher",
    // "jeepers creepers"
]

function randomWord() {
    return horror_movies[Math.floor(Math.random() * horror_movies.length)]
}

export { randomWord }