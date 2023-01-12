var a = 0;

function mouseOver() {


    const email = document.forms['form']['email'].value;
    const pass = document.forms['form']['password'].value;


    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if ((!email.match(emailCheck) || pass == "") && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    if ((!email.match(emailCheck) || pass == "") && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }

    if ((!email.match(emailCheck) || pass == "") && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    else {

        document.getElementById('submit').onclick(getData());
        document.getElementById('submit').style.cursor = 'pointer';
        return true;
    };

};




function buttonMoveLeft() {

    const button = document.getElementById('submit');
    button.style.transform = 'translateX(200%)';

};


function buttonMoveRight() {

    const button = document.getElementById('submit');
    button.style.transform = 'translateX(0%)';

};


function resetBtn() {
    const button = document.getElementById('submit');
    button.style.transform = 'translateX(0%)';

};
function getData() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    localStorage.setItem('userEmail', email)
    localStorage.setItem('userPassword', password)
}

// function generateOtp() {
//     let otp = ""
//     for (let i = 0; i < 6; i++) {
//         otp += Math.floor(Math.random() * 10)
//     }
//     return Number(otp)
// };
// console.log(generateOtp())