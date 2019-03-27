exports.getfact = function (num) {
    factlist = []
    let fact = 2
    if (num == 1)
        return null


    while (num > 1) {
        if (num % fact == 0) {
            num = num / fact
            factlist.push(fact)
        }
        else
            fact++


    }
    return factlist
}