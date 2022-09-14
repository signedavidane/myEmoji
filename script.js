const myEmoji = ["👩‍💻", "⛷", "♌"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")


function renderEmojis() {
    emojiContainer.innerHTML = "" /* clears away old version before rendering the new one, try without to see the difference */
    for (let i = 0; i < myEmoji.length; i++) {
        const emoji = document.createElement('span') 
        emoji.textContent = myEmoji[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis() /* renders the first emojis, try without to see the difference */


pushBtn.addEventListener("click", function(){ /* adds one emoji at the end */
    if (emojiInput.value) {
        myEmoji.push(emojiInput.value)
        emojiInput.value = "" /* clears the input field after clicking the button */
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function() { /* adds one emoji at the beginning */
    if (emojiInput.value) {
        myEmoji.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() { /* removes one emoji from the end */
    myEmoji.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() { /* removes one emoji from the the beginning */
    myEmoji.shift()
    renderEmojis()
})




