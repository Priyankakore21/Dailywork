exports.getFact = function (num) {
    let factList = [];

    if (num == 1)
        factList = null;
    let fact = 2;
    while (num > 1) {
        if (num % fact == 0) {
            factList.push(fact);
            num = num / fact;
        }
        else
            fact++;
    }

    return factList;

}