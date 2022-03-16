
var x = 10;

function foo() {
    var y = x + 5;
    // console.log(x);
    console.log(y);
    return y; -
        }

function bar() {
    var x = 2;
    // console.log(x);
    return foo();
}

function main() {
    foo(); // Static scope: 15; Dynamic scope: 15
    bar(); // Static scope: 15; Dynamic scope: 7
    // console.log(x);
    // console.log(y);
    return 0;
}
main()
