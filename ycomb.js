/**
 * Notes to self:
 * Mike has suggested to me that the Y-combinator will be a useful tool for this project.
 * He suggests embedding a memoization function inside the Y-combinator in order to prevent
 * the recursive algorithm from repeating tasks already completed.
 */

//const Y = g => (x => g(x(x)))(x => g(x(x)))
const Y = f => (x => x(x))(x => f(y => x(x)(y)))

const factorial = Y(f => n => n ? n * f(n - 1) : 1);

console.log(factorial(5)) // 120
