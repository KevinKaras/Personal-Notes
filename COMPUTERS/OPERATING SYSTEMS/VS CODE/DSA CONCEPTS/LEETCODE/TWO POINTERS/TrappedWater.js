//////////////////////////////////////////////////////////////////////////////
// Time: O(n)  Space: O(1)  One iteration.
//////////////////////////////////////////////////////////////////////////////


// GIVEN AN ARRAY OF NUMBERS TO DISPLAY VARYING HEIGHTS, CHECK HOW MUCH WATER CAN BE STORED BETWEEN EACH HEIGHT WITHOUT OVER FLOWING.


/**
 * @param {!Array<number>} heights
 * @return {number}
 */
 function trap(heights) {
    
    let l = 0;
    let r = heights.length - 1;
    let lMax = 0;
    let rMax = 0;
    let total = 0;
    
    while (l < r) {
        if (heights[l] < heights[r]) {
            if (heights[l] >= lMax) {
                lMax = heights[l];
            } else {
                total += lMax - heights[l];
            }
            ++l;
        } else {
            if (heights[r] >= rMax) {
                rMax = heights[r];
            } else {
                total += rMax - heights[r];
            }
            --r;
        }
    }
    
    return total;
}