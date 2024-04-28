// h) Find the first occurrence of a given character in a string.
function findocc(str,key) {
    let index = str.indexOf(key)
    return index;
}
let str = "hanzla"
let key = 'n'
console.log(findocc(str,key));