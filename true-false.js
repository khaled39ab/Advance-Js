//falsy values
// null, undefined, 0, "", false, NaN are falsy values

const a = "";
const b = 0;
const c = null;
const d = undefined;
const e = false;
const f = NaN;

if (a || b || c || d || e || f){
    console.log("This is truthy value");
}else {
    console.log("This is falsy value");
};