import { useDadJokes } from "./jokeDataProvider.js";

export const DadJokeHtml = (dadJokeObject) => {
    return `
        <h4>${dadJokeObject.question}</h4>
        <h4>${dadJokeObject.answer}</h4>

    `
} 