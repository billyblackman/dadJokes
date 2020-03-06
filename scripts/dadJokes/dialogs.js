




export const initializeDetailButtonEvents = () => {

    const allJokeBoxes = document.querySelectorAll("div[id^='question--']")
    

    for (const box of allJokeBoxes) {
        box.addEventListener(
            "click",
            theEvent => {
                console.log("working")
                const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
            const theDialog = document.querySelector(dialogSiblingSelector)
            theDialog.showModal()
            }
        )
    }
}