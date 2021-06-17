var name = prompt ("what is your name: ")
alert("welcome to TRRIFIC PHONE "+ name )
var fav = prompt("what do you like more:iPhone 12,Galaxy S21 5G,orNote 20")

function myFunction() {
  confirm("Press a button!");
}

while (fav != "iPhone 12"&& fav !="Galaxy S21 5G"&& fav !="Note 20"){
     fav=prompt("pleas try again")
    
}
if (fav == "iPhone 12"){
 var numpic=prompt("how many times you want to see this photo")
 for(var x=0; x < numpic ;x++)
 document.write(  
    "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_MdZIjOQpdweL1F3TdDeF82Ad_ab6geqJA&usqp=CAU'>" )
document.write("<p>"+"wow it is excellent choice "+"</p>")
}
else if (fav == "Galaxy S21 5G"){
  document.write(
 "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUeiBVkWUFVbNZCEwSt1RjP66V4OhixDM7Q&usqp=CAU' alt='s21'>")

 
     


// "</div>")
  

  }
else if (fav == "Note 20"){
  document.write("<p>"+"yea we have this nice phone enjoy!"+"</p>")

}
else 
alert("sorry we dont have this phone "+name + "have great day ")