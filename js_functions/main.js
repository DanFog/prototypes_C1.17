function myMessage () {
    console.log("This is my first function! Woo!");
}

function add(x, y) {
    console.log(x + y);
}

function add2(x, y) {
    var total = x + y;
    return total;
}

var add2result =add2(5, 12);

function cardFlip(x) {
    $(x).hide();
}