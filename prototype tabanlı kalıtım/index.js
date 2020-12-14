function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos=function(){
    console.log("isim:" + this.name + " yaş:" + this.age);
}

//const person = new Person("sena",20);
//console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}

//overriding-iptal etme

Employee.prototype.showInfos=function(){
    console.log("isim:" + this.name + " yaş:" + this.age + " maaş:"+this.salary);
}

const emp = new Employee("sena",20,5451);

console.log(emp);
// emp.showInfos();
// emp.toString();



