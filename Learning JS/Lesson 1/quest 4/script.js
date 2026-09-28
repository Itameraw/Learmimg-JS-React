function calculateWordsInString(string) {
  let word = "";
  let number = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      if (string[i - 1] != " ") {
        for (let z = 0; z <= 1; z++) {
          number += z;
        }
      }
    }
    word += string[i];
  }
  console.log(word, "-", number, "word");
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
