// variable intialization
var add=document.getElementById("ADD");
var d=document.getElementById("list");

// logic!!
function myFunction(n,a,w)
{


    let ob=document.createElement("div")
    let idDisplay = document.createElement("h5");
    let nameDisplay = document.createElement("h5");
    let priceDisplay = document.createElement("h5");

    idDisplay.innerHTML = n;
    nameDisplay.innerHTML = a;
    priceDisplay.innerHTML = w;

    ob.appendChild(idDisplay);
    ob.appendChild(nameDisplay);
    ob.appendChild(priceDisplay);

    d.appendChild(ob);
}



 // onclick event

 add.addEventListener("click",function myFunc(){
   
  // value extraction 
  var id=document.getElementById("id").value;

  var Name=document.getElementById("Name").value;

  var Price=document.getElementById("Price").value;

  // value to send for process
  console.log("values to be sended for processing");
  console.log(id,Name,Price);
  myFunction(id,Name,Price);
 });

