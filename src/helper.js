export const validate = (name1, name2) => {
  const errors = {};
  if (!name1 || name1 === '') {
    errors.name1 = 'Required';
  } else if (!name1.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
    errors.name1 = 'Enter a valid name';
  }

  if (!name2 || name2 === '') {
    errors.name2 = 'Required';
  } else if (!name2.match(/^[a-zA-Z]+(\s{0,1}[a-zA-Z ])*$/)) {
    errors.name2 = 'Enter a valid name';
  }
  return errors;
};

export const getResult = (name1, name2, letter) => {
  const letterMapping = {
    F: 'FRIEND',
    L: 'LOVE',
    A: 'AFFECTION',
    M: 'MARRIAGE',
    E: 'ENEMY',
    S: 'SIBLING'
  };
  return `${name1} and ${name2} has got ${letter} which stands for ${letterMapping[letter]}`;
};

export const changeToLowerCase = (input) => {
  return input.toLowerCase().replace(/ /g, '')
}