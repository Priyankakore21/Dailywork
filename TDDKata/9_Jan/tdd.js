exports.getfact = num => {
  let fcatlist = [];
  let fact = 2;
  if (num == 1) return null;
  while (num > 1) {
    if (num % fact == 0) {
      fcatlist.push(fact);
      num = num / fact;
    } else fact++;
  }
  return fcatlist;
};
