function suma(arr) {
    if (typeof (arr) === 'object') {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                return "Error";
            }
            else {
                total += arr[i];
            }
        }

        return total;
    } else {
        return "Error";
    }
}

module.exports = suma;
