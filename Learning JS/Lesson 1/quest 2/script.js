function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let a = 0;
  const arrayWithNumber = initialArray
    .filter((el) => typeof el === "number" + a)
    .filter((el) => a + el);
  /* for (let i = 0; i < initialArray.length - 1; i++) {
    if (initialArray[i] === Number(initialArray[i])) {
      a += initialArray[i];
    }
  }*/
  console.log(arrayWithNumber);
}

calculateSumOfArray();
