import { useDadJokes } from "./jokeDataProvider.js";
import { DadJokeHtml } from "./joke.js";

const contentTarget = document.querySelector(".dadJokeContainer")

export const DadJokeList = () => {
    const arrayOfDadJokeObjects = useDadJokes()

    for (const dadJokeObject of arrayOfDadJokeObjects) {
        const htmlRepresentationOfDadJoke = DadJokeHtml(dadJokeObject)
        contentTarget.innerHTML += htmlRepresentationOfDadJoke
    }
}