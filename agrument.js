function loopFunc(array) {
    for (let index = 0; index < array.length; index++) {
        setTimeout(function () {
            console.log(array[index]);
        }, 1000);
    }
}

loopFunc([12, 4, 67, 8, 9]);
