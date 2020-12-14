// let number1,number2;

arr = [100,200,300,400];

// number1 = arr[0];
// number2 = arr[1];

//destructing

// [number1,number2] = arr;

// const[number1,number2] = arr;

// console.log(number1,number2);

//obje destructing

// const numbers = {
//     a:10,
//     b:20,
//     c:30,
//     d:40,
//     e:50
// };

// const {a:number1,c:number2,e:number3} = numbers;

// console.log("Number1:",number1,"Number2:",number2," Number3:",number3);


//Function destructing

// const getLangs = () => ["pyhton","java","c+++"];

// const[lang1,lang2,lang3] = getLangs();

// console.log(lang1,lang2,lang3);

const person ={
    name:"sena akpınar",
    year:2000,
    salary:545646,
    showInfos : () => console.log("bilgiler getiriliyor...")
}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas,bilgileriGoster());