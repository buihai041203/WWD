let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn_num, .btn_operator, .btn_clear, .btn_result, .btn_equal");

let currentInput = "";

buttons.forEach(btn => {
    btn.addEventListener("click", function() {
        let value = btn.textContent;

        if (btn.classList.contains("btn_clear")) {
            currentInput = "";
            display.value = "";
        } else if (btn.classList.contains("btn_result") || btn.classList.contains("btn_equal")) {
            try {
                // Tính toán biểu thức
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});

