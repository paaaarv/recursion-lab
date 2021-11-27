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

function isPalindrome(string){
    let subString;
    if(string.length<2){
        return true;
    }
    else{
        if(string[0]===string[string.length-1]){

            subString=string.substring(1,string.length-1)
            isPalindrome(subString)
        }else{
            return false;
        }
    }
    return true;
}

function addUpTo(array, num,total=0){
    let newArray;
    if(num<=0){
        return array[0]
    }
    else{
        array[1]+=array[0]
        newArray=array.slice(1, array.length)
        return addUpTo(newArray, num-1, total)
    }
}

function maxOf(array){
    let newArray;
    if(array.length<=1){
        return array[0]
    }
    else{
        if(array[1]>array[0]){
            newArray=array.slice(1)
            return maxOf(newArray)
        }
        if(array[0]> array[1]){
            array.pop()
            return maxOf(array)
        }
    }
}


function includesNumber(array,num){
    if(array[0]===num){
        return true
    }
    else if (array.length >0){
        array.shift()
        return includesNumber(array, num)
    }else{
        return false
    }
}
