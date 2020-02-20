let year = parseInt(prompt("Nhap nam: "))
if (year % 4 ===0) {
    if (year % 100 === 0 && year % 400 !== 0 ) {
        document.getElementById("isGapYear").innerText = year + " khong phai la nam nhuan";
    } else {
        document.getElementById("isGapYear").innerText = year + "  la nam nhuan";
    }
} else {
    document.getElementById("isGapYear").innerText = year + " khong phai la nam nhuan";
}