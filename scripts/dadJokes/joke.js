import { useDadJokes } from "./jokeDataProvider.js";

export const DadJokeHtml = (dadJokeObject) => {
    return `
    <section class="dadJokeItem">
        <h4 class="question">${dadJokeObject.question}</h4>
        <h4 class="answer">${dadJokeObject.answer}</h4>
    </section>
    `
} 