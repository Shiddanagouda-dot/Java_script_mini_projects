let exp = "";
const btn = document.getElementsByTagName("button");
const input = document.getElementById("display");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function (e) {
        if (e.target.textContent === "=" && exp !== "") {
            input.value = eval(exp);
            exp = input.value;
        }
        else if (e.target.textContent === "C") {
            exp = "";
            input.value = "";
        }
        else if (
            (
                exp.at(-1) === "+" ||
                exp.at(-1) === "-" ||
                exp.at(-1) === "*" ||
                exp.at(-1) === "/"
            )
            &&
            (
                e.target.textContent === "+" ||
                e.target.textContent === "-" ||
                e.target.textContent === "*" ||
                e.target.textContent === "/"
            )
        ) {
            return;

        }
        else {
            exp += e.target.textContent;
            input.value = exp;
        }
    });
}