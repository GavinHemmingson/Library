const myLibrary = [];
let num = true;
let start = 1;

function Book(title,author,pages,read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function()
    {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    }
}

function addBookToLibrary(book)
{
    myLibrary.push(book);
}

function displayBook()
{
    console.log("fish")
    // for(let i = 0;  i < myLibrary.length; i++)
    //     {
    //         let newDiv = document.createElement("div");
    //         let textBox = document.createElement("p")
    //         let newButt = document.createElement("button"); 
    //         let readButt = document.createElement("button");
            
            
    //         textBox.classList.add("bookInfo")
    //         textBox.textContent = `Title: ${myLibrary[i].title} \r\nAuthor: ${myLibrary[i].author}  \r\nPages: ${myLibrary[i].pages} \r\nRead: ${myLibrary[i].read}`
    //         newButt.classList.add("remove")
    //         newButt.textContent = "Remove Book"

    //         readButt.classList.add("remove")
    //         readButt.textContent = "Read?"                     
    //         newDiv.append(newButt, textBox, readButt);

    //         readButt.addEventListener("click", ()=>{
    //             if(myLibrary[i].read != "yes") 
    //                 {
    //                     myLibrary[i].read.value = "no"
    //                 }
    //             else
    //                 {
    //                     myLibrary[i].read.value = "yes"
    //                 }})
    //         let main = newButt.parentElement 
    //         newButt.addEventListener("click", ()=>{main.remove()})
    //         console.log(main)
    //         document.body.appendChild(newDiv)
    //         // document.body.append(newDiv, newButt)
    //         newDiv.classList.add("new");
    //         console.log("taco");
    //         console.log(myLibrary[i].author);

            
    //     }

    myLibrary.forEach(display)
        {

        }
}
function display(item,index,array)
{
 

    let createDiv = document.createElement("div");
    let createText = document.createElement("div");
    let createRemoveButton = document.createElement("button");
    let createReadButton = document.createElement("button");

    createDiv.classList.add("container");

    createText.classList.add(`bookInfo`+ start);
    createText.textContent = ` Title: ${item.title},\n Author: ${item.author},\n Page: ${item.pages}, \n Read: ${item.read} `;

    createRemoveButton.classList.add("remove");
    createRemoveButton.textContent = "Remove";

    createReadButton.classList.add("read");
    createReadButton.textContent = "Read"

    createReadButton.addEventListener("click", ()=> {
    if(num == true){item.read = "read"}
    else if(num == false)
        {item.read = "not read"}

    createText.textContent =`Title: ${item.title},\n Author: ${item.author},\n Page: ${item.pages}, \n Read: ${item.read}`
        num = !num
    }
    )

    createDiv.append(createText, createRemoveButton, createReadButton);
    document.body.appendChild(createDiv);

    let deleteblock = createRemoveButton.parentElement
    createRemoveButton.addEventListener("click", () => {rmvBook(),deleteblock.remove()})

    function rmvBook()
    {
        console.log(typeof(index))
        if(myLibrary.length>1){myLibrary.splice(index,1)}
        else myLibrary.pop()

        
        console.log(myLibrary)
    }
}
function screenWipe()
{
    let deleteDiv = document.getElementsByClassName("container")
    while(deleteDiv.length > 0)
        {
            deleteDiv[0].parentNode.removeChild(deleteDiv[0])
        }
}