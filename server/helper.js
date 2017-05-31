export const lengthAfterCancellation = (name1, name2) => {
  for (var x = name1.length; x--; ) {
    for (var y = name2.length; y--; ) {
      if (name1[x] === name2[y]) {
        name1.splice(x, 1);
        name2.splice(y, 1);
      } else {
        continue;
      }
    }
  }
  console.log(name1, name2);
  return name1.length + name2.length;
};

export const getLetter = (totalLength, flames) => {
  if (totalLength === 0) {
    return flames;
  } else {
    while (totalLength >= flames.length || totalLength <= flames.length) {
      var index = totalLength % flames.length - 1;
      if (index >= 0) {
        var character = flames.charAt(index);
      } else {
        character = flames.charAt(flames.length + index);
      }
      flames = flames.replace(character, "");
      // totalLength = flames.length;
      if (index >= 1) {
        var f1 = flames.substring(index);
        var f2 = flames.substring(0, index);
        flames = f1.concat(f2);
        continue;
      } else {
        var letter = flames;
        if (flames.length === 1) {
          break;
        }
      }
    }
  }
  return letter;
};
