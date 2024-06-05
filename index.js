let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let vazifa = input.value;
    let li = document.createElement("li");

    li.textContent = vazifa;

    list.appendChild(li);

    input.value = ""
});