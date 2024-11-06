const prompt= require(`prompt-sync`)({sigint:true});

let num = prompt(`enter any number =`);

let i =0;
let sum= 0;

do{
    sum += i;
    i++;
}while(i<=num);

console.log(`Sum of Numbers = ${sum}`);