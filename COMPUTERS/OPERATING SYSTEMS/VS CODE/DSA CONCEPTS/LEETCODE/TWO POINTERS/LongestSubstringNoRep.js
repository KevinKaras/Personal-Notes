/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    const charSet = new Set()
    let l = 0
    let longest = 0
    
    for (let i = 0; i < s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[l])
            l++
        }
        charSet.add(s[i])
        longest = Math.max(longest, i - l + 1)
    }
    
    return longest
};