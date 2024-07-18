const math=require("./math.js")


let num1=parseInt(process.argv[2]);
let num2=parseInt(process.argv[3]);

console.log(`the sum of ${num1} and ${num2} is ${math.add(num1,num2)}`);
console.log(`the sum of ${num1} and ${num2} is ${math.sub(num1,num2)}`);
console.log(`the sum of ${num1} and ${num2} is ${math.mul(num1,num2)}`);
console.log(`the sum of ${num1} and ${num2} is ${math.div(num1,num2)}`);
