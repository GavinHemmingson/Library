let formBookSelect = document.querySelector("dialog");

const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const titleVal = document.getElementById("title");
const authorVal = document.getElementById("author");
const pagesVal = document.getElementById("pages");
const readVal = document.getElementById("read");

showButton.addEventListener("click", () => {
    formBookSelect.showModal(); 
 });
 
 closeButton.addEventListener("click", () =>
     {
        submitBook();
        formBookSelect.close();
     }
 )

 function submitBook()
{
    let demoBook = new Book(titleVal.value,authorVal.value,pagesVal.value,readVal.value)
    addBookToLibrary(demoBook);
    titleVal.value = "";
    authorVal.value = "";
    pagesVal.value = "";
    readVal.value = "";
    displayBook()

}