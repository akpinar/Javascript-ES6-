//obje olutşruamdan class içerisindeki methodları kullanmayı sağlar
//static methodları obje oluşturup kullanamazsın(obje üzerinden erişime izin vermez.).

class Matematik{
    static cube(x){ // bu methoda sınıf üzerinden erişim sağlanır. obje üzerinden erişim yoktur.
        console.log(x*x*x);
    }
    sqrt(x){ //bu methodu kullanmak için obje oluşturmak zorunlu
        console.log(x*x);
    }
}

Matematik.cube(3);

const math = new Matematik();
math.sqrt(4);

//object.create(); methodu obje üzerine static yazılmıştır.
