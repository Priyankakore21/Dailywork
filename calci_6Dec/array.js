 exports.onlydigit =function(a) {
   
    var array = [];
    var num;
    while (a > 0) {
        num = a % 10;
        array.push(num);
        a = a / 10;
        a = Math.floor(a);

    }
    return array.reverse();

}

 