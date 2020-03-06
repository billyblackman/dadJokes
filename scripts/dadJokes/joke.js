import { useDadJokes } from "./jokeDataProvider.js";

export const DadJokeHtml = (dadJokeObject) => {
    return `
    <section class="dadJokeItem">
        <div class="question" id="question--${dadJokeObject.id}">${dadJokeObject.question}</div>
        <dialog class="answer" id="answer--${dadJokeObject.id}">${dadJokeObject.answer} </dialog>
    </section>
    `
} 