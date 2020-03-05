import { useDadJokes } from "./jokeDataProvider.js";

export const DadJokeHtml = (dadJokeObject) => {
    return `
    <section class="dadJokeItem">
        <h4>${dadJokeObject.question}</h4>
        <h4>${dadJokeObject.answer}</h4>
    </section>
    `
} 