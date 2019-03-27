exports.getfact = (num) => {
  let factlist = [];
  let fact = 2;
  if (num == 1) factlist.push(null);
  while (num > 1) {
    if (num % fact == 0) {
      factlist.push(fact);
      num = num / fact;
    } else fact++;
  }
  return factlist;
};
