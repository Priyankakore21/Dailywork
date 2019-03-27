exports.getFcat = function (num) {

    let factList = []
    let fact = 2;
    if (num == 1)
        return null

    while (num > 1) {
        if (num % fact == 0) {
            factList.push(fact)
            num = num / fact
        }
        else
            fact++
    }

    return factList
}