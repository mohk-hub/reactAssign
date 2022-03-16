
function foo() {
    let b = 1;
    function inner() {
        b = 5;
        return b;
    }
    b = 8;
    // console.log(b);
    return inner;
    console.log(b);
}
var get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
