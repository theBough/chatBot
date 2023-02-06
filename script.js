var phrase = "Will this type by itself"
var i = 0;

function ghostTyping(){
  if( i < phrase.length){
    document.getElementById("output").innerHTML += phrase.charAt(i);
    i++;
    setTimeout(ghostTyping , 1000);
  }//end if
}//end function
