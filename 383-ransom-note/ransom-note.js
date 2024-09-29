/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split("")
    magazine = magazine.split("")

for(let i = 0; i < ransomNote.length; i++){
    if(!magazine.includes(ransomNote[i])){
        return false
    } else{
        let value = magazine.indexOf(ransomNote[i])
        magazine.splice(value,1);
    }

}
return true
};