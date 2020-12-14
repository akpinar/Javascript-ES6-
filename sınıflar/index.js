class Emplpyee{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }
    showInfos(){
        console.log("isim:"+ this.name + "yaş:" + this.age + "maaş:" + this.salary);
    }
}

const emp = new Emplpyee("sena",20,246546);

//console.log(emp);

emp.showInfos();