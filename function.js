﻿'use strict';
function abs(x) {
    if (x > 0) {
    return x;
    } else {
        return -x;
    }
}


//testing
if (abs(2) == 2) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (abs(-3) == 3) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (abs(3.5) == 3.5) {
    console.log("Pass");
} else {
    console.log("Fail");
}

'use strict';
function area_of_circle(ri, pi) {
    if (pi === null || pi ===undefined) {
        pi = 3.14;
    }
    return ri * ri * pi;
}


//testing
if (area_of_circle(2) === 12.56) {
    console.log("Pass");
} else {
    console.log("Fail");
}

if (area_of_circle(2, 3.1416) === 12.5664) {
    console.log("Pass");
} else {
    console.log("Fail");
}

'use strict'
var add = function (a,b) {
    return a + b;

};


// unit test
if(add(3,4)===7){
    console.log("add function test pass");
}else{
    console.error("add function test fail");
}


// The Method Invocation Pattern
var myObject ={
    value: 0,
    increment: function(inc){
        //方法可以使用this访问自己所属对象的属性
        this.value+= (typeof inc ==='number' ? inc:1);
    }
}

// unit test
myObject.increment();
console.log(myObject.value);//1
myObject.increment(2);
console.log(myObject.value);//3





