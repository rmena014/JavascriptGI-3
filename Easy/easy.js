function exercise(x) {
  return function () {
    return `Today's exercise: ${x}`;
  };
}
var run = exercise("Running");
console.log(run());
var swim = exercise("Swimming");
console.log(swim());
