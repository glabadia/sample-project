export const strictEquals = (a, b) =>
  Object.is(a, b) &&
  ((Object.is(a, NaN) && Object.is(b, NaN)) ||
    (Object.is(a, -0) && Object.is(b, 0)) ||
      (Object.is(a, 0) && Object.is(b, -0)));
