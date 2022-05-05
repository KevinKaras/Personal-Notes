// /**
//  * @param {number[]} nums
//  * @return {number[]}
// **/


//  var productExceptSelf = function(nums) {
//     const res = [];
    
//     let product = 1;
    
//     for (let i = 0; i < nums.length; i++) {
//         res[i] = product;
//         product *= nums[i];
//     }
//     product = 1;
//     for (let j = nums.length - 1; j >= 0; j--) {
//         res[j] *= product;
//         product *= nums[j];
//     }
    
//     return res;
    
// };


let arr = [1,2,3,4,5]
function Adder(array){
    let sum = 1;
    let result = []

    for(let i = 0; i < array.length;i++){
        result[i] = sum
        sum *= array[i]
        
        console.log(result)
    }
    sum = 1
    for(let i = array.length-1; i >= 0;i--){
        result[i] *= sum
        sum *= array[i]
        
        console.log(result)
    }
    return result
}
console.log(Adder(arr))




