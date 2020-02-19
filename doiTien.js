
function convert(){
    let amt=document.getElementById("amount").value;
    let cur1 = document.getElementById("currency1").value;
    let cur2 = document.getElementById("currency2").value;



    alert("Gia tri quy doi duoc la: " + amt*cur1/cur2);
}