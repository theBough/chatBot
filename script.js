var phrase = "Hi there, welcome, can I have your name please."
var i = 0;
var output = document.getElementById("output")
var theirWords = document.getElementById("theirWords")

function ghostTyping(){
  if( i < phrase.length){
    output.innerHTML += phrase.charAt(i);
    i++;
    setTimeout(ghostTyping , 50);
  }//end if
}//end function
function getTextInputBox(){
  //this function will be called when the user presses the btn
  //and will get the words the user types in 
  //the input box
  phrase =  theirWords.value;
  i=0;
  output.innerHTML += "<br>Boughen Bot: "
  ghostTyping();
  
}
