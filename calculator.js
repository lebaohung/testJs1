function displaybtn(val) {
    document.getElementById("result").value += val;
    return false;
}

function calbtn(){
    let x = document.getElementById("result").value;
    document.getElementById("result").value = eval(x);
    return false;
}

function resetbtn() {
    document.getElementById("result").value = "";
    return false;
}
