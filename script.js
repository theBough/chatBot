var phrase = "Hi there, welcome."
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
  phrase = phrase.toLowerCase().replace(/[^\w\s\d]/gi,"");
  console.log(phrase);
  i=0;
  output.innerHTML += "<br>You: " + phrase + "<br>"
  respond();
}

function respond(){
  phrase = "Oh great name!"
  i=0;
  ghostTyping();
}
