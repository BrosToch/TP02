

document.getElementById('form').addEventListener('submit',(e)=>{
    console.log("click");
    let book = document.getElementById("book").value;
    let category =document.getElementById("category").value;
    let price = document.getElementById("price").value;
    addRecord(book, category, price);

    e.preventDefault();
});

var inputBook = [];

function addRecord(book,category, price){

    var informationBook = {
        book: book,
        category:category,
        price : price
    }
    inputBook.push(informationBook);
    readBook();
    console.log(inputBook);
    document.getElementById("form").reset();
}

function readBook(){

    var myBook = document.getElementById("displayBook")
    myBook.innerHTML = '';
    for(var i =0; i<inputBook.length; i++){
        myBook.innerHTML=
        `
        <div class="displayBook">
        <div class="display">
            
        <div style=" margin-left: 150px;">
            <span><button class="edit" onclick="updateBook('${i}')">Edit</button></span>
            <span><button class="remove" onclick="deleteBook('${i}')">Delete</button></span>
        </div>
        <div> 
             <img src="./book.svg" alt="" height="150px" width="150px" style=" margin:10px 50px;" >
        </div>
        <div>
            Name: ${inputBook[i].book}
        </div>
        <div>
            Category: ${inputBook[i].category}
        </div>
        <div>
            Price: ${inputBook[i].price} 
        </div>

        </div> 
        
        </div>
        `      
    }
}

function deleteBook(i){
    inputBook.splice(i,1);
    readBook();
}

function updateBook(index){

    var myBook = document.getElementById("displayBook")
    myBook.innerHTML = '';
    for(var i =0; i<inputBook.length; i++){
        if(i==index){
           
            
            
        }
        
    }

}

