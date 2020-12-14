//Object.Create methodu bir obje oluştururken protoypeını başka bir objeden oluşturmamızı sağlıyor.

// const obj = {
//     test1: function(){
//         console.log("test 1");
//     },
//     test2: function(){
//         console.log("test 2");
//     }
// }

// console.log(obj);

// const emp = Object.create(obj);
// emp.name ="sena";
// emp.age = 20;

// console.log(emp);

function Person(){

}

Person.prototype.test1 = function(){
    console.log("Test 1");
}

Person.prototype.test1 = function(){
    console.log("Test 1");
}

function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Sena",20);

emp.test1();
console.log(emp);