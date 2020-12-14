// const emp1 = { //object literal
//     name: sena,
//     age: 20,
//     showInf:function(){console.log("bilgiler getiriliyor");}
// };

// const emp2 = {
//     name: ali,
//     age: 21
// };

// console.log(emp1);



function Employee(name,age,salary) //yapıcı fonksiyon-constructor
{
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos=function(){ //this anahtar kelimesi şu anki objemizi gösterir
        console.log(this.name,this.age,this.salary);
    }
}

// kendi constructorımızan obje oluşturabiliriz.
const emp1 = new Employee("sena",20,24545);




