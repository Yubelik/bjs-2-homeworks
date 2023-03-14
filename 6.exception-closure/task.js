function parseCount(value){
    // console.log("Number.isNaN(Number.parseFloat(value)) = "+Number.isNaN(Number.parseFloat(value)));
    if (Number.isNaN(Number.parseFloat(value))) {
        throw new Error('Невалидное значение');
      }
      return Number.parseFloat(value) ;
}



function validateCount(value){
    // console.log("Number.isNaN(Number.parseFloat(value)) = "+Number.isNaN(Number.parseFloat(value)));
    // parseCount(value);
    try {
        return parseCount(value);
      } catch (err) {
        return err;
      }
}

class Triangle{
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a+b)<c) || ((b+c)<a) || ((c+a)<b)) throw new Error('Треугольник с такими сторонами не существует');
        }
    get perimeter(){
        let rezult = this.a+this.b+this.c
        console.log("perimeter = "+rezult);
        return (rezult);
    }
    get area(){
        let p = 0.5*(this.a+this.b+this.c);
        let rezult = Math.sqrt(p*((p-this.a)*(p-this.b)*(p-this.c)));
        rezult = Math.round(Math.floor(rezult * 10000) / 10) / 1000;
        
        console.log("area = " + rezult);
        return (rezult);
    }

    //Геттер `area` должен возвращать площадь треугольника. Для подсчёта площади используйте [формулу Герона](https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%80%D0%BC%D1%83%D0%BB%D0%B0_%D0%93%D0%B5%D1%80%D0%BE%D0%BD%D0%B0). 
    //Точность должна вычисляться с обозначением до трёх знаков после запятой.
}
    