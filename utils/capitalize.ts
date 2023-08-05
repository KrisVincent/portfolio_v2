const capitalize = (word: string) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const theRest = word.slice(1);

  return firstLetter + theRest;
};

export default capitalize;
