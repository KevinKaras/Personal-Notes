// https://leetcode.com/problems/decode-ways/

var numDecodings = function(s) {
    let memo = {}
    function decode(s, l=s.length){
        if(l in memo){
            return memo[l]
        }
        let res = 0
        if(s[s.length-l] == 0){
            return 0
        }
        if(l == 1){
            return 1
        }
        if(l == 0){
            return 1
        }
        if((l >= 2) &&  
           (s.slice(s.length - l, (s.length - l)+2) >=10) && 
           (s.slice(s.length - l, (s.length - l)+2) <=26)){
            res += decode(s, l-1) + decode(s, l-2)
        } else {
            res += decode(s, l-1) 
        }
        memo[l] = res
        return res
    }
    
    return decode(s)
};