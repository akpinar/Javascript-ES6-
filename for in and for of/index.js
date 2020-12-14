const person = {
    name: "sena",
    age: 20,
    salary: 4545
};

const langs = ["pyhton","java","c++","php"];

const name = "sena";

//For in
//object

// for(let prop in person){
//     console.log(prop,person[prop]);
// }

// array

// for (const index in langs) {
//    console.log(index,langs[index]);
// }

//string

// for (const index in name) {
//    console.log(index,name[index]);
// }

//objectlerde for of döngüsü ile gezinme yapamazsın

for (const value of langs) {
    console.log(value);
    
}

for (const character of name) {
    console.log(character);
}

