// let a = parseInt(prompt("Nhap vao a", "123"));
// le?t b = parseInt(prompt("Nhap vao b", "123"));
let a;
let b;
function inputa() {
    a = parseInt(prompt("Nhap vao a", "123"));
}

function inputb() {
    b = parseInt(prompt("Nhap vao a", "123"));
}


function check() {

    if (a % b === 0)
    {
        alert("a chia het cho b");

    } else
    {
        alert("a khong chia het cho b");
    }

}
