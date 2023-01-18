//initializes count to 0
let count=0 
//fetches the save btn
let SaveEl=document.getElementById("save-el") 
//fetches the h2 element
let CountEl=document.getElementById("count-el") 

function increment(){
    //onclick the count will be added to 1
    count+=1 
    //.textcontent causes the change in the DOM
    CountEl.textContent=count
}
function save(){
    //this is assigning of the variable with values
    let CountStr=count + " -  " 
    //the "Previous entries" + the new count will be added
    SaveEl.textContent+=CountStr 
    //the document count on the browser shall be changes to 0 when the button is clicked
    CountEl.textContent=0 
    //changes the global variable count back to zero for a new count
    count=0 
}