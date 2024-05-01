function compress(str) {
    let compressStr = '';
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if(str[i]==str[i+1]){
            count++
        }
        else{
            compressStr += str[i] + count
            count = 1
        }
    }
    return compressStr.length<str.length?compressStr:str
}
let str = "aabbbbcccc"
let result = compress(str);
console.log(result);