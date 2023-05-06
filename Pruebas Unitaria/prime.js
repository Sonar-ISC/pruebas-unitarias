function isPrime(n) {
    if (n % 1 !== 0 || typeof n !== 'number') {
        return "TypeError";
    } else if (n <= 0) {
        return "ValueError";
    }
    else {
        if (n < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}

module.exports = isPrime;