let r;

function nhapBanKinh() {
    r = prompt("Ban kinh hinh tron la: ");
}

function tinhCv() {
    alert("Chu vi hinh tron la " + parseInt(Math.PI*r*2*100)/100);
}

function tinhDt() {
    alert("Dien tich hinh tron la " + parseInt(Math.PI *r*r*100)/100);
}