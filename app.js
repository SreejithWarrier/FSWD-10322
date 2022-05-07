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
// const obj = {
//     name:"C class",
//     brand: "Mercedes",
//     model:2022,
//     log:function(){
//         console.log(this)
//     }
// }
// console.log(this);
// obj.log();

// function greet(){
//     console.log('hi');
// }
// greet();

const Car = function(name,brand,model){
    console.log(this)
    this.name = name
    this.brand = brand
    this.model = model
}

const car1 = new Car('C 200D','Mercedes',2022)
const car2 = new Car('M2 Comp','BMW',2022)

console.log(car1)