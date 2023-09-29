let str1 = "Hello"
let str2 = "World"
let result

function assetString (string1, string2) {
    if (string1.length > string2.length) {
        return 1
    }

    if (string1.length < string2.length) {
        return -1
    }

    if (string1.length == string2.length) {
        return 0
    }
}

result = assetString(str1,str2)


// console.log(result)



//  task 2

let str = "привет мир"
let result2

function upperString (string) {
    result2 = string[0].toUpperCase() + string.slice(1)    
}

upperString(str)

console.log(result2)

// task 3

let str31 = "abcdefg"
let result31 = 0
let bufer = "a"

// function delSymbol(string) {
//     while (string.indexOf("a") != -1) { 
//     string = string.slice(bufer)
//     return string        
//     }
    
// }

function delSymbol(string){
    
    for (let x = 0; x < string.length; x++) {
        if (string.indexOf(bufer[x]) != -1) {
            result31 += 1 
        }
     } 
}
        

delSymbol(str31)

console.log(result31)