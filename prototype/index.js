//js prototype tabanlı programlama dili

function Employee(name,age){
    this.name = name;
    this.age = age;

    //bu şekilde yazarsak 1000 tane obje oluşturduğumuzda bellekte çok fazla yer kaplar. 
    // this.showInfos=function(){ 
    //     console.log("isim" + this.name + "yas:" + this.age);
    // }
}
//Her obje ortak protoype ı kullandığı için
//fonksiyonu ortak kullanılan prototype içine yazmak binlerce,yüzlerce obje oluşturduğumuzda belleği yormaz.

Employee.prototype.showInfos = function(){
    console.log("isim" + this.name + "yas:" + this.age);
}

const emp1 = new Employee("sena",20);
const emp2 = new Employee("ali",21);

console.log(emp1);
console.log(emp2);