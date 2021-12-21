const iAmGlobal = 45;

function local() {
    const iAmLocal = 10;
    const sum = iAmLocal + iAmGlobal ; //global variable can access from anywhere
    console.log(iAmGlobal)
    return sum;
}
// console.log(iAmLocal); //Local variable can't access from out of his scope
const result = local ();
console.log(result);

//Blocked scope
{
    const iAmBlocked = 50;
    function blocked (){
        const diff = iAmBlocked - iAmGlobal ;
        return diff;
    }
    console.log(iAmBlocked);

    const result2 = blocked();
    console.log(result2);

    function blocked2 (){
        const dev = iAmBlocked / iAmGlobal; //blocked variable can access from anywhere in his block
        return dev;
    }
}
// console.log(iAmBlocked); // Blocked variable can't access from out of his block

//lexical scope
// function outer (){
//     const t = 100;
//     function inner (){
//         const s = 80;
//         function inner2(){
//             const sum = iAmGlobal + t + s;
//             return sum;
//         }
//         const sum = inner2();
//         return sum;
//     }
//     const sum = inner();
//     return sum;
// }
// const sum = outer();
// console.log(sum);

function outer (){
    const t = 100;
    function inner (){
        const s = 80;
        function inner2(){
            const sum = iAmGlobal + t + s;
            return sum;
        }
        const sum = inner2();
        return sum;
    }
    const sum = inner();
    return sum;
}
// const sum = outer();
// console.log(sum);
console.log( outer());