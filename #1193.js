const fs = require('fs');
const inputData = fs.readFileSync('example.txt').toString().split(' ').map(value=>+value);
/*readFileSync('/dev/stdin')*/

let [a]=inputData;

let i = 1
while(a-i>0) {
    a=a-i;
    i++;
}

if(i%2===1){
    console.log((i+1-a)+'/'+a);
} else{
    console.log(a+'/'+(i+1-a));
}