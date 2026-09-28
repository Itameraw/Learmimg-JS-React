const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

const modifyArray = (modifyCondition) => (data) => data.map(modifyCondition);

const toLower = (str) => str.toLowerCase();

const capitalizeFirst = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const joinWithDash = (arr) => arr.join("-");
const joinWithSpaces = (arr) => arr.join(" - ");

const formatResult = (str) => `Result: ${str} length: ${str.length}`;

const allToLower = compose(formatResult, joinWithSpaces, modifyArray(toLower));

const capitalizeAllFirst = compose(
  formatResult,
  joinWithDash,
  modifyArray(capitalizeFirst)
);

const testArray = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

console.log(allToLower(testArray));
// 👉 Result: custom - web - and - mobile - platforms length: 39

console.log(capitalizeAllFirst(testArray));
// 👉 Result: Custom-Web-And-Mobile-Platforms length: 31
