/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seenBefore = new Set();
    for (const num of nums) {
        if (seenBefore.has(num)) {
            return true;
        }
        seenBefore.add(num);
    }
    return false;
};
