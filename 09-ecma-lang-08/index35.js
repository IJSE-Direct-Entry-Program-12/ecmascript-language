/* Clousers */

let i = 5;

function outerFn(x,y){
    let sum = x + y;

    function innerFn(value){
        let total = value + sum;
        sum = total + i;
        i = sum;
        return total;
    }

    return innerFn;
}

const result = outerFn(10,20)(30);
console.log(`result=${result}, i=${i}`);