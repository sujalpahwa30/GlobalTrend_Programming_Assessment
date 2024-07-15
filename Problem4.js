function areAnagrams(str1 , str2) {
    function sortString(str) {
        return str.split('').sort().join('');
    }
    const cleanedStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanedStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return sortString(cleanedStr1) === sortString(cleanedStr2);
}

console.log(areAnagrams("anagram" , "nagaram"));