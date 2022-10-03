var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(x) {
  return function sharePizza(y) {
    return `Each person gets ${x / y} slices of pizza`;
  };
}

console.log(sharePizza(2));
console.log(sharePizza(3));
