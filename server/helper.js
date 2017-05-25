

exports.lengthAfterCancellation = (l1, l2, name1, name2) => {
  for (var x in name1) {
    for (var y in name2) {
      if (x === y) {
        name1.replace(x,'');
        name2.replace(y,'');
      } else {
        continue;
      }
    }
  }
  console.log(name1, name2);
  return name1.length + name2.length;
}
