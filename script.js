const poga = document.querySelector(".js-poga");

let number = 10;

poga.addEventListener("click", () => {
    number = number - 1

    if(number > 0){
        poga.textContent = `Nospied mani vēl ${number}x`
    } else {
        window.open("https://youtu.be/uIBJJ3M76Mg?si=DBQavKwz9v7O0fz3e")

        number = 10

        poga.textContent = `Nospied mani vēl ${number}x`
    }
})