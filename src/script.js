// variable intialization
var add=document.getElementById("ADD");
var dId=document.getElementById("displayId");
var dName=document.getElementById("displayName");
var dPrice=document.getElementById("displayPrice");

var data=[];

// logic!!


function display()
{    
    dId.innerHTML="";
    dName.innerHTML="";
    dPrice.innerHTML="";
    console.log(data)
    data.forEach(function myFunc(value,index,array){
          dId.innerHTML+='<br>'+array[index].id;
          dName.innerHTML+='<br>'+array[index].name;
          dPrice.innerHTML+='<br>'+array[index].price;

    });
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
  data.push({'id':id,'name':Name,'price':Price});
  display();
 });

