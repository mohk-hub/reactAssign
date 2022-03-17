const join = (...args) => {
    return args.reduce(function (prev, curr) {
        return prev + ' ' + curr;
    });
};

let message = join('JavaScript', 'Rest', 'Parameters');
console.log(message); 