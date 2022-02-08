// variable intialization
var add=document.getElementById("ADD");
var dId=document.getElementById("displayId");
var dName=document.getElementById("displayName");
var dPrice=document.getElementById("displayPrice");
var dUpdate=document.getElementById("displayUpdate");
var tophead=document.getElementById("topheading");

var data=[];

// logic!!


function display()
{    
    dId.innerHTML="";
    dName.innerHTML="";
    dPrice.innerHTML="";
    dUpdate.innerHTML="";
    console.log(data)
    data.forEach(function myFunc(value,index,array){
          dId.innerHTML+='<br>'+array[index].Id;
          dName.innerHTML+='<br>'+array[index].name;
          dPrice.innerHTML+='<br>'+array[index].price;
          dUpdate.innerHTML+='<br>'
          dUpdate.appendChild(array[index].edit);
          dUpdate.appendChild(array[index].deletes);

    });
}



 // onclick event

 add.addEventListener("click",function myFunc(){
   
  // value extraction 
    var id=document.getElementById("id").value;
    var Name=document.getElementById("Name").value;
    var Price=document.getElementById("Price").value;
 
  //DEFINITION OF EDIT
    var edit=document.createElement("button");
    edit.innerHTML="edit";
    /*
    edit.addEventListener("click",function editFunc()
    {
     tophead.innerHTML="this is object "+id+" "+Name;

    });
   */
  //DEFINITION OF DELETE
    var deletes=document.createElement("button");
    deletes.innerHTML="delete";
   /*
    edit.addEventListener("click",function deleteFunc()
    {
     
    });
   */

    // value to send for process
    console.log("values to be sended for processing");
    console.log(id,Name,Price);
 
    if (data.length===0)
    {
        data.push({'Id':id,'name':Name,'price':Price,'edit':edit,'deletes':deletes});
        display();
    }
    else if (check(id))
    {
        data.push({'Id':id,'name':Name,'price':Price,'edit':edit,'deletes':deletes});
        display();

    }


 });
 function check(x)
 {
    for(i=0;i<data.length;i++)
        
    {    console.log(4234)
         console.log(data[i])
        if (x == data[i].Id)
        {
           return false;
        }
    }
    return true;

 }

 

 
