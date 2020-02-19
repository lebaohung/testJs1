let diemToan;
let diemLy ;
let diemHoa ;

function nhapDiemToan(){
    diemToan= parseInt(prompt("Nhap vao diem toan"));
}

function nhapDiemLy() {
    diemLy = parseInt(prompt("Nhap vao diem ly"));
}

function nhapDiemHoa() {
    diemHoa = parseInt(prompt("Nhap vao diem Hoa"));
}

function diemTb() {
    alert("Diem trung binh la: " + parseInt((diemHoa+diemLy+diemToan)/3*100)/100);


}

