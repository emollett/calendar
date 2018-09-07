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
  var calBlock = document.getElementById("calBlock");

  for (i=0; i<numberOfWeeks.value-1; i++){
    var blockExtend = calBlock.cloneNode(true);
    document.getElementById("cal").appendChild(blockExtend);
  }

  //testing bit for outputting date
  var firstDate = document.getElementById("startDate").value;

  var outputDate = document.createElement('p');
  var dateText = document.createTextNode(firstDate);
  outputDate.appendChild(dateText);
  document.getElementById("testOutput").appendChild(outputDate);
}
