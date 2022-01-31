

let alpha = ["s", "o", "i", "m", "t", "x"]

function Permutations(array){
    if(array.length == 0){
        return [[]]
    }

    

    let firstLetter = array[0]
    let rest = array.slice(1)
    let permsWithoutFirst = Permutations(rest)
    let permutations = []

    permsWithoutFirst.forEach(perm => {
        for(let i = 0; i <= perm.length; i++){
            const permWithFirst = [...perm.slice(0, i), firstLetter, ...perm.slice(i)]
            permutations.push(permWithFirst)
        }

    })
    return permutations

}


console.log(Permutations(alpha))


