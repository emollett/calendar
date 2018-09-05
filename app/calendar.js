  function hide(){
    var checkBox = document.getElementById("weekendYes");

    if (checkBox.checked == false){
      saturday.style.visibility="hidden";
      sunday.style.visibility="hidden";
      }else{
      saturday.style.visibility="visible";
      sunday.style.visibility="visible";
      }
    }


function calendarCreate(){
  //to make the calendar appear with the right number of weeks repeated
  var numberOfWeeks = document.getElementById("noWeeks");
  var block = document.getElementById("calBlock");
  var blockExtend = block.cloneNode(true);

  for (i=0; i<numberOfWeeks.value; i++){
    //boxy bit for testing
    document.getElementById("cal").appendChild(blockExtend);
    //texty bit for testing
    //var node = document.createElement("P");
    //var textnode = document.createTextNode("Hellooo " + numberOfWeeks.value);
    //node.appendChild(textnode);
    //document.getElementById("cal").appendChild(node);
  }

}
