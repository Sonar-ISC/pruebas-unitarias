function fac(n) {
    if (typeof(n) === 'number' && n >= 0) {
        let cont = 1;
        
        for (let i = 1; i <= n; i++) {
            cont = cont * i;
        }
        return cont;
    } else {
        return "Error";
    }
}

module.exports = fac;