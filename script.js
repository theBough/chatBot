var phrase = "Hi there, welcome."
var i = 0;
var output = document.getElementById("output")
var theirWords = document.getElementById("theirWords")

//These are words and phrases we are looking for in
//the user's text.
var target = [
  ["hi","hey","hello"],
  ["how are you","what is up"],
  ["bad", "bored", "tired", "sad"],
  ["tell me a story", "tell me a joke"]
]//end array

//Our reply to the users phrase, and or questions.
var reply = [
  ["Hello!" , "Hi again","Howdy","Hey!"],
  [
    "I am doing well thanks. How about you?",
    "Pretty well, how are you?",
    "Fantastic thanks. I can I help?"
  ],
  ["Well that sucks.", "Sorry to hear", "Why?"],
  ["I'm affraid of the calendar. Its days are numbered"]
]//

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
  i=0;
  output.innerHTML += "<br>You: " + phrase + "<br>"
  respond();
}
function respond(){
  phrase = compare(target, reply, phrase)
  i=0;
  ghostTyping();
}
function compare(thisTarget, thisReply, thisPhrase){
  for(var x  = 0 ; x < thisTarget.length ; x++){
    for(var y = 0; y < thisTarget[x].length ; y++){
      if( thisTarget[x][y] == thisPhrase){
        return(thisReply[x][y])
      }
    }// end y for loop
  }//end x for loop
}//end function
