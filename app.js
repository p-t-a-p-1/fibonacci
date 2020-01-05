/**
 * フィボナッチ数列 f(n) = f(n-1) + f(n-2)
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
 */
'use strict'
// Map作成
const memo = new Map()
// 0, 1はデフォルト値
memo.set(0, 0)
memo.set(1, 1)

/**
 * Map関数を用い、フィボナッチ数列の計算を行う
 * @param int n
 */
function fib(n) {
  if (memo.has(n)) {
    return memo.get(n)
  }
  const value = fib(n - 1) + fib(n - 2)
  memo.set(n, value)
  return value
}
const length = 40
for (let i = 0; i <= length; i++) {
  console.log(fib(i))
}
