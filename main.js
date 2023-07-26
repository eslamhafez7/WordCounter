let textarea = document.getElementById("textarea");
let words = document.getElementById("words");
let characters = document.getElementById("characters");

textarea.addEventListener("input", () => {
    characters.textContent = textarea.value.length;
    let text = textarea.value.trim();
    words.textContent = text.split(/\s+/).filter((item) => item).length;
})