/**
 * 函数
 *
 * 1： 实参
 * 2： 形参
 * 3:  定义函数
 * - 表达式定义函数  （函数提升）
 * - 字面量定义函数
 * 4：return 返回值 （函数体， return 以后不执行）
 * 5： 局部变量（函数体，函数形参）， 全局变量 （定义在函数外的变量）
 * 6： 作用域链
 */

function add(a, b) {
  return a * b;
}

let sum = add(2, 9);
console.log(sum);
