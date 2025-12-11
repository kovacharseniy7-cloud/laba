\// -------------------------
// ФОРМА ЗВОРОТНОГО ЗВ'ЯЗКУ
// -------------------------

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault(); // Щоб не перезавантажувалась сторінка

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("formResult");

    // Перевірка полів
    if(name === "" || email === "" || message === ""){
        result.style.color = "red";
        result.textContent = "Будь ласка, заповніть усі поля!";
        return;
    }

    result.style.color = "green";
    result.textContent = "Ваше повідомлення успішно надіслано!";
});


// -------------------------
// МІНІ-ГРА: ВГААДАЙ ЧИСЛО
// -------------------------

let secretNumber = Math.floor(Math.random() * 10) + 1;

function checkNumber() {
    let input = document.getElementById("userNumber").value;
    let output = document.getElementById("gameResult");

    if(input == secretNumber){
        output.style.color = "green";
        output.textContent = "🎉 Вітаю! Ви вгадали число!";
        secretNumber = Math.floor(Math.random() * 10) + 1; // Нове число
    } 
    else {
        output.style.color = "red";
        output.textContent = "❌ Не вгадали! Спробуйте ще!";
    }
}
