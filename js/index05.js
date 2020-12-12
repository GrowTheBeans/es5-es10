/**
 * 条件语句
 * if ... else  判断类型
 * switch  判断  switch 开关  case 条件 break 终止 default 打破
 *
 * 循环语句
 * while
 * do ... while
 * for 循环
 *
 * 三元表达式
 * a > b ? a : b
 */

// if() 里面条件 为 布尔值

if (true) {
  console.log('真');
} else {
  console.log('假')
}

var a = 2;
switch (a) {
  case 1:
    console.log('星期一');
    break;
  case 2:
    console.log('星期二');
    break;
  case 3:
    console.log('星期三');
    break;
  case 0:
    console.log('星期日');
    break;
  default:
    console.log('不知道星期几')
}

var arr = [3, 12, 20, 19];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}


let num = 0, sum = 0;
while (num <= 100) {
  sum += num;
  num++
}
console.log(sum);
