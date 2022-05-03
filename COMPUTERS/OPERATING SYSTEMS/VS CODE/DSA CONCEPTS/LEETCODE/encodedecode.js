/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
 var encode = function(strs) {
    let resultStr = ""
    
    for(let i = 0; i < strs.length;i++){
        resultStr += `${strs[i].length}@${strs[i]}`
        
    }
    return resultStr
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */

// input = '5@Hello5@World'

var decode = function(str) {
   const res = [];
    let i = 0;

    while (i < str.length) {
        let j = i;
        while (str[j] !== "@") {
            ++j;
        }

        const len = Number(str.slice(i, j));
        res.push(str.slice(++j, j + len));
        i = j + len;
    }

    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

// input = ["!@#%^&*()_+", "1!2@3#4$5%6^7&8*9(0)"]

// input = ["Yikes", "Tough"]
// output = "5@Yikes5@Tough"



// input = ""
// output = ["Yikes", "Tough"]