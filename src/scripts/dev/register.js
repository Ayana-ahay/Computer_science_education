function validation() {
    var email = document.getElementById("email").value;
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var middlename = document.getElementById("middlename").value;
    var password = document.getElementById("password").value;

    if (email == "") {
        document.getElementById("emailids").innerHTML = " ** Please fill the email id field";
        return false;
    }
    if (email.indexOf("@") <= 0 || email.lastIndexOf(".") <= email.indexOf("@")) { // проверка корректности email
        document.getElementById("emailids").innerHTML = " ** Invalid Email";
        return false;
    }
    
    if (firstname == "") {
        document.getElementById("Имя").innerHTML = " ** Please fill the firstName field";
        return false;
    }
    if (!/^[а-яА-Яa-zA-Z]+$/.test(firstname)) { // проверка, что имя состоит только из букв
        document.getElementById("Имя").innerHTML = " ** Only characters are allowed";
        return false;
    }

    if (lastname == "") {
        document.getElementById("Фамилия").innerHTML = " ** Please fill the lastName field";
        return false;
    }
    if (!/^[а-яА-Яa-zA-Z]+$/.test(lastname)) { // проверка, что фамилия состоит только из букв
        document.getElementById("Фамилия").innerHTML = " ** Only characters are allowed";
        return false;
    }

    if (!/^[а-яА-Яa-zA-Z]*$/.test(middlename)) { // проверка, что отчество состоит только из букв
        document.getElementById("Отчество").innerHTML = " ** Only characters are allowed";
        return false;
    }

    if (password == "") {
        document.getElementById("Пароль").innerHTML = " ** Please fill the password field";
        return false;
    }
    if (password.length < 5 || password.length > 20) { // проверка длины пароля
        document.getElementById("Пароль").innerHTML = " ** Password length must be between 5 and 20";
        return false;
    }

    return true;
}

// После успешной валидации формы перенаправляем на index.html
document.getElementById("registerForm").onsubmit = function() {
    if (validation()) {
        window.location.href = "index.html";
        alert("Регистрация успешно завершена!");
    }
    return false; // Необходимо для предотвращения отправки формы по умолчанию
};