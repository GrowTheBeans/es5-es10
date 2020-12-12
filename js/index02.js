/**
 * 数据类型转换
 * 1： 数字类型转换   + ""   String   toString()
 * 2： 字符串类型转换   -  /  %   parseInt    parseFloat
 * 3： 会产生 NaN
 */

var num1 = 34 + '';
console.log(num1, typeof num1);

var str1 = 90.99;
console.log(parseInt(str1));    // 转换成整数
console.log(parseFloat(str1));   // 转换成浮点数


