// Code your solution here!


function printString(string){
    let mySubstring;
    console.log(string[0])
    if (string.length >1){
        mySubstring=string.substring(1, string.length);
        printString(mySubstring)
    }else{
        return true
    }
}


function reverseString(string){
    if (string.length<=1){
        return string;
    }
    else{
        return string.charAt(string.length-1) + reverseString(string.substring(0,string.length-1))
    }
}
