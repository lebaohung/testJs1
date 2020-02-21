function count() {
    let month = parseInt(document.getElementById("inputMonth").value);
    if ( month <13 && month > 0) {
        switch (month) {
            case 1:
            case 5:
            case 3:
            case 7:
            case 8:
            case 10:
            case 12:
                document.getElementById("result").innerHTML = "Thang " + month + " co 31 ngay";
                break;
            case 2:
                document.getElementById("result").innerHTML = "Thang " + month + " co 28 hoac 29 ngay";
                break;
            default:
                document.getElementById("result").innerHTML = "Thang " + month + " co 30 ngay";
                break;
        }
    } else {document.getElementById("result").innerHTML = "Khong ton tai thang nay";
    }
    return false;
}