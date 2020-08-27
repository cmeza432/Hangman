var programming_languages = [
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
    return programming_languages[Math.floor(Math.random() * programming_languages.length)]
}

export { randomWord }