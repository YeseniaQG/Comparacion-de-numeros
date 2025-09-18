const numbers=document.getElementById("numbers");
const result=document.getElementById("result");
const result2=document.getElementById("result2");

let num1 = parseInt(prompt(`introduzca el primer número`));
let num2 = parseInt(prompt(`intrioduzca el segundo número`));
let num3 = parseInt(prompt(`introduzca el tercer número`));

numbers.textContent=`los números introducidos son ${num1}, ${num2}, ${num3}`;

//console.log("Los números de menor a mayor son:" + x,z,y);

if(num1>=num2 && num1>=num3 && num2>=num3){
    result.textContent = `El orden es: ${num1}, ${num2}, ${num3}`;
}else if(num1>=num2 && num1>=num3 && num2<=num3){
    result.textContent = `El orden es: ${num1}, ${num3}, ${num2}`;

}else if(num2>=num1 && num2>=num3 && num1>=num3){
    result.textContent = `El orden es: ${num2}, ${num1}, ${num3}`;
}else if(num2>=num1 && num2>=num3 && num1<=num3){
    result.textContent = `El orden es: ${num2}, ${num3}, ${num1}`;

}else if(num3>=num1 && num3>=num2 && num1>=num2){
    result.textContent = `El orden es: ${num3}, ${num1}, ${num2}`;
}else if(num3>=num1 && num3>=num2 && num1<=num2){
    result.textContent = `El orden es: ${num3}, ${num2}, ${num1}`; 
}

let x = Math.min (num1, num2, num3);
let y = Math.max (num1, num2, num3);
let z = (num1 + num2 + num3)-x-y;

result2.textContent=`Los nùmeros de menor a mayor son: ${x}, ${z}, ${y}`;


