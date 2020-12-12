/**
 * 一: 变量
 *  1： let 、 var 、 const
 *
 * 二：数据类型
 *  1：基础数据类型
 *  - number 数值
 *  - string 字符串
 *  - Boolean 布尔
 *  - null 空
 *  - undefined 未定义
 *  - Symbol
 *  - bigint
 *  2： 复杂数据类型
 *  - Object 对象
 *  - Array 数组
 *  - Date  日期
 *  - try ... catch 异常
 *  - RegExp 正则
 *  3： function 函数
 *  4： typeof 浅层判断，instanceof, isArray
 * 三：语句
 * 1： 判断
 * - if ... else
 * - switch case break default
 * -  ? :   三元运算符
 * -  ?.
 * 2: 循环
 * - for
 * - for ... in
 * - while: 固定判断值
 * - do ... while
 * - continue break
 * - return 1
 *
 * 3：
 */
console.log(2)

function a () {
  try {
    return 1
  } finally {
    console.log('finally')
  }
}
a()
