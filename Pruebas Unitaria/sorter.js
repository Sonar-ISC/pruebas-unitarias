function sorter(arr) {
    if (typeof (arr) === 'object') {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                return "Error";
            }
        }
        arr.sort(function(a, b){return a - b});
        return arr;
    } else {
        return "Error";
    }
}

module.exports = sorter;
