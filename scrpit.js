function toggleMenu() {
    const listMenu = document.getElementById("list-menu");
    const menuButton = document.getElementById("menu-button");

    if (menuButton.classList.contains("fa-bars")) {
        listMenu.classList.replace("bottom-[100%]", "top-[100%]");
        menuButton.classList.replace("fa-bars", "fa-times");
    } else {
        listMenu.classList.replace("top-[100%]", "bottom-[100%]");
        menuButton.classList.replace("fa-times", "fa-bars");
    }
}

function clearScreen() {
    var result = document.getElementById("result");
    result.textContent = String();
}

function validateCard() {
    var cardno = document.getElementById("cardno");
    var result = document.getElementById("result");

    // Checking the string contains only numerical values and the length must be 16 characters long.
    if (/^\d+$/.test(cardno.value) && cardno.value.length === 16) {
        var sumOfOddNumbers = Number();
        var sumOfEvenNumbers = Number();

        // Adding the sum of odd numbers.
        for (let i = 0; i < cardno.value.length - 1;) {
            let j = cardno.value[i] * 2;
            if (j < 10) {
                sumOfOddNumbers = sumOfOddNumbers + j;
            } else {
                for (let i = 0; i < 2; i++) {
                    sumOfOddNumbers = sumOfOddNumbers + Number(j.toString()[i]);
                }
            }

            i += 2;
        }

        // Adding sum of even numbers.
        for (let i = 1; i < cardno.value.length - 1;) {
            sumOfEvenNumbers = sumOfEvenNumbers + Number(cardno.value[i]);
            i += 2;
        }

        if (10 - (sumOfOddNumbers + sumOfEvenNumbers % 10) === Number(cardno.value) % 10) {
            console.log("This is a valid card number!");
            result.textContent = "This is a valid card number!";
            result.style.color = "green";
            return false;
        }
    } else {
        console.log("This is an invalid card number!");
        result.textContent = "This is an invalid card number!";
        result.style.color = "red";
        return false;
    }
}
