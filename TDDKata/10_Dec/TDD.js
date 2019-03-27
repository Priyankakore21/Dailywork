exports.getfact = function (number) {
    let factlist = []
    let fact=2

    if (number == 1)
        factlist = null

    while (number > 1) {
        if (number % fact == 0) {
            factlist.push(fact)
            number = number / fact
        }
        else
        {
            fact++
        }
    }

    return factlist
}