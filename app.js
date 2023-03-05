let outputScreen = document.getElementById("output1");
function reset() {
    outputScreen.value = "0";
}

function display(num) {
    if (outputScreen.value === "0")
        outputScreen.value = num;
    else
        outputScreen.value += num;
}

function del(params) {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

function calculate(params) {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        outputScreen.style.fontSize = "30px";
        outputScreen.value = "oops! invalid input";

    }
}
