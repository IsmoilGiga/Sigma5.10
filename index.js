let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let vazifa = input.value;
    let li = document.createElement("li");
    let span = document.createElement("span")

    let done = document.createElement("button")
    let del = document.createElement("button")

    done.addEventListener("click", (event) => {
        event.preventDefault();

        span.classList.toggle("line");
    });

    del.addEventListener("click", (event) => {
        event.preventDefault();

        li.remove();
    });

    span.textContent = vazifa;
    done.textContent = "Done";
    del.textContent = "Delete";

    done.classList.add("done")
    del.classList.add("del")

    li.appendChild(span);
    li.appendChild(done);
    li.appendChild(del);

    list.appendChild(li);

    input.value = ""
});