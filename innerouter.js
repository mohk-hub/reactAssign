
function sayHello() {
    var say = function () {
        console.log(hello);
    }
    var hello = 'Hola !';
    return say;
}
var sayHelloClosure = sayHello();
console.log(sayHelloClosure);