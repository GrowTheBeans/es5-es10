function createComparisonPunction (proprtyName) {
    return function(obj1,obj2){
        var value1 = obj1[proprtyName];
        var value2 = obj2[proprtyName];
        console.log(value1,value2);
        
        if(value1 == value2){
            return -1;
        }else if(value1 > value2){
            return 1;
        }else{
            return 0;
        }
    }
}
var data = [
    {name:'ZHH',age:22},
    {name:'Z2432H',age:32},
    {name:'Z24535632H',age:12},
]
data.sort(createComparisonPunction('age'));
console.log(data);
data.sort(createComparisonPunction('name'));
console.log(data);


// 递归
function factorial(num){
    if(num<=1){
        return 1;
    }else {
        return num * factorial(num-1);
    }
}

function factorial(num){
    if(num<=1){
        return 1;
    }else {
        return num * factorial(num-1);
    }
}
function factorial1(num){
    if(num<=1){
        return 1;
    }else {
        return num * arguments.callee(num-1);
    }
}

console.log(factorial(5));
console.log(factorial1(10));
