exports.getfact = num => {
  let fcatlist = [];
  let fcat = 2;
  if (num == 1) {
    return null;
  }
  while (num > 1) {
    if (num % fcat == 0) {
      fcatlist.push(fcat);
      num = num / fcat;
    } else fcat++;
  }
  return fcatlist;
};
