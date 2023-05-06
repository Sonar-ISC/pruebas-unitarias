function pond(nums, weigths) {
    let total = 0;
    if (typeof (nums) === 'object' && typeof (weigths) === 'object') {
        if (nums.length === weigths.length) {
            for (let i = 0; i < nums.length; i++) {
                if (typeof nums[i] === 'number' && typeof weigths[i] === 'number' && weigths[i] > 0) {
                    total += nums[i] * weigths[i];
                } else {
                    return "Error";
                }
            }
            return total;
        }
        else return "Error";
    }
    else return "Error";
}

module.exports = pond;