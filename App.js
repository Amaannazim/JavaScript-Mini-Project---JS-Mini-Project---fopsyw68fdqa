function checkData() {
    var enterEmail = document.getElementById('email').value
    var enterPassword = document.getElementById('password').value
    var link = document.getElementById('link')

    var getEmail = localStorage.getItem('userEmail')
    var getPassword = localStorage.getItem('userPassword')


    if (enterEmail == getEmail) {
        if (enterPassword == getPassword) {
            alert("Login Successfull")
            window.open("https://amaannazim.github.io/To-Do-List/")
        }
        else {
            alert("Wrong Password")
        }
    }
    else {
        alert("Invalid Details")
        link.style.color = "red"
    }
}