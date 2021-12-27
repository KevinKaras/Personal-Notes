
const array = ["a", "b", "c", "d", "e"]

const target = "deed"

function valid(str){
    if(str === "deed"){
        return true
    } else {
        return false
    }
}

function printer(len, str){
    
    if(valid(str)){
        return str
    }
    if(len === 0){
        return ""
    }
    for(let i = 0; i < array.length; i++){
        // console.log(str + array[i])
        let newLen = len - 1
        let found = printer(newLen, str + array[i])
        if(found != ""){
            return found
        }
    
        
    }
    return ""
}

console.log(printer(4, ""))