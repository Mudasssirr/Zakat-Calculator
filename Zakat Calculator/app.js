function swal() {
    var userIncome = document.getElementById('input1').value;
    
    var parse = parseInt(userIncome);
    
    var divide = parse / 40;

    alert("You have to give "+ divide + " Rupees zakat");

    var userGold = document.getElementById('input2').value;

    var parse2 = parseInt(userGold);

    var divide2 = parse2 / 40;

    alert("You have to give " + divide2 + " Tola gold");

    var  userSilver = document.getElementById('input3').value;

    var parse3 = parseInt(userSilver);

    var divide3 = parse3 / 40;

    alert("You have to give " + divide3 + " Tola Silver");
}