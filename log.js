let acc = prompt("Account name: ","" );
if(acc ==="Admin") {
    let pass = prompt("Password: " , "" );
        if(pass ==="TheMaster") {
            alert("Welcome my girl!")
        }   else {
            if (pass == "") {
                alert("Canceled - Out my girl!");
            } else {
                alert("Wrong password my girl");
            }
        }
} else if (acc == "") {
        alert("Canceled - You are so bad!");
} else {
        alert("Go Sign up my girl!");
}