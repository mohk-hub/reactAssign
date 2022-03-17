function sum(...args) {
    let total = 0;
    for (const add of args) {
        total += add;
    }
    return total;
}

sum(11, 34, 2, 6, 7, 8, 35);
