var pool_of_words = [
    "java",
    "python",
    "javascript",
    "html",
    "css",
    "ruby",
    "json",
    "php",
    "sql",
    "c",
    "fortran",
    "csharp",
    "golang",
    "ruby"
]

function randomWord() {
    return pool_of_words[Math.floor(Math.random() * pool_of_words.length)]
}

export { randomWord }