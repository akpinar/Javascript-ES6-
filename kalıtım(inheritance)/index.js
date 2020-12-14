class Person { //supercalss, base class 
    constructor(name,age){
        this.name = name;
        this.age = age;
}
    showInfos(){
        console.log("isim:" + this.name + "yaş:" + this.age);
    }
}

class Employee extends Person{ // Subclass, childclass
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age); //üst sıfının özelliklerini,methodlarını
        this.salary = salary;
    }
    showInfos(){
        console.log("isim:" + this.name + "yaş:" + this.age + "maaş:" + this.salary);

    }
    toString(){
        console.log("Employee");
    }
}

// console.log(emp);
// emp.showInfos();

emp.showInfos();
emp.toString();