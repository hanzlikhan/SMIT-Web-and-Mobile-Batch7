// k) Count the number of words in a string.

function countWords(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == " ") {
            count++;
        }
    }
   return count + 1   
}
var str = "I am a good boy";
console.log(countWords(str));

