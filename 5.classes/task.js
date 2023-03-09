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
   
class Library extends PrintEditionItem{
    constructor(name,book,state){
        super(name,book,state);
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book); 
        }
    }

    findBookBy(type, value){
        console.log("type = "+type+" value = "+value);
        // console.log("books = "+this.books[0].name);
        // console.log("books = "+this.books[0].releaseDate);
        // console.log("if = "+ (this.books.find(item => item.releaseDate == 2021)));
        let x = this.books.find(item => item.type  == 2021);
        console.log("if = "+ x.releaseDate);
        

        if (item => item.type == value){
            let finedBook  = this.books.find(item => item.type == value);
            
            // console.log("Find item = "+finedBook);
            // console.log("Find item too = "+this.books.name);
            return this.books.name;
        } else return null;
        
    }
    
}

    

