function fibon(a) {
  return a <= 1 ? a : fibon(a - 1) + fibon(a - 2);
}
alert(fibon(3)); 