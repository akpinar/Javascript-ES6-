// setler kümeler gibidir.

const mySet = new Set();

mySet.add(100);
mySet.add(100);//hata vermez ama sete de eklemez
mySet.add(3.14);
mySet.add("sena");
mySet.add(true);
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

console.log(mySet);

const mySet2 = new Set([1100,3.14,"sena"]);

console.log(mySet2);

//Size

console.log(mySet2.size);

//delete eğer o değer varsa siler yoksa hata dönmez

mySet.delete("sena");screen
console.log(mySet);

//has metodu o değer kümede var mı diye kontrol edilir.

console.log(mySet.has("sena"));
console.log(mySet.has(3.14));
console.log(mySet.has(200));
console.log(mySet.has([1,2,3]));

//For each

mySet.forEach(function(value){
    console.log(value);
});

//for of

for (const value of mySet) {
    console.log(value);
}

//arraylerden set oluşturma

const array = Array.from(mySet);

console.log(array);