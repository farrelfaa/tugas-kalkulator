// script.js
function hitung() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operator = document.getElementById("operator").value;
    var hasil;

    switch (operator) {
        case "tambah":
            hasil = num1 + num2;
            break;
        case "kurang":
            hasil = num1 - num2;
            break;
        case "kali":
            hasil = num1 * num2;
            break;
        case "bagi":
            hasil = num1 / num2;
            break;
        case "modulus":
            hasil = num1 % num2;
            break;
        default:
            hasil = "Operasi tidak valid";
    }

    document.getElementById("hasil").innerText = hasil;
}
