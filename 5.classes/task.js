class PrintEditionItem {
    constructor(name,releaseDate,pagesCount,state,type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
        fix() {
            this.state *= 1.5;
        }
        set state(value){
            // debugger;
            if(value < 0){
                this.state = 0;
            }else if(value > 100){
                this.state = 100;
            }
             else {
                this._state = value;
            }
        }
        get state(){
            return this._state;
        }
} 
class Magazine extends PrintEditionItem{
    constructor(name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state,type);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author,name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state,type);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state,type);
        this.author = author;
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state,type);
        this.author = author;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author,name,releaseDate,pagesCount,state,type){
        super(name,releaseDate,pagesCount,state,type);
        this.author = author;
        this.type = "detective";
    }
}
   //extends PrintEditionItem
class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book); 
        }
    }
    findBookBy(type, value){
        
        // console.log(" type = "+type+ " value = "+value + " this.books[] = "+this.books[0].name);
        // console.log("this.books = "+this.books[1].type);  
        let x = this.books.find(item => item[type] == value);
        // console.log("x = "+ x);   
        if (x === undefined){
            return null;        
            } 
        else {
            console.log(" type = "+type+ " value = "+value); 
            console.log("name = " + this.books.find(item => item[type] == value).type);
            return this.books.find(item => item[type] == value).name;
            } 
                 
    }
    
    giveBookByName(bookName){
        if (this.books.find(item => item.name == bookName) == bookName ){
            return this.books.name
        } 
        // else ((this.books.find(item => item.name == bookName)) === undefined) {
        //     // console.log("item.name = "+null);
        //     return null;
        // }
    }
}


const library = new Library("Библиотека имени Ленина");

// library.addBook(
//  new DetectiveBook(
//    "Артур Конан Дойл",
//    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
//    2019,
//    1008
//  )
// );
// library.addBook(
//  new FantasticBook(
//    "Аркадий и Борис Стругацкие",
//    "Пикник на обочине",
//    1972,
//    168
//  )
// );
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"
// console.log("name = "+library.books[0].name);

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
    

