function printPowsOf2(number) {
  if (typeof number === "number") {
    for (let i = 0; i <= number; i++) {
      let a = Math.pow(2, i);
      if (a <= number) {
        console.log(a);
      }
    }
  } else {
    console.log(number, "- incorrect type");
  }
}
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word);
console.log(result);
