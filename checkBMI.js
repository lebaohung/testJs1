let weight = parseFloat(prompt("Nhap chi so can nang(tinh theo kg): "));
let height = parseFloat(prompt("Nhap chi so chieu cao(theo m): "));
let bmi = weight / Math.pow(height, 2);

if (weight <= 0 || height <= 0) {
    alert("Hay nhap chinh xac! ");
} else {
    if (bmi < 18)
        alert("Underweight");
    else if (bmi < 25.0)
        alert("Normal");
    else if (bmi < 30.0)
        alert("Overweight");
    else
        alert("Obese");
}