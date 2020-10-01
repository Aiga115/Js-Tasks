function uppercaseORnot(string){
    var str = string.trim();

    var firstChar = str[0];
    if(firstChar === firstChar.toUpperCase())
    {console.log("The first character is uppercase")}
    else{
        console.log("Ther first character is lowercase")
    }
}
uppercaseORnot(" rame")