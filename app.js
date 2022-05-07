// // console.log('hi')
// const obj = {
//     name: "C class",
//     brand: "Mercedess"

// }
// console.log(obj);
// console.log("Hi");
// console.info('Here i am');
// console.log(window);
// window.alert('this is a alert')
const obj = {
    name:"C class",
    brand: "Mercedes",
    model:2022,
    log:function(){
        console.log(this)
    }
}
console.log(this);
obj.log();

function greet(){
    console.log('hi');
}
greet();